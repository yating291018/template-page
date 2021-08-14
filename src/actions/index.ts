import ora from 'ora' // 加载loading
import template from 'art-template'
import path from 'path'
import { writeFileSync } from 'fs-extra'

interface CreateOptions {
  t: string;
}

export default function (PageName: string, options: CreateOptions) {
  // console.log(PageName, options)
  const { t } = options
  const spinner = ora('初始化模版中...').start()

  let componentName = ''
  if (t === 'CC' || t === 'FC') {
    componentName = `template/${t}.ts`
  } else {
    componentName = `template/${t}.vue`
  }

  const content = template(path.join(__dirname, '../../' + componentName), { PageName })

  try {
    writeFileSync(path.join(process.cwd(), PageName + ((t === 'CC' || t === 'FC') ? '.tsx' : '.vue')), content)
    spinner.succeed('生成成功')
  } catch (e) {
    throw e
  }
}