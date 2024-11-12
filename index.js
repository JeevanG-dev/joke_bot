const TelegramBot = require("node-telegram-bot-api");

const axios = require("axios");

const dotenv = require("dotenv");

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// bot.on("message", (option) => {
//   console.log("Message arrived", option);

//   bot.sendMessage(option.chat.id, "Hi This is Jeevan, and i love you bhuntu");
// });

bot.onText(/\/joke/, async (option) => {
  const response = await axios.get(
    "http://www.official-joke-api.appspot.com/random_joke"
  );

  const setup = response.data.setup;
  const punchline = response.data.punchline;

  bot.sendMessage(option.chat.id, setup + "," + punchline);
});
