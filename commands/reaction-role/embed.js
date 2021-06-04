const { MessageEmbed } = require(`discord.js`)

module.exports = {
    name : 'reaction-message',
    run : async(client, message) => {
        const embed = new MessageEmbed()
        .setTitle('Reaction role')
        .setDescription('react to obtain a role\n<:a_lojja:770037142742368287> - Bots role\n<:thand_hai:769525850076741652> - testuz role')
        .setColor('GREEN')
    
        const msg = await message.channel.send(embed)
        await msg.react(`:a_lojja:`)
        await msg.react('<:thand_hai:769525850076741652>')
    }
}