import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interfaces/ICommand";

const pingCommand : ICommand = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("A basic ping command, meant to check that the bot works properly!"),
    
    async execute(interaction) {
        await interaction.reply("pong!");
    },
};

module.exports = {
    command: pingCommand,
}