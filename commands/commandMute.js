const { Message, MessageEmbed } = require("discord.js");

require("dotenv").config();

const { BOT_LOG_CHANNEL, BOT_MUTED_ROLE } = process.env;

module.exports.info = {
    name: "mute"
}

module.exports.run = async (client, message, args) => {
    const person = message.mentions.members.first();
    const reason = args.slice(1).join("  ");

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
        } else if (!reason) {
            const embedR = new MessageEmbed();

            embedR.setColor('#fcd619')
            embedR.setTitle("Fehlgeschlagen!")
            embedR.addFields(
                { name: "Kein Grund angegeben!", value: "Kontrolliere den Grund nochmals!"}
            )
            embedR.setTimestamp()
            embedR.setFooter('Infinity Coding')

            message.channel.send(embedR)
        } else {
            const embedRes   = new MessageEmbed();
            const embedLog   = new MessageEmbed();
            const channelLog = message.guild.channels.cache.get(BOT_LOG_CHANNEL);
            let mutedRole = message.guild.roles.cache.get(BOT_MUTED_ROLE)

            embedRes.setColor('#fcd619')
            embedRes.setTitle("Erfolgreich")
            embedRes.addFields(
                { name: "User wurde gefunden!", value: "Wird gemuted" }
            )
            embedRes.setTimestamp()
            embedRes.setFooter('Infinity Coding')

            message.channel.send(embedRes)

            embedLog.setColor('#fcd619')
            embedLog.setTitle("Log")
            embedLog.setDescription(`${message.member} hat den User ${person} wegen ${reason} Gemuted!`)
            embedLog.setTimestamp()
            embedLog.setFooter('Infinity Coding')

            channelLog.send(embedLog)

            person.roles.add(mutedRole)
        }
    } else {
        message.channel.send("Du hast nicht genügend Berechtigungen!")
    }
}