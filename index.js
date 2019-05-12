const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    
 
  const exampleEmbed = new Discord.RichEmbed()
	.setTitle('Some title')
	.attachFiles(['./img/Alakazam.png'])
	.setImage('attachment://Alakazam.png');  
    
    message.channel.sendEmbed(exampleEmbed);
  }
})
client.login(process.env.BOT_TOKEN)
