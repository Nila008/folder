module.exports= {
    name: 'clear',
    description: "this is a clear command!",
    run : async (client, message, args) => {
        if(!args[0]) return message.reply('Please enter the ammount of messages you want to clear.');
            if(isNaN(args[0])) return message.reply('i can only clear a number of messages mate, not a word!');

            if(args[0] > 100) return message.reply('I cant clear over 100 messages');
            if(args[0] < 1) return message.reply('How do you expect me to clear 0 messages?');

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });

    }
 }