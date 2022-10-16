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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class Like {
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: '아이디' }),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], Like.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: '댓글' }),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], Like.prototype, "commentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: '고양이' }),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], Like.prototype, "catId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성된 시간' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Like.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '업데이트된 시간' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], Like.prototype, "updatedAt", void 0);
exports.Like = Like;
//# sourceMappingURL=like.entity.js.map