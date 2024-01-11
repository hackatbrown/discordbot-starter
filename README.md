# Discord Bot Starter Kit
Welcome to Hack@Brown's Discord Bot starter kit! Not only is building a bot a fun and exciting project, but it also teaches valuable skills in programming and automation. Moreover, as Discord supports numerous media types (audio, video, text, images, etc.), possibilities are basically infinite!

In this kit, we're providing you with some boilerplate code, as well as a little guide to get started on building your very own bot! We provide steps on how to build an _ultra cool_ bot that responds to a simple ping slash command. We've included some other _ultra cool_ commands, but you can use this as a launchpad for the endless possibilities of your very own discord bot!

_Table of Contents_
1. Boilerplate Structure
2. Adding the Bot to your Discord Server
3. Building and Running the Starter code
4. Creating & Deploying Commands
6. Other _Ultra Cool_ Commands
7. Useful Resources

## 1. Boilerplate Structure
This boilerplate uses Node.js and the discord.js module, and is written in TypeScript. You can find the folder structure of our starter kit below:

```
.
├── src/
│   ├── commands/
│   │   └── ping.ts
│   ├── config/
│   │   └── IntentOptions.ts
│   ├── handlers/
│   │   └── onInteraction.ts
│   ├── interfaces/
│   │   └── ICommand.ts
│   ├── utils/
│   │   └── deployCommands.ts
│   └── index.ts
├── .env
├── .gitignore
├── package-lock.json
├── README.md
└── tsconfig.json
```

We have included comments in each file we wrote, that explain the purpose of the most fundamental parts of the code. Make sure to read them to better understand how the boilerplate works!

## 2. Adding the bot to your Discord server
To test your bot and actually use it, you need to create its "profile" and invite it to a Discord server! The amazing [discord.js Guide](https://discordjs.guide/) explains it very well [here](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot). Follow the steps on the page, then continue reading this guide!

Once you have generated a token, head to the `.env` file and paste it after the `BOT_TOKEN=`. Additionally, provide your bot's client ID (listed as APPLICATION ID on the Discord Developer Portal) for the `CLIENT_ID` field. You can find this in the "General Information" section, on the menu to the left in the Discord Developer Portal. 

Finally, head to [this section](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links) to add the bot to your server!

## 3. Building and Running the Starter Code
- cd into the `discordbot-starter` folder (or open the directory in your terminal) 
- Run `npm install` to download all required Node.js packages.
- Run `npm run build` to build the TypeScript code. This will create a `build` folder, which contains the executable JavaScript code.
- Finally, run `npm start` to start your bot up! The program should print "Bot is connected to Discord" if everything went well.

After you make any changes to the code, make sure to run `npm run build` and `npm start` again! As you should only be writing code in the `src` folder, this ensures you build it (i.e., "convert" it to JavaScript) in order to run it.
 
## 4. Creating and Deploying Commands
### a. Getting the /ping command to work.
One of the main ways of interacting with a Discord bot is through using slash commands. These commands are comparable to UNIX commands, and instruct the bot to do something. There are many other ways of interacting with a Discord bot, and you can find a 
list of events your bot can listen for [here](https://discord.js.org/#/docs/discord.js/main/typedef/Events).

As commands are a little tedious to setup, we have done so in the boilerplate. Currently, only a single command is functional in the boilerplate (the /ping command). However, to make your bot actually receive commands, you must deploy them. Deploying means telling Discord servers about your commands: their name, and a description. To do so:

- cd into `discordbot-starter`
- Run `npm run deploy`

The script should say "Successfully reloaded 1 application (/) commands."

Now, head to Discord and open a text channel that the bot has access to. When typing `/ping`, a menu should pop up:
\
![screenshot of /ping command](https://i.imgur.com/zlJ8qrN.png)

Clicking the suggestion, and sending the command should have your bot say "pong!". If it does not work, make sure your bot is online!
### b. Writing a new command
- Create a new TypeScript file `<command name>.ts` inside of the `src/commands` directory. Make sure the name of your file corresponds exactly to the name of the command you want to create.
- Create a JavaScript object that implements the `ICommand` interface. The interface specifies that your object must have two fields, `data` of type `SlashCommandBuilder`, and an asynchronous `execute` command. The `data` field holds information about the command (its name, and description), while the `execute` function contains the code that should be ran when a user types a comand. That is where you will write all the code for your command.
- Set your `module.exports` equal to the ICommand object you just created. This ensures that it is accessible from other TypeScript files in the project.
- Run `npm run deploy` to deploy your new command to Discord's servers, before starting up your bot.

Useful comments can be found in the sample `ping.ts` we provided. 
This [article from the discord.js Guide](https://discordjs.guide/slash-commands/response-methods.html#ephemeral-responses) is also very useful for creating commands.

## 5. Other _Ultra Cool_ Commands
Here are some commands to showcase the endless possibilities of commands for your discord bot
- /gif: Search for GIFs!
- /shrug: Appends ¯\_(ツ)_/¯ to the end of your message
- /tts: Text to speech, reads a message out loud
- /swiftie: Taylor Swift lyrics at random! Who doesn't love that?
  
## 6. Useful Resources
- A great [tutorial by Naomi Carrigan](https://www.freecodecamp.org/news/build-a-100-days-of-code-discord-bot-with-typescript-mongodb-and-discord-js-13/) which helped me write this guide.
- The absolutely amazing [discord.js Guide](https://discordjs.guide/).
- [discord.js Official Documentation](https://discord.js.org/#/docs/discord.js/main/general/welcome)
