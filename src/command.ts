import { Command } from "commander";

const programe = new Command('hu')
import pageAction from './actions/index'

// 定义一个命令
programe.command('page <PageName>')
  .description('创建一个模版文件')
  .option('-t <reacttype>', '什么类型的页面') // 定义参数
  .action((PageName, options) => {
    // console.log('jstype', languagetype, options)
    pageAction(PageName, options)
  })

programe.parse(process.argv)