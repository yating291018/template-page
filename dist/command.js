"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var programe = new commander_1.Command('hu');
var index_1 = __importDefault(require("./actions/index"));
// 定义一个命令
programe.command('page <PageName>')
    .description('创建一个模版文件')
    .option('-t <reacttype>', '什么类型的页面') // 定义参数
    .action(function (PageName, options) {
    // console.log('jstype', languagetype, options)
    index_1.default(PageName, options);
});
programe.parse(process.argv);
