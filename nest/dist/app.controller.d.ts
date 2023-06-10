/// <reference types="multer" />
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadFile(file: Express.Multer.File, body: any): void;
    uploadFiles(files: Array<Express.Multer.File>, body: any): void;
    uploadFileFields(files: {
        aaa?: Express.Multer.File[];
        bbb?: Express.Multer.File[];
    }, body: any): void;
    uploadAnyFiles(files: Array<Express.Multer.File>, body: any): void;
    uploadFile2(file: Express.Multer.File, body: any): void;
    uploadFile3(file: Express.Multer.File, body: any): void;
    uploadFile4(file: Express.Multer.File, body: any): void;
}
