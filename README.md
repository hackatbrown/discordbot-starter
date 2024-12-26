![example-discord-starter-banner](https://github.com/user-attachments/assets/015f3c35-1067-4ec8-99bc-4c3727841e21)

# Discord Bot Starter Kit
Welcome to Hack@Brown's Discord Bot starter kit! Not only is building a bot a fun and exciting project, but it also teaches valuable skills in programming and automation. Moreover, as Discord supports numerous media types (audio, video, text, images, etc.), possibilities are basically infinite!

In this kit, we're providing you with some boilerplate code, as well as a little guide to get started on building your very own bot! We provide steps on how to build an _ultra cool_ bot that responds to a simple ping slash command. We've included some other _ultra cool_ commands, but you can use this as a launchpad for the endless possibilities of your very own discord bot!

_Table of Contents_  
1. Prerequisites  
2. Boilerplate Structure  
3. About Discord and Bots  
4. Adding the Bot to Your Discord Server  
5. Building and Running the Starter Code  
6. Creating & Deploying Commands  
7. Other _Ultra Cool_ Commands  
8. Useful Resources  


## 1. Prerequisites
Before getting started, make sure you have the following set up:
- **A Discord Account**: You’ll need a Discord account to create a server and invite your bot.
- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).
- **Basic Knowledge of JavaScript/TypeScript**: While we try to make this guide beginner-friendly, a basic understanding of programming will be helpful!
- **A Code Editor**: It’s recommended to use a code editor like Visual Studio Code to write and manage your code.


## 2. Boilerplate Structure
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

## 3. About Discord and Bots

### What is Discord?
Discord is a free app for voice, video, and text chatting, mostly popular among gaming groups, study circles, and other communities with shared interests. It’s kind of like a mix between a chat room and a video call platform. People gather in “servers” (which are like chat rooms) and can chat in different “channels” within those servers. Servers are a great place to share conversations, media, and even add bots to help automate certain tasks.

### What is a Discord Bot?
A Discord bot is a program that can interact with your server and help you automate things. For example, it can respond to commands, moderate chat, play music, fetch info, and more. Essentially, bots make your server more interactive and fun by adding cool features that Discord doesn’t offer out of the box.

You’ve probably seen bots in action before—like when a bot welcomes new members to a server or gives you the weather when asked. With this starter kit, you’ll be able to build your own bot that can do all sorts of cool stuff!

## 4. Adding the Bot to Your Discord Server

To test your bot and actually use it, you'll need to create a "profile" for it and invite it to a Discord server. If you haven’t made a server yet, don’t worry! Let’s walk through how to create one.

### a. Creating a Discord Server
If you don’t have a Discord server yet, here’s how to set one up:
1. **Open Discord** (either the desktop app or in your browser).
2. On the left sidebar, click the **+ icon** at the bottom of your server list.
3. Select **"Create My Own"** and give your server a name.
4. Discord might ask you to choose your region, but it usually sets this automatically based on your location.
5. Once your server is created, you’ll be the server owner with full control to manage it—this includes inviting your bot!

If you haven’t created a server yet, no worries! Let’s do it now and get everything set up.

### b. Inviting the Bot to Your Server
Now that your server is ready, let’s invite your bot:
1. Head over to the **Discord Developer Portal** and follow the instructions in the [discord.js Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) to create your bot’s profile.
2. Generate a **bot token**, then open the `.env` file in your project and paste it after `BOT_TOKEN=`.
3. You’ll also need your bot's **Client ID** (listed as "APPLICATION ID" in the Discord Developer Portal). Paste it into the `CLIENT_ID` field in your `.env` file.
4. Finally, invite the bot to your server by generating an OAuth2 link:
    - Navigate to the **OAuth2** tab in the Developer Portal.
    - Under **OAuth2 URL Generator**, select the **bot** scope and choose the permissions your bot needs.
    - Copy the generated invite link, open it in your browser, and select your newly created server from the dropdown list to invite the bot.

And that’s it! Your bot should now be part of your server, ready to respond to commands. If you run into any issues, make sure your bot is online and double-check the token and permissions.


## 5. Building and Running the Starter Code
- cd into the `discordbot-starter` folder (or open the directory in your terminal) 
- Run `npm install` to download all required Node.js packages.
- Run `npm run build` to build the TypeScript code. This will create a `build` folder, which contains the executable JavaScript code.
- Finally, run `npm start` to start your bot up! The program should print "Bot is connected to Discord" if everything went well.

After you make any changes to the code, make sure to run `npm run build` and `npm start` again! As you should only be writing code in the `src` folder, this ensures you build it (i.e., "convert" it to JavaScript) in order to run it.
 
## 6. Creating and Deploying Commands
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

## 7. Other _Ultra Cool_ Commands
Here are some commands to showcase the endless possibilities of commands for your discord bot
- /gif: Search for GIFs!
- /shrug: Appends ¯\_(ツ)_/¯ to the end of your message
- /tts: Text to speech, reads a message out loud
- /swiftie: Taylor Swift lyrics at random! Who doesn't love that?
  
## 8. Useful Resources
- A great [tutorial by Naomi Carrigan](https://www.freecodecamp.org/news/build-a-100-days-of-code-discord-bot-with-typescript-mongodb-and-discord-js-13/) which helped me write this guide.
- The absolutely amazing [discord.js Guide](https://discordjs.guide/).
- [discord.js Official Documentation](https://discord.js.org/#/docs/discord.js/main/general/welcome)
