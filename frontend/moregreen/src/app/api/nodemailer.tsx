import nodemailer from 'nodemailer';


//const email = process.env.EMAIL 
const pass = process.env.PASS
export const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth:{
        user: 'projectmanagerworldwide100@gmail.com',
        pass: pass,
    }
}) 

export const mailOptions = {
    from: 'projectmanagerworldwide100@gmail.com',
    to:"akrongkofi@gmail.com",
}