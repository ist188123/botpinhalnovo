const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
 
  const exampleEmbed = new Discord.RichEmbed()
	.setTitle('Some title')
	.attachFiles(['./img/'+text])
	.setImage('attachment://'+text);  
    
    message.channel.sendEmbed(exampleEmbed);
  }
})
client.login(process.env.BOT_TOKEN)
