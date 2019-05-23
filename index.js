const Discord = require("discord.js");
var resposta = require('./resposta.json');
const client = new Discord.Client();
var jsonData = require('./raidspn.json');
const prefix = "+";



//console.log(tamanhoFicheiro)









client.on("message", async (msg) => {
  
//--------------------------
  //----criar canal ---

  if (msg.channel.name == 'professor-boss') {

    if (msg.content.startsWith('!')) {



      var dmsg = msg.content.substring(1);


      let cod = dmsg.split(" ")[0];

      let pokestop = dmsg.split(" ").slice(1).join(" ");
      let quest = "";
      let missao = "";
      let questimagem = "";
      

      msg.sendMessage("pong!");




    }//fim regras










  }//fim if

  //fim criar canal----










  //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
