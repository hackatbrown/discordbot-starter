import { GatewayIntentBits } from "discord.js";

/**
 * This array should contain all events that you want your bot to be able to receive.
 * Basically, you are specifying what information your Discord bot intends to access in order to function properly.
 * 
 * A more detailed explanation of intents can be found on the Discord.js documentation:
 * https://discordjs.guide/popular-topics/intents.html#privileged-intents
 * 
 * You can also find a list of all intents in the Discord developer docs at the following address:
 * https://discord.com/developers/docs/topics/gateway#list-of-intents
 */

export const IntentOptions : GatewayIntentBits[] = [
    GatewayIntentBits.Guilds
];