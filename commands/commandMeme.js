const { MessageEmbed } = require("discord.js");
const Discord          = require("discord.js");
const got              = require("got");

module.exports.info = {
    name: "meme"
}

module.exports.run = async (client, message, args) => {
    const embedM = new Discord.MessageEmbed();

    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        const [list] = JSON.parse(response.body);
        const [post] = list.data.children;

        const permalink = post.data.permalink;
        const memeUrl = `https://reddit.com${permalink}`;
		const memeImage = post.data.url;
		const memeTitle = post.data.title;
		const memeUpvotes = post.data.ups;
		const memeNumComments = post.data.num_comments;

        embedM.setColor('#fcd619');embedM.setColor('#fcd619');
        embedM.setTitle(`${memeTitle}`);
        embedM.setImage(memeImage);
        embedM.setTimestamp();
        embedM.setFooter('Infinity Coding');

        message.channel.send(embedM)
    })
    .catch(console.error);
}