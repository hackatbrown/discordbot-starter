// This line imports the Client class, which is going to represent your Discord bot's session.
import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";

(async () => {
    // We create the bot object, and login to Discord's servers with the bot token provided
    // in .env.
    const BOT = new Client({intents: IntentOptions});
    await BOT.login(process.env.BOT_TOKEN);

    // The .on() syntax is used when we want the bot to listen to a certain event.
    // Here, we listen to the ready event, which happens when the Discord bot Client is ready.
    BOT.on("ready", () => console.log("Bot is connected to Discord!"));
})