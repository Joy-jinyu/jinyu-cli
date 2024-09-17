import chalk from 'chalk';
import { execSync } from 'child_process';
import path from 'path';
// import fs from 'fs'
// https://astexplorer.net/
// import parser from '@babel/parser'
// eslint-disable-next-line import/no-unresolved, import/extensions
import { traverse } from '.';
// import traverse from '@babel/traverse'
// const parseAst = (originalCode: string) => parser.parse(originalCode, {
//     sourceType: 'module',
//     plugins: ['jsx', 'flow', ['decorators', { decoratorsBeforeExport: true }]]
//   })
// 预备检查
function preCheck(skipCommit) {
    try {
        if (!skipCommit) {
            const gitStatus = execSync('git status').toString();
            if (!gitStatus.match(/nothing to commit/)) {
                console.log('Error：检测到未 commit 的文件，请先 commit 后重试，可以添加 -n 跳过检测');
                process.exit();
            }
        }
    }
    catch (e) {
        console.log('Warning: 不是 git 项目，已跳过 git 检查');
    }
    const hint = [
        '🚀 欢迎使用"自动国际化工具"，请阅读以下注意事项: ',
        '  1. 应选择小粒度的文件夹路径，不宜一次添加过多文件',
        '  2. 复杂情况，比如有变量替换和 useGetHTML 的地方，请人工校验',
        '  3. 执行完建议人工浏览一遍所有文件，做好验证，可使用扫描工具 visage i18n-lint <path>，配合检查'
    ];
    const hintStr = `${hint.join('\n')}\n\n`;
    console.log(chalk.cyan(hintStr));
}
export default function intlDelete(dir, { skipCommit }) {
    preCheck(skipCommit);
    const root = process.cwd();
    const dirPath = path.resolve(root, dir);
    const filePaths = traverse(dirPath);
    const jsFileRegex = /\.(js|jsx|ts|tsx)$/;
    const jsFilePaths = filePaths.filter((p) => jsFileRegex.test(p));
    jsFilePaths.forEach((filePath) => {
        // const originalCode: string = fs.readFileSync(filePath, 'utf-8')
        console.log(`🚀 扫描文件: ${filePath}`);
        // const ast = parseAst(originalCode)
        // traverse(ast, {
        //   enter(path) {
        //     if (path.isIdentifier({ name: 'n' })) {
        //       path.node.name = 'x'
        //     }
        //   }
        // })
    });
}
//# sourceMappingURL=intlDelete.js.map