import { CommandInteraction, Interaction } from "discord.js";
import fs from "fs";
import { ICommand } from "../interfaces/ICommand";

/**
 * This function corresponds to the main routine that gets run when an interaction
 * is handled. One of the most important types of interaction are commands.
 * In this file, we have set up a function for you, "handleCommand", which takes
 * care of identifying which command a user sent, and running the appropriate code.
 */
export const onInteraction = async (interaction : Interaction) => {
    if (interaction.isCommand()) {
        handleCommand(interaction);
    }
}

/**
 * handleCommand looks for all command files in the commands directory,
 * and checks whether the CommandInteraction given to it as a parameter
 * is in the list of defined commands for the bot. 
 * If it exists, it runs the "execute" command, defined in the file
 * corresponding to the user's inputted command.
 */
const handleCommand = (interaction : CommandInteraction) => {
    const commandFiles : string[] = fs.readdirSync('build/commands').filter(file => file.endsWith(".js"))
    
    for (const file of commandFiles){
        const command : ICommand = require(`../commands/${file}`);
        if (interaction.commandName === command.data.name){
            command.execute(interaction);
        } 
    }
}