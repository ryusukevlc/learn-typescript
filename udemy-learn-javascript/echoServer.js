const net = require("net");

const PORT = "3000";

net
  // 接続されたら何をするか
  .createServer((socket) => {
    console.log("connected");

    // データを受け取ったら何をするか
    socket.on("data", (data) => {
      console.log(`received: ${data}`);
      socket.write(data);
    });

    // 接続を閉じたら何をするか
    socket.on("close", () => {
      console.log("connection closed");
    });
  })
  // ポートを指定してサーバを起動する
  .listen(PORT, "127.0.0.1");

console.log(`Server started on port ${PORT}`);
