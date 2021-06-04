module.exports = {
    name : 'kick',
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermissions('KICK_MEMBERS')) return message.channel.send('I dont have permisions to kick a memeber')
        const Mmember = message.mentions.members.first()
        if(!Member) return message.channel.send('Please specify a member to kick');    
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`${Member.user.tag} was kicked from the server!`)
        
    }
}