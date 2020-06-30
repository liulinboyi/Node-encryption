const crypto = require('crypto');
const {
    Writable
} = require("stream");
const fs = require('fs');
const filename = "./README.md";
const hash = crypto.createHash("sha1");
const fsStream = fs.createReadStream(filename);


// fsStream.on("readable", () => {
//     // 哈希流只会生成一个元素。
//     const data = fsStream.read();

//     if (data) {
//         hash.update(data);
//     } else {
//         // 数据接收完毕后，输出hash值
//         console.log(`${hash.digest("hex")} ${filename}`);
//     }
// });


// fsStream.pipe(hash).pipe(process.stdout);


const write = Writable();

write._write = function (data, enc, next) {
    // 将流中的数据写入底层
    process.stdout.write(hash.digest("hex") + "\n");
    // 写入完成时，调用`next()`方法通知流传入下一个数据
    process.nextTick(next);
};

fsStream.pipe(hash).pipe(write); // 正常输出hash值