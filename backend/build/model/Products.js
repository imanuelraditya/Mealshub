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
exports.Products = void 0;
/* eslint-disable indent */
const sequelize_typescript_1 = require("sequelize-typescript");
const Tenants_1 = require("./Tenants");
let Products = class Products extends sequelize_typescript_1.Model {
};
exports.Products = Products;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: "id",
    }),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "description",
    }),
    __metadata("design:type", Object)
], Products.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Tenants_1.Tenants),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "id_tenant",
    }),
    __metadata("design:type", Number)
], Products.prototype, "id_tenant", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        field: "image",
    }),
    __metadata("design:type", Object)
], Products.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
        field: "name",
    }),
    __metadata("design:type", Object)
], Products.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        field: "price",
    }),
    __metadata("design:type", Object)
], Products.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "stock",
    }),
    __metadata("design:type", Object)
], Products.prototype, "stock", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Tenants_1.Tenants, "id_tenant"),
    __metadata("design:type", Tenants_1.Tenants)
], Products.prototype, "tenant", void 0);
exports.Products = Products = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "products",
    })
], Products);
