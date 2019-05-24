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
	  .setColor('#0099ff')
	.setTitle(quest)
	.setURL('https://discord.js.org/')
	.setAuthor('', 'https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png')
	.setDescription('Some description here')
	.setThumbnail('https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png')
	.addField('Regular field title', 'Some value here')
	.addBlankField()
	.addField('Missão', quest, false)
	
	.setImage(questimagem)
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

	
    msg.guild.channels.find("name", "quest").sendMessage({ embed });
          
          //---
          
          // - - messagem
          //.setAuthor(quest, 'https://exraidspinhalnovo.webnode.pt/_files/200000083-e9b0feaad1/450/pkst.png')
	
	//  .setFooter("PN PoGo Raids, pubicado ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
     
     
         // -- fim mensagem 
         
        }
      }

            
        });
    });
    
  }
  
  
  
 
  
  
  
  
  
});
client.login(process.env.BOT_TOKEN);
