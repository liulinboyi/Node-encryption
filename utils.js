// 学习于https://www.jianshu.com/p/b761111eef72 http://nodejs.cn/api/readline.html
const readline = require('readline');

async function input() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let answer = await new Promise((resolve => {
    rl.question('请输入要加密的文本: ', function (answer) {
      console.log('你输入的是 %s', answer);
      resolve(answer);
      // 不加close，则不会结束
    });
  }))
  rl.close();
  return answer;
}

module.exports = input