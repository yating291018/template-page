"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ora_1 = __importDefault(require("ora")); // 加载loading
var art_template_1 = __importDefault(require("art-template"));
var path_1 = __importDefault(require("path"));
var fs_extra_1 = require("fs-extra");
function default_1(PageName, options) {
    // console.log(PageName, options)
    var t = options.t;
    var spinner = ora_1.default('初始化模版中...').start();
    var componentName = '';
    if (t === 'CC' || t === 'FC') {
        componentName = "template/" + t + ".ts";
    }
    else {
        componentName = "template/" + t + ".vue";
    }
    var content = art_template_1.default(path_1.default.join(__dirname, '../../' + componentName), { PageName: PageName });
    try {
        fs_extra_1.writeFileSync(path_1.default.join(process.cwd(), PageName + ((t === 'CC' || t === 'FC') ? '.tsx' : '.vue')), content);
        spinner.succeed('生成成功');
    }
    catch (e) {
        throw e;
    }
}
exports.default = default_1;
