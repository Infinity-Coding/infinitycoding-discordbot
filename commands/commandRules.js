const { MessageEmbed } = require("discord.js")

module.exports.info = {
    name: "regeln"
}

module.exports.run = async (client, message, args) => {
    const embedR = new MessageEmbed();

    message.delete();

    embedR.setColor('#fcd619')
    embedR.setTitle("Regelwerk")
    embedR.setDescription("1. Es gelten die Discord TOS \n 2. Verhaltet euch zivilisiert \n 3. Es wird keine Hilfe für geleakte oder geklaute Script/Gamemodes geboten \n 4. Der An-und Verkauf von Script/Gamemodes ist untersagt \n 5. Behandler alle mit Respekt. Belästigung, Sexismus, Rassismus oder Volksverhetzung werden absolut nicht toleriert")
    embedR.setTimestamp()
    embedR.setFooter('Infinity Coding')

    return message.author.send(embedR)
}