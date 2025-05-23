export const emailTemplate = (recipient, orderInfo) => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>Order Confirmation - SneaksWash</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #ffffff;
          background-color: #000000;
          margin: 0;
          padding: 0;
        }
        .container {
          background-color: #111111;
          max-width: 600px;
          margin: 20px auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(142, 202, 255, 0.2);
        }
        h1, h2 {
          color: #8ecaff;
        }
        p {
          line-height: 1.6;
        }
        .highlight {
          background-color: #1a1a1a;
          padding: 15px;
          border-left: 4px solid #8ecaff;
          border-radius: 5px;
          margin: 20px 0;
        }
        .footer {
          font-size: 12px;
          text-align: center;
          color: #777;
          margin-top: 30px;
        }
        .btn {
          display: inline-block;
          padding: 12px 20px;
          background-color: #8ecaff;
          color: #000;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Thanks for your order, ${recipient.name}!</h1>
        <p>
          We're excited to let you know that your order has been received by <strong>SneaksWash</strong>.
          Our team is ready to give your kicks a professional clean-up.
        </p>

        <div class="highlight">
          <h2>What’s Next?</h2>
          <p>
            We'll contact you to arrange a collection or delivery and give your sneakers the restoration they deserve.
          </p>
        </div>

        <p>
          You can view more details about your order by logging into your account.
        </p>

        <a class="btn" href="https://www.sneakswash.com">Go to SneaksWash</a>

        <div class="footer">
          <p>© Sneakswash ${new Date().getFullYear()} – Cleaned with care & precision for sneaker lovers.</p>
        </div>
      </div>
    </body>
  </html>
`;
