// npx rollup -c rollup.config.dts.ts --configPlugin @rollup/plugin-typescript
import dts from 'rollup-plugin-dts';

export default {
  input: ['packages/dom-to-image/es/cloneClone.d.ts'], // 指定需要合并的.d.ts文件的glob模式
  output: [{
    file: 'packages/dom-to-image/es/index.d.ts', // 输出合并后的类型声明文件位置
    format: 'es'
  }],
  plugins: [
    dts()
  ]
};
