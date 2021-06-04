const { Message} = require('discord.js')

module.exports = {
    name : 'removerole',
    description : 'remove a role to a member',
    run : async(cilent, message, args) => {
        /** 
         * @paran {Mesage} message
        */
       if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You dont have role Permissions')
       const target= message.mentions.members.first()
       if(!target) return message.channel.send('No member specified')
       const role = message.mentions.roles.first()
       if(!role) return message.channel.send('No role specified')
       await target.roles.remove(role)
       message.channel.send(`${target.user.username} has been removed from the role`)
    }
}       