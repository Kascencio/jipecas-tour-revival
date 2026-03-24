exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  try {
    var apiKey = process.env.RESEND_API_KEY;
    var fromEmail = process.env.RESEND_FROM;
    var toEmail = process.env.RESEND_TO || "all4surerivieramaya@gmail.com";
    var templateId = process.env.RESEND_TEMPLATE_ID || "contact-form-submission";
    var subjectLine = process.env.RESEND_SUBJECT || "Nuevo mensaje de contacto | All4Sure";

    if (!apiKey || !fromEmail) {
      return {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ error: "Missing RESEND_API_KEY or RESEND_FROM" })
      };
    }

    var data = JSON.parse(event.body || "{}");
    var name = String(data.name || "").trim();
    var email = String(data.email || "").trim();
    var phone = String(data.phone || "").trim();
    var service = String(data.service || "").trim();
    var message = String(data.message || "").trim();
    var company = String(data.company || "").trim();

    if (company) {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ok: true })
      };
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message || !emailPattern.test(email)) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ error: "Invalid payload" })
      };
    }

    if (message.length < 10 || message.length > 1500 || name.length > 80) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ error: "Invalid payload length" })
      };
    }

    var submittedAt = new Date().toLocaleString("es-MX", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Cancun"
    });

    var resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: subjectLine,
        template: {
          id: templateId,
          variables: {
            name: name,
            email: email,
            phone: phone || "No proporcionado",
            service: service || "No especificado",
            message: message,
            submitted_at: submittedAt
          }
        }
      })
    });

    if (!resendResponse.ok) {
      var resendBody = await resendResponse.text();
      return {
        statusCode: 502,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ error: "Email provider error", details: resendBody })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ok: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ error: "Unexpected server error" })
    };
  }
};
