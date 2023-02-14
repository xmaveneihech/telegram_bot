const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "6189039150:AAHBLbF4-RzDtpa9TMFoHbY3uMQcpllL9C4";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;
  if (message === "/start", "") {
    bot.sendMessage(chatId, "Добро Пожаловать!");
    bot.sendPhoto(
      chatId,
      "https://img.a.transfermarkt.technology/portrait/big/8198-1673305564.jpg?lm=1", 
    )
    ;
    bot.sendAudio(chatId, "./hello.ogg");
  } else {
    bot.sendMessage(chatId, "Такого ответа нет");
  }
  // send a message to the chat acknowledging receipt of their message
});
