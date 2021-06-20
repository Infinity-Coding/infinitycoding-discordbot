const { MessageEmbed } = require("discord.js");

module.exports.info = {
    name: "unmute"
}

module.exports.run = async (client, message, args) => {
    const person = message.mentions.members.first();

    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (!person) {
            const embedP = new MessageEmbed();

            embedP.setColor('#fcd619')
            embedP.setTitle("Fehlgeschlagen!")
            embedP.addFields(
                { name: "Es wurde kein User mit diesem Namen gefunden!", value: "Kontrolliere den Namen nochmals!"}
            )
            embedP.setTimestamp()
            embedP.setFooter('Infinity Coding')

            message.channel.send(embedP)
        } else {
            const embedRes = new MessageEmbed();
            let mutedRole = message.guild.roles.cache.get('855873860099899422')

            embedRes.setColor('#fcd619')
            embedRes.setTitle("Erfolgreich")
            embedRes.addFields(
                { name: "User wurde gefunden!", value: "Wird entmuted" }
            )
            embedRes.setTimestamp()
            embedRes.setFooter('Infinity Coding')
            embedRes.setImage('https://cdn.discordapp.com/attachments/787042688548864031/852251726056390666/web-wiki-header-background.png')

            message.channel.send(embedRes)

            person.roles.remove(mutedRole)
        }
    } else {
        message.channel.send("Du hast nicht genügend Berechtigungen!")
    }
}