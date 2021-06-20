const Discord = require("discord.js");
const fs      = require("fs");
const colors  = require("colors");

require("dotenv").config();

const BOT_TOKEN  = process.env.BOT_TOKEN;
const BOT_PREFIX = process.env.BOT_PREFIX;

const client  = new Discord.Client();

client.commands = new Discord.Collection();

client.on("ready", () => {
    console.log("[BOT]".yellow + " Started: " + `${client.user.tag}`.grey);
    client.user.setActivity("Infinity Coding Community", {
        type: "WATCHING"
    });
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let content = message.content.split(" ");
    let command = content[0];
    let args = content.slice(1);
    let prefix = BOT_PREFIX;

    let commandfile = client.commands.get(command.slice(prefix.length));
    if(commandfile) commandfile.run(client, message, args);
});

fs.readdir("./commands", (error, files) => {
    if (error) {
        console.log("[ERROR]".red + " " + error);
    }
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("[ERROR]".red + " Failed: " + "loadCommands".grey);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log("[BOT]".yellow + " Loaded: " + `${f}`.grey);
        client.commands.set(props.info.name, props);
    });
});

client.login(BOT_TOKEN);