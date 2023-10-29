import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interfaces/ICommand";
import { randomInt } from "crypto";

const swiftieCommand: ICommand = {
    data: new SlashCommandBuilder()
        .setName("swiftie")
        .setDescription("showers you with great musical taste"),
    async execute(interaction) {
        const arrayOfLyrics = ["you belong with meeEEeeEE", "shake it off OH OH", "I'm sorry, the old Taylor can't come to the phone right now"]
        await interaction.reply(arrayOfLyrics[randomInt(3)]);
    },
};

module.exports = swiftieCommand;