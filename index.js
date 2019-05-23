const Discord = require('discord.js');
const client = new Discord.Client();
const http = require('http');



client.on('message', msg => {
  
  
  //funcao 
  function notificaQuest(missao,questimagem){

    const embed = new Discord.RichEmbed()
    .setTitle(quest)
    .setAuthor(pokestop, "https://exraidspinhalnovo.webnode.pt/_files/200000044-1157e1263e/450/pstop.png")
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

}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
          msg.reply(quest);
          msg.guild.channels.find("name", "quest").sendMessage(quest);
          notificaQuest(missao,questimagem);
         
        }
      }

            
        });
    });
    
  }
  
  
  
 
  
  
  
  
  
});
client.login(process.env.BOT_TOKEN);
