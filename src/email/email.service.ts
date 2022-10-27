import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';

@Injectable()
export class EMailService {
  constructor(private readonly mailerService: MailerService) {}

  public sendImage(imageName: string): void {
    const imagePath = path.resolve(`./src/file-upload/files/${imageName}`);
    console.log('imagePath', imagePath);

    this.mailerService
      .sendMail({
        to: 'rostykwave@gmail.com',
        from: 'hillary.harber29@ethereal.email',
        subject: 'Testing Nest Mailermodule file attachment',

        attachments: [
          {
            filename: imageName,
            path: imagePath,
          },
        ],
      })
      .then(() => {
        console.log(`image ${imageName} successfully sent`, imageName);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
}
