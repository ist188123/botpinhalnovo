const Discord = require("discord.js");
var resposta = require('./resposta.json');
const client = new Discord.Client();
var jsonData = require('./raidspn.json');
const prefix = "+";





client.on("message", async (msg) => {
    let mewtwo = "";
    let cor = "0x00AE86";
    let mais = "";
    let autor = ""
    let quantidade = 0;
    let obs = "";
    var regra = "Mod"
    let pkmraid = "Desconhecido";
    let adicional = "";
    

        if (msg.content.startsWith("!")) {

            message.author.send("oi");

          
        }   // fim do inicio carater

    

    //fim criar canal----


    
    
    
    
    
    
    


    //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
