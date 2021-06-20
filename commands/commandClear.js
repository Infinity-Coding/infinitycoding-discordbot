module.exports.info = {
    name: "clear"
}

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS")) {
        const args = message.content.split(' ').slice(1);
        const amount = args.join(' ');

        if (!amount) return message.reply("Du musst eine gültige Zahl angeben!");

        if (isNaN(amount)) return message.reply("Du musst eine gültige Zahl angeben!");

        if (amount > 100) return message.reply("Du kannst nicht 100 Nachrichten löschen!");

        if (amount < 1) return message.reply("Du musst mindestens eine Zahl angeben!");

        await message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}