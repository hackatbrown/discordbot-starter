// This line imports the Client class, which is going to represent your Discord bot's session.
import { Client, Interaction, GatewayIntentBits } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { onInteraction } from "./handlers/onInteraction";

(async () => {
    // We create the bot object, and login to Discord's servers with the bot token provided
    // in .env.
    //const BOT = new Client({intents: IntentOptions});
    const BOT = new Client({intents: [GatewayIntentBits.Guilds]})
    await BOT.login(process.env.BOT_TOKEN);

    // The .on() syntax is used when we want the bot to listen to a certain event.
    // Here, we listen to the ready event, which happens when the Discord bot Client is ready.
    BOT.on("ready", () => console.log("Bot is connected to Discord!"));

    // We set up another listener to watch for any "interaction" with the bot.
    // You can find more information about how general interactions work on this link:
    // https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object

    // One fundamental interaction corresponds to when a user types a command, which is what
    // we're handling currently in the onInteraction handler we started writing for you. 
    //BOT.on("interactionCreate", async (interaction) => await onInteraction(interaction));
    BOT.on("interactionCreate", (interaction : Interaction) => {
        console.log(interaction);
    });

})();