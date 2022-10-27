import { Injectable } from '@nestjs/common';
import { EMailService } from 'src/email/email.service';

@Injectable()
export class FileUploadService {
  constructor(private readonly emailService: EMailService) {}

  async sendFileToEmail(fileName: string) {
    this.emailService.sendImage(fileName);
  }
}
