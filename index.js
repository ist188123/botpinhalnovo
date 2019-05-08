const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', msg => {
  if (msg.content === 'ping') {
    
    
    
    
    msg.channel.send({embed: {
  color: 15158332,
  description: "A very simple Embed!"
}});
    
    
    
    
  }
})
client.login(process.env.BOT_TOKEN)
