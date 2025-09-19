import nodemailer from "nodemailer";

export const prerender = false;

export async function POST({ request }) {
  try {
    const { 
      zip, 
      language, 
      help, 
      property, 
      name, 
      email, 
      phone, 
      altPhone, 
      address, 
      city, 
      state, 
      country, 
      conditions 
    } = await request.json();

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
         user: 'Ssctelesalescompany@gmail.com',
        pass: 'bens ksvm zhvs skel',
      }
    });

    let mailOptions = {
      from: email,
       to: 'Ssctelesalescompany@gmail.com',
      subject: `Datos del cliente ${name}`,
      html: `
        <div>
            <p><strong>Zip:</strong> ${zip}</p>
            <p><strong>Language:</strong> ${language}</p>
            <p><strong>Help:</strong> ${help}</p>
            <p><strong>Property:</strong> ${property}</p>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Alt Phone:</strong> ${altPhone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <p><strong>City:</strong> ${city}</p>
            <p><strong>State:</strong> ${state}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Conditions:</strong> ${conditions}</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
