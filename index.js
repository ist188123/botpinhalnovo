const Discord = require('discord.js');
const bot = new Discord.Client();


const prefix = '/q';

bot.on('message', message => {

    

    if (message === '#5') {
        message.channel.send('Bem vindo as Quests.\n para introduzir uma Quest escolha a opção\n'
          +'1  OVOS\n'
          +'2  BATALHAS GINÁSIO/RAIDS\n'
          +'3  LANCAMENTOS\n'
          +'4  APANHAR/EVOLUIR/OUTROS\n');
        return;
    }
    
    

});



bot.login(process.env.BOT_TOKEN);

