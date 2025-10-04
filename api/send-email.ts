import { Resend } from 'resend';

const resend = new Resend('re_BDdb2zCK_D4MhverEdwKdq5kqVC7QVe8y');

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  pickupLocation?: string;
  vehicleType?: string;
}

export default async function handler(req: any, res: any) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry from Paros Rent A Car</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-radius: 8px; overflow: hidden;">
          
          <!-- Header with Logo and Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e40af 0%, #0c1e47 100%); padding: 40px 30px; text-align: center;">
              <img src="https://rentacar-paros.gr/logo.png" alt="Aggelos Rentals" style="height: 60px; margin-bottom: 20px;" />
              <h1 style="color: #ffffff; font-size: 28px; margin: 0; font-weight: bold;">New Contact Request</h1>
              <p style="color: #fbbf24; font-size: 16px; margin: 10px 0 0 0; font-weight: 600;">Paros Rent A Car Inquiry</p>
            </td>
          </tr>

          <!-- Contact Information -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #1e40af; font-size: 22px; margin: 0 0 20px 0; border-bottom: 3px solid #fbbf24; padding-bottom: 10px;">Customer Details</h2>
              
              <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 12px; background-color: #f8fafc; border-left: 4px solid #1e40af; margin-bottom: 10px;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
                    <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px; font-weight: 600;">${formData.name}</p>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8fafc; border-left: 4px solid #1e40af;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
                    <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px; font-weight: 600;">
                      <a href="mailto:${formData.email}" style="color: #1e40af; text-decoration: none;">${formData.email}</a>
                    </p>
                  </td>
                </tr>
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8fafc; border-left: 4px solid #1e40af;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
                    <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px; font-weight: 600;">
                      <a href="tel:${formData.phone}" style="color: #1e40af; text-decoration: none;">${formData.phone}</a>
                    </p>
                  </td>
                </tr>
                ${formData.pickupLocation ? `
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8fafc; border-left: 4px solid #fbbf24;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Pickup Location</p>
                    <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px; font-weight: 600;">${formData.pickupLocation}</p>
                  </td>
                </tr>
                ` : ''}
                ${formData.vehicleType ? `
                <tr><td style="height: 10px;"></td></tr>
                <tr>
                  <td style="padding: 12px; background-color: #f8fafc; border-left: 4px solid #fbbf24;">
                    <p style="margin: 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Vehicle Type</p>
                    <p style="margin: 5px 0 0 0; color: #0f172a; font-size: 16px; font-weight: 600;">${formData.vehicleType}</p>
                  </td>
                </tr>
                ` : ''}
              </table>

              <h3 style="color: #1e40af; font-size: 18px; margin: 0 0 15px 0;">Message</h3>
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #fbbf24;">
                <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
              </div>
            </td>
          </tr>

          <!-- Marcia AI CTA -->
          <tr>
            <td style="padding: 30px; background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); text-align: center;">
              <h3 style="color: #0f172a; font-size: 20px; margin: 0 0 15px 0; font-weight: bold;">Need Help with Customer Inquiries?</h3>
              <p style="color: #422006; font-size: 14px; margin: 0 0 20px 0;">Let Marcia AI assist you with instant, intelligent responses!</p>
              <a href="https://rentacar-paros.gr/marcia-ai" style="display: inline-block; background-color: #1e40af; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);">
                Try Marcia AI →
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background-color: #0f172a; text-align: center;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 10px 0;">This email was sent from your Paros Rent A Car website contact form</p>
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                <a href="https://rentacar-paros.gr" style="color: #fbbf24; text-decoration: none;">Visit Website</a> | 
                <a href="tel:+306944950094" style="color: #fbbf24; text-decoration: none;">+30 694 495 0094</a> | 
                <a href="mailto:aggelos@antiparosrentacar.com" style="color: #fbbf24; text-decoration: none;">Contact Us</a>
              </p>
              <p style="color: #475569; font-size: 11px; margin: 15px 0 0 0;">© 2024 Aggelos Rentals. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Paros Rent A Car <onboarding@resend.dev>',
      to: ['aggelos@antiparosrentacar.com', 'fotiskoukakis@gmail.com'],
      replyTo: formData.email,
      subject: 'New Request from Paros Rent a Car',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (error: any) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
