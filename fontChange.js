/**
 * 编写一个node程序，要求功能如下：
 * 使用 module 而不是 commonjs 编写
 * 遍历src 下的所有文件
 */

import fs from 'fs';
import path from 'path';

const dfsFile = (dir, callback) => {

  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        dfsFile(filePath, callback);
      } else {
        callback(null, filePath);
      }
    });
  });
}

dfsFile('./src', (err, files) => {
  let str = fs.readFileSync(files, 'utf-8');
  /**
   * 生成一个正则表达式，用于提取以rem为结尾的数字，病
   * 
   * 举例：1rem => 1
   * .4rem => 0.4
   * 1.67rem => 1.67
   */

  const reg = /(\d*\.?\d+rem)/g;

  str = str.replace(reg, (sub, ...args) => {
    sub = sub.substring(0, sub.length - 3);
    // return sub
    if (sub[0] === '.') {
      sub = '0' + sub;
    }
    return (parseFloat(sub) * 50 / 16).toFixed(4) + "rem";
  });

  fs.writeFileSync(files, str, 'utf-8');
})