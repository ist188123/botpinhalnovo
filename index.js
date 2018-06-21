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
    msg.reply('Olá,\nEu sou o Prof. Willow.\n\n'+
    'E vou ajudar-te a marcar as RAIDS no Pinhal Novo.\n\nAinda estou em desenvolvimento, mas podes sempre falar comigo.\n\n :stuck_out_tongue_winking_eye:');
  }
  
	  
   if (msg.content === '!5') {
    msg.reply('**\nRAID '+msg.content+'**');
  }
  	  
	  
if (msg.content === '!mewtwo') {
    msg.reply('**\nMEWTWO**\n\nCP 2275 100% sem weather bost\n\nCP 2844 100% IV com weather bost (WINDY)\n\n'+
	      'Melhores para o combater *Sem focus blast*:\n\n'+
	     '*Tyranitar*\n'+
	      '*Mewtwo*\n'+
	       '*Houndoom*\n'+
	       '*Scizor*\n'+
	      '*Pinsir*\n'+
	      '*Dragonite*\n'
	      
	     );
  }	  
	  
  }   // fim do inicio carater
 
	
	
		
	}
});



client.login(process.env.BOT_TOKEN);
