const net = require("net");
const fs = require("fs");

const PORT = "3000";

net
  // 接続されたら何をするか
  .createServer((socket) => {
    console.log("connected");

    // データを受け取ったら何をするか
    socket.on("data", (data) => {
      const dataString = data.toString();
      const requestLine = dataString.split("\r\n")[0];
      console.log(requestLine);
      const path = requestLine.split(" ")[1];
      console.log(path);

      const requestFile = path.endsWith("/") ? path + "index.html" : path;

      if (!fs.existsSync(`.${requestFile}`)) {
        const httpResponse = `HTTP/1.1 404 Not Found
content-length: 0

`;
        socket.write(httpResponse);
        return;
      }

      const fileContent = fs.readFileSync(`.${requestFile}`);
      const httpResponse = `HTTP/1.1 200 OK
content-length: ${fileContent.length}

${fileContent}`;
      socket.write(httpResponse);
    });

    // 接続を閉じたら何をするか
    socket.on("close", () => {
      console.log("connection closed");
    });
  })
  // ポートを指定してサーバを起動する
  .listen(PORT, "127.0.0.1");

console.log(`Server started on port ${PORT}`);
