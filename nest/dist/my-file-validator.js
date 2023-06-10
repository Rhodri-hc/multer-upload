"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyFileValidator = void 0;
const common_1 = require("@nestjs/common");
class MyFileValidator extends common_1.FileValidator {
    constructor(options) {
        super(options);
    }
    isValid(file) {
        if (file.size > 10000) {
            return false;
        }
        return true;
    }
    buildErrorMessage(file) {
        return `文件 ${file.originalname} 大小超出 10k`;
    }
}
exports.MyFileValidator = MyFileValidator;
//# sourceMappingURL=my-file-validator.js.map