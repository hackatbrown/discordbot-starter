import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interfaces/ICommand";
import { randomInt } from "crypto";

const swiftieCommand: ICommand = {
    data: new SlashCommandBuilder()
        .setName("swiftie!")
        .setDescription("showers you with great musical taste"),
    async execute(interaction) {
        const arrayOfLyrics = ["speak now!", "you belong with me", "shake it off"]
        await interaction.reply(arrayOfLyrics[randomInt(3)]);
    },
};

module.exports = swiftieCommand;
