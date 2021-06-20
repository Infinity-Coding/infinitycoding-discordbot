require("dotenv").config();

const { BOT_VERIFY_CHANNEL, BOT_RAGEMP_ROLE } = process.env;

module.exports.info = {
    name: "ragemp"
}

module.exports.run = async (client, message, args) => {
    if (!message.guild) return;
	if (message.author.bot) return;
	if (message.content === ".ragemp" && message.channel.id === BOT_VERIFY_CHANNEL) {
		const messageRole = message.guild.roles.cache.find(role => role.name === BOT_RAGEMP_ROLE);
		if (message.member.roles.cache.has(messageRole.id)) return;
        message.react("✅");
        message.member.roles.add(messageRole)
        .then(() => message.delete({ timeout:5000 }))
        .catch(error => {
        console.error(error.stack);
        message.channel.send(error.stack)
        .then(m => m.delete({timeout: 20000}));
        });
    }
}