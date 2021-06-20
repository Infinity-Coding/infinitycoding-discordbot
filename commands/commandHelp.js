const { MessageEmbed } = require("discord.js");

module.exports.info = {
    name: "help"
}

module.exports.run = async (client, message, args) => {
    const embedH = new MessageEmbed();

    message.delete();

    embedH.setColor('#fcd619')
    embedH.setTitle("Hilfe")
    embedH.addFields(
        { name: "Commands", value: "`.regeln` -  Sendet das Regelwerk \n `.help` - Sendet dir wichtige Informationen \n `.meme` - Sendet ein zufällig ausgewähltes Meme \n `.ascii` Sendet dir deinen Text im ASCII Format \n `.verify` - Verifiziert dich und gibt dir deine User Rolle \n `.ragemp` - Gibt dir die RageMP Rolle \n `.altv` - Gibt dir die altV Rolle" }
    )
    embedH.addFields(
        { name: "GitHub", value: "`altV-Authentification` - https://github.com \n `RageMP-Authentification` - https://github.com \n `Express Website` - https://github.com" }
    )
    embedH.addFields(
        { name: "Ränge", value: "`Administrator` - Ist eigentlich für alles zuständig \n `Moderator` - Ist für die Sauberhaltung der Channel verantwortlich und ein Ansprechpartner für jeden User \n `🍋` - Die Zitrone steht für die Gründungsmitglieder des Servers \n `Job Approved` - Hat die Erlaubnis sich als Entwickler anzubieten"}
    )
    embedH.setTimestamp()
    embedH.setFooter('Infinity Coding')

    return message.author.send(embedH)
}