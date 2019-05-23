const Discord = require('discord.js')

const client = new Discord.Client()
client.on('message', message => {
var qsonData = require('./quest.json');
	




if (message.channel.name == 'adm-pg-raids') {
	
  if (message.content.startsWith("$")) {

	message.channel.send('oi.');
	  
	  
//---------	  
  }
	
	
}
	
	
	
})
client.login(process.env.BOT_TOKEN)
