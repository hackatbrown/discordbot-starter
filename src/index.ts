// This line imports the Client class, which is going to represent your Discord bot's session.
import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";

(async () => {
    const BOT = new Client({intents: IntentOptions});
    await BOT.login(process.env.BOT_TOKEN);
})