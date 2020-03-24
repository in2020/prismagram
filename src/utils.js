import { adjectives, nouns} from './words';
import nodemailer from "nodemailer"
import sgTransport from "nodemailer-sendgrid-transport"
import jwt from 'jsonwebtoken'

export const generateSecret = () => {
    const randomNumber = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
}

export const sendMail = (email) => {
    var options = {
        auth: {
            api_user: process.env.SENDGRID_USERID,
            api_key: process.env.SENDGRID_PASSWD
        }
    }

    var client = nodemailer.createTransport(sgTransport(options));

    return client.sendMail(email, function(err, info){
        if (err ){
            console.log(error);
        }
        else {
            console.log('Message sent: ' + info.response);
        }
    });
}

export const  sendSecretMail = (address, secret) => {
    const email = {
        from: "inhong@prismagram.com",
        to: address,
        subject: "Login Secret for Prismagram",
        html: `Hello! Your login secret its ${secret} <br/> Copy Paste on the website to log in`
    }
    sendMail(email);
}

export const generateToken = (id) => jwt.sign({id}, process.env.JWT_SECRET)