const Discord = require("discord.js");
const figlet  = require("figlet");

module.exports.info = {
    name: "ascii"
}

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.reply("Bitte gebe einen Text an!");

    msg = args.join(" ");
    figlet.text(msg, function (error, data){
        if (error){
            console.log("[ERROR]".red + " " + error);
        }
        if (data.length > 2000) return message.channel.send('Der Text muss unter 2000 Zeichen sein!')
        message.channel.send('```' + data + '```')
    });
}