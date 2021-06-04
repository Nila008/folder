module.exports = {
    name : 'ban',
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermissions('BAN_MEMBERS')) return message.channel.send('I dont have permisions to ban a memeber')
        const Mmember = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to ban');    
        await Member.ban({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} was banned from the server!`)
        
    }
}