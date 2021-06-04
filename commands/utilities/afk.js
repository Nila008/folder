const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'afk',
    run : async(client, message, args,) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic : true}))
        .setDescription(`You Have Been set to Afk\n**reason :**${content}`)
        .setColor("GREEN")
        message.channel.send(embed)
    }
}