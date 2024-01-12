// This line imports the Client class, which is going to represent your Discord bot's session.
import { Client, GatewayIntentBits } from "discord.js";
import { onInteraction } from "./handlers/onInteraction";
import { IntentOptions } from "./config/IntentOptions";

(async () => {
    // We create the bot object, and login to Discord's servers with the bot token provided
    // in .env.
    const BOT = new Client({intents: IntentOptions})
    await BOT.login(process.env.BOT_TOKEN);

    // The .on() syntax is used when we want the bot to listen to a certain event.
    // Here, we listen to the ready event, which happens when the Discord bot Client is ready.
    BOT.on("ready", () => console.log("Bot is connected to Discord!"));

    // We set up another listener to watch for any "interaction" with the bot.
    // You can find more information about how general interactions work on this link:
    // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object

    // One fundamental interaction corresponds to when a user types a command, which is what
    // we're handling currently in the onInteraction handler we started writing for you. 
    BOT.on("interactionCreate", async (interaction) => await onInteraction(interaction));

    // If you want your bot to do something when a message is sent, you could use the "onMessage"
    // event (BOT.on("onMessage", ...)). There are many different events that your bot can listen
    // for. You can find a list at this URL:
    // https://discord.js.org/#/docs/discord.js/main/typedef/Events
})();