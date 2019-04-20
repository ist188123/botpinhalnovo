const Discord = require('discord.js');
const bot = new Discord.Client();


const prefix = '/q';

bot.on('message', message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);

    if (msg === '/Q') {
        message.channel.send('Bem vindo as Quests.\n para introduzir uma Quest escolha a opção\n'
          +'1 - EVOLUIR - OVOS\n'
          +'2 - BATALHAS GINÁSIO - RAIDS\n'
          +'3 - LANCAMENTOS\n'
          +'4 - APANHAR EVOLUIR\n'
                             ');
        return;
    }

});



bot.login(process.env.BOT_TOKEN);
