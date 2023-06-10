/// <reference types="multer" />
import { FileValidator } from '@nestjs/common';
export declare class MyFileValidator extends FileValidator {
    constructor(options: any);
    isValid(file: Express.Multer.File): boolean | Promise<boolean>;
    buildErrorMessage(file: Express.Multer.File): string;
}
