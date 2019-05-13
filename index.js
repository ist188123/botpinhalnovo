const Discord = require('discord.js')
const client = new Discord.Client()
client.on('message', message => {
  if (message.content === '!') {
    
    var text = message.content.substring(1);
  var imagem="./img/Articune.png"
  var attimage="Articune.png"
 //---------
  var myInfo = new discord.RichEmbed()
  .setTitle("Hound")
  .addField("Name", "Hound")
  .addField("Age", "12")
  .addField("Description", "Im good at siege, I stream occasionally and ya")
  .setColor("#020B0C")
  .attachFile('./img/Articune.png')
  .setImage('attachment://Articune.png');
message.channel.sendEmbed(myInfo);
  
  
  
  
  
  
	  
	  
	  
//---------	  
  }
})
client.login(process.env.BOT_TOKEN)
