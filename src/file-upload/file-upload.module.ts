import { Module } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { EMailModule } from 'src/email/email.module';
import { EMailService } from 'src/email/email.service';

@Module({
  imports: [
    MulterModule.register({
      dest: './src/file-upload/files',
    }),
    EMailModule,
  ],
  providers: [FileUploadService, EMailService],
  controllers: [FileUploadController],
})
export class FileUploadModule {}
