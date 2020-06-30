const crypto = require('crypto');
const hashes = crypto.getHashes();
const input = require('./utils');

void async function () {
  let text = await input();
  console.log('需要加密的文本是: %s', text);
  // text 要摘要的文本
  // hashtype 摘要的算法
  function createHash(text, hashtype) {
    const hash = crypto.createHash(hashtype).update(text).digest("hex");
    console.log(hashtype, hash, hash.length);
  }
  hashes.forEach((type) => {
    // createHash("蚊子", type);
    createHash(text, type);
  });
}()