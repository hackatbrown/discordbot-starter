/**
 * This code is from the discord.js Guide's "Registering slash commands"
 * section, which can be found at this URL:
 * https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration
 */

const { REST, Routes } = require('discord.js');
import fs from "fs"

// Makes it so that the .env module finds the appropriate .env file.
require("dotenv").config({ path: './.env'})

const commands = [];

// Grab all the command files from the commands directory you created earlier
const commandFiles : string[] = fs.readdirSync("./build/commands").filter(file => file.endsWith(".js"))

// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	commands.push(command.data.toJSON());
}

// Construct and prepare an instance of the REST module
const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();