import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";
import 'dotenv/config';

class EmailSender {
  async sendmail(req: Request, res: Response) {
    
    const key = process.env.SENDGRID_API_KEY;

    sgMail.setApiKey(
      key
    );

    const msg = req.body;

    try {
      const result = await sgMail.send(msg);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
  }
}

export default new EmailSender();
