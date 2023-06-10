"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const file_size_validation_pipe_pipe_1 = require("./file-size-validation-pipe.pipe");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
const my_file_storage_1 = require("./my-file-storage");
const my_file_validator_1 = require("./my-file-validator");
let AppController = exports.AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    uploadFile(file, body) {
        console.log('body', body);
        console.log('file', file);
    }
    uploadFiles(files, body) {
        console.log('body', body);
        console.log('files', files);
    }
    uploadFileFields(files, body) {
        console.log('body', body);
        console.log('files', files);
    }
    uploadAnyFiles(files, body) {
        console.log('body', body);
        console.log('files', files);
    }
    uploadFile2(file, body) {
        console.log('body', body);
        console.log('file', file);
    }
    uploadFile3(file, body) {
        console.log('body', body);
        console.log('file', file);
    }
    uploadFile4(file, body) {
        console.log('body', body);
        console.log('file', file);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)('aaa'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('aaa', {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('bbb'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('bbb', 3, {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFiles", null);
__decorate([
    (0, common_1.Post)('ccc'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'aaa', maxCount: 2 },
        { name: 'bbb', maxCount: 3 },
    ], {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFileFields", null);
__decorate([
    (0, common_1.Post)('ddd'),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: my_file_storage_1.storage,
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadAnyFiles", null);
__decorate([
    (0, common_1.Post)('eee'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('aaa', {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFile)(file_size_validation_pipe_pipe_1.FileSizeValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile2", null);
__decorate([
    (0, common_1.Post)('fff'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('aaa', {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        exceptionFactory: (err) => {
            throw new common_1.HttpException('xxx' + err, 404);
        },
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 1000 }),
            new common_1.FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
    }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile3", null);
__decorate([
    (0, common_1.Post)('hhh'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('aaa', {
        dest: 'uploads',
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [new my_file_validator_1.MyFileValidator({})],
    }))),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile4", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map