const Discord = require('discord.js');
const bot = new Discord.Client();


const prefix = '</';

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === prefix + 'PING') {
        message.channel.send('PONG!');
        return;
    }

});

bot.on('ready', () => {
    console.log('WINGGGGGGG!');
});

bot.login(process.env.BOT_TOKEN);
