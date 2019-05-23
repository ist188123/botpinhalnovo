const Discord = require("discord.js");
const client = new Discord.Client();

const http = require('http');

client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  
  
  if (message.content.startsWith("ping")) {
   
    var endereco='http://pnraidspn.atwebpages.com/teste.php'
   
    
    let req = http.get(endereco, function(res) {
	let data = '',
		json_data;

	res.on('data', function(stream) {
		data += stream;
	});
	res.on('end', function() {
		json_data = JSON.parse(data);

        // will output a Javascript object
        for ( a=0; a<json_data.length;a++){
            //console.log(json_data[a].boss);
        }
		
	});
});

    
    
    
    
    
    
    
    message.channel.send("pong!");
  }
  
  
  
  
  
  
});
client.login(process.env.BOT_TOKEN);
