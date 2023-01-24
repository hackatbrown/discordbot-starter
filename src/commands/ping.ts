import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interfaces/ICommand";

// This pingCommand const will hold the ICommand object,
// which has data about the command, and an execute function
// which gets run when a user types the command.
const pingCommand : ICommand = {

    // To properly organize each command's information,
    // you must create a SlashCommandBuilder object, and
    // set its properties - here its name and description.

    // If you wanted to add an argument for your commands for instance,
    // you would do that with one of the SlashCommandBuilder's methods.
    // The "Slash Commands" section from "discordjs.guide" has really
    // good information about how to do that.
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("A basic ping command, meant to check that the bot works properly!"),
    
    // Here, we define the execute function, which gets run
    // when a user sends the command in to the bot. In this case,
    // it simply replies to the user with the string "pong!"
    async execute(interaction) {
        await interaction.reply("pong!");
    },
};

// This is super important and allows other
// .ts files in the project to access the 
// ICommand object created above!
module.exports = pingCommand;