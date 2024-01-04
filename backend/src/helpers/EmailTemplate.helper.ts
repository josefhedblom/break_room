export const EMAIL_VERIFY_HTML = (verificationLink: string) => {
  return `
  <html lang="en">

  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  
  <body>
      <h1>Email Verification</h1>
  
      <p>Please verifi your email to veify your account.</p>
  
      <a href="${verificationLink}" traget="_blank">Verify your email to verify your account</a>
  </body>
  
  </html>
  `;
};

export const EMIL_VERIFRED_HTML = () => {
  return `
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <body>
        <h1>Email Verified!</h1>
    
        <p>Your account is now verified, your can now login.</p>
    
        <a href="http://localhost:4040/login" traget="_blank">Login</a>
    </body>
    
    </html>
    `;
};
