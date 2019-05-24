const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');



client.on('message', msg => {
  
  
  
  if (msg.content.startsWith('!')) {

      var endereco='http://pnraidspn.atwebpages.com/teste.php'

      var dmsg = msg.content.substring(1);


      let cod = dmsg.split(" ")[0];

      let pokestop = dmsg.split(" ").slice(1).join(" ");
      let quest = "";
      let missao = "";
      let questimagem = "";
  
  let req = http.get(endereco, function(res) {
        let data = '',
            questMap;
    
        res.on('data', function(stream) {
            data += stream;
        });
        res.on('end', function() {
            questMap = JSON.parse(data);
    
             for (var x = 0; x < questMap.length; x++) {

        if (cod == questMap[x].cod) {
          quest = questMap[x].quest;
          missao = questMap[x].missao;
          questimagem = questMap[x].questimagem;
         
         //--
          const embed = new Discord.RichEmbed()
    .setTitle(quest)
    .setAuthor(pokestop, "https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png")
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor(0x00AE86)
    .setDescription(missao)
     .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
    
    .setThumbnail(questimagem)
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp();
    msg.guild.channels.find("name", "quest").sendMessage({ embed });
          
          //---
          
          // - - messagem
          
          const exampleEmbed = new Discord.RichEmbed()
	.setColor('#00AE86')
	.setTitle('Localização')
	.setURL('https://discord.js.org/')
	.setAuthor(quest, 'https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png')
	
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField(missao, ' ')
	.addBlankField()
	
	.setImage(questimagem)
	.setTimestamp()
	  .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
      msg.guild.channels.find("name", "quest").sendMessage({ exampleEmbed });      
         // -- fim mensagem 
         
        }
      }

            
        });
    });
    
  }
  
  
  
 
  
  
  
  
  
});
client.login(process.env.BOT_TOKEN);
