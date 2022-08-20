import { Request, Response } from "express";
import sgMail from "@sendgrid/mail";

class EmailSender {
  async sendmail(req: Request, res: Response) {
    sgMail.setApiKey(
      "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"
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
