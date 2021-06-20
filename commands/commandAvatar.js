const Discord = require("discord.js");

module.exports.info = {
    name: "avatar"
}

module.exports.run = async (client, message, args) => {
    const person = message.mentions.members.first();

    if (!person) {
        message.channel.send("Bitte gebe einen User an!")
    } else {
        const embedA = new Discord.MessageEmbed();

        embedA.setColor('#fcd619');
        embedA.setTitle("Avatar von: " + `${person.user.tag}`)
        embedA.setImage(person.user.displayAvatarURL({ dynamic: true, size: 256 }))
        embedA.setTimestamp();
        embedA.setFooter('Infinity Coding')

        message.channel.send(embedA)
    }
}