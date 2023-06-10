/// <reference types="multer" />
import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class FileSizeValidationPipe implements PipeTransform {
    transform(value: Express.Multer.File, metadata: ArgumentMetadata): Express.Multer.File;
}
