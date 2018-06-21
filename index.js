const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('message', msg => {
  
	
if (msg.channel.name == 'prof-willow-raids-pn') {
		

	
  //SE A MENSAGEM INICIA COM O CARATER !
  if (msg.content.indexOf('!') === 0) {
	  
	  
  //LE A MENSAGEM EXCLUINDO O !
     var text = msg.content.substring(1);
 
	  
   //text='**RAID '+text+'**'	  
	  
	  
    
      if (msg.content === '!willow') {
    msg.reply('Olá, eu sou o Prof. Willow RAIDS PN\n'+
    'e vou ajudar-te a marcar as RAIDS.\n\nAinda estou em desenvolvimento.\n\n :stuck_out_tongue_winking_eye:');
  }
  
  }   // fim do inicio carater
 
	
	
		
	}
});



client.login(process.env.BOT_TOKEN);
