const Discord = require("discord.js");

const client = new Discord.Client();





client.on("message", async (msg) => {
   
        if (msg.content.startsWith("!")) {

            msg.channel.send("oi");

          
        }   // fim do inicio carater

    

    //fim criar canal----


    
    
    
    
    
    
    


    //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
