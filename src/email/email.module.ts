// import * as path from 'path';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { EMailService } from './email.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'hillary.harber29@ethereal.email',
          pass: 'ch4ytMwV2jEcANwreE',
        },

        // ignoreTLS: true,
        secure: false,
      },
      // defaults: {
      //   from: '"No Reply" <no-reply@localhost>',
      // },
      // preview: true,
      // template: {
      //   dir: process.cwd() + '/template/',
      //   adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
      //   options: {
      //     strict: true,
      //   },
      // },
    }),
  ],
  providers: [EMailService],
})
export class EMailModule {}
