import { CommandInteraction, Interaction } from "discord.js";
import fs from "fs";
import { ICommand } from "../interfaces/ICommand";

export const onInteraction = async (interaction : Interaction) => {
    if (interaction.isCommand()) {
        handleCommand(interaction);
    }
}

const handleCommand = (interaction : CommandInteraction) => {
    const commandFiles : string[] = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"))
    
    for (const file of commandFiles){
        const command : ICommand = require(`../commands/${file}`).command;
        if (interaction.commandName === command.data.name){
            command.execute(interaction);
        } 
    }
}