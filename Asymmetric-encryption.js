const crypto = require("crypto");
const fs = require("fs");
const input = require('./utils');



void async function () {
  const pub_key = fs.readFileSync("./rsa_public.key");
  const priv_key = fs.readFileSync("./rsa_private.key");

  // const text = "hello, my name is 蚊子";
  const text = await input();

  const secret = crypto.publicEncrypt(pub_key, Buffer.from(text));
  const result = crypto.privateDecrypt(priv_key, secret);

  console.log(secret); // buffer格式
  console.log(result.toString()); // hello, my name is 蚊子
}()

