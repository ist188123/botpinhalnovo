const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var msg=message.content.split('!')
    
    var myInfo = new discord.RichEmbed()
  .setTitle("Hound")
  .addField("Name", "Hound")
  .addField("Age", "12")
  .addField("Description", "Im good at siege, I stream occasionally and ya")
  .setColor("#020B0C")
  .attachFile('./avatar.png')
  .setImage('attachment://avatar.png');
message.channel.sendEmbed(myInfo);
 
 
    
    
    
  }
})
client.login(process.env.BOT_TOKEN)
