import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { mailOptions, transporter } from './nodemailer';


const CONTACT_MESSAGES_FIELDS: Record<string, string> = {
  name: 'Name',
  phoneNumber: 'Phone Number',
  email: 'Email',
  message: 'Message',
};
// Function to generate HTML content for the email
const generateEmailContent = (data: Record<string, string>) => {
  const stringData = Object.entries(data).reduce((str, [key, val]) =>
    (str += `${CONTACT_MESSAGES_FIELDS[key]}: ${val}\n\n`),
    ''
  );

  const htmlData = Object.entries(data).reduce((str, [key, val]) =>
    (str += `<p><strong>${CONTACT_MESSAGES_FIELDS[key]}:</strong> ${val}</p>`),
    ''
  );const html = `
  <html>
    <head>
      <style>
        /* Add your CSS styles here */
        body {
          font-family: Arial, sans-serif;
          background-color: #FFFF00; /* Yellow background */
        }
        p {
          margin: 0;
        }
        strong {
          font-weight: bold;
        }
        .company-name {
          color: #0000FF; /* Blue text color */
        }
      </style>
    </head>
    <body>
      <p class="company-name">Vycol Ventures</p>
      ${htmlData}
    </body>
  </html>
`;

return {
  text: stringData,
  html,
};
};

export async function POST(request:Request) {
  const body = await request.json()
  console.log(body) 
  try{
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(body),
        subject: body.subject ,
    
  }) 
}catch(err){
  console.log(err);
  return NextResponse.json({id:"name"});
}
  
  return NextResponse.json({id:"name"});
}