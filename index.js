const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "+";





client.on("message", async (msg) => {

    let mais = "";
    let autor = ""
    let quantidade = 0;
    let obs = "";
    var regra = "Mod"
    let pkmraid = "Desconhecido";
    let adicional = "";


    let team_mystic = msg.guild.roles.find("name", "TEAM MYSTIC");
    let team_valor = msg.guild.roles.find("name", "TEAM VALOR");
    let team_instinct = msg.guild.roles.find("name", "TEAM INSTINCT");

    //imagens equipas
    let team_imagem = "";
    const valor = client.emojis.find("name", "valor");
    const mystic = client.emojis.find("name", "mystic");
    const instinct = client.emojis.find("name", "instinct");


    //---------------------------------------------------	
    //informação 	
    //---------------------------------------------------	
    const responseObject = {
        "autor": "Damasc010, Paulo Rosário!",
        "versão": "v3.01 de agosto 2018",
        "pn": "Pokemon go Pinhal Novo"
    };

    if (responseObject[msg.content]) {
        msg.channel.send(responseObject[msg.content]);

    }
    //---------------------------------------------------		
    //fim informacao
    //---------------------------------------------------		


function myFunc(arg) {
        msg.guild.channels.find("name", arg).sendMessage("Olá Treinadores.\nEste canal é temporário se será apagado dentro em 1 Hora e 30 minutos.");
    }

    
    
function apagacanal(arg){
   // setTimeout(function () {
                msg.guild.channels.find("name",arg).delete();
                
     //     }, 20000);
  
}




    if (msg.channel.name.startsWith('_raid')) {






        //apaga mensagem - retira da raid
        if (msg.content.startsWith('👎')) {
            autor = msg.author;


            // msg.reply(msg.channel.name);//nome do canal onde esta


            let xpto = msg.channel.fetchMessages()
                .then(messages => messages.array().forEach(
                    message => message.author.equals(autor) && message.delete()



                ));


            setTimeout(function () {

                // msg.channel.send(bicho);
                msg.channel.send("->" + autor + " ,saiu da RAID.");
            }, 1500);


        }
        //fim ----










        if (msg.content.startsWith('👍') || msg.content.startsWith('->') || msg.content.startsWith('%')) {

            let raidcanal = msg.channel.name;

            //  let role = msg.guild.roles.find("name", raidcanal);


            var array = [];
            adicional = "";





            //adiciona pokemon 
            if (msg.content.startsWith('%')) {
                pkmraid = msg.content.substring(1);
            }





            //--------------------------------
            //le todas as mensagens do canal
            //------------------------
            msg.channel.fetchMessages({ limit: 100 }).then(msg => {
                msg.forEach(msg => {



                    //msg inicia com %
                    if (msg.content.startsWith('%')) {
                        pkmraid = msg.content.substring(1);
                        //  msg.channel.send(pkmraid);
                    }




                    //msg inicia com    
                    if (msg.content.startsWith('👍')) {





                        if (msg.member.roles.has(team_valor.id)) {
                            team_imagem = valor.toString();
                            // msg.reply(team_imagem);
                            quantidade++;
                            array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                            adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                        }

                        if (msg.member.roles.has(team_mystic.id)) {
                            team_imagem = mystic.toString();
                            // msg.reply(team_imagem);
                            quantidade++;
                            array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                            adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                        }

                        if (msg.member.roles.has(team_instinct.id)) {
                            team_imagem = instinct.toString();
                            // msg.reply(team_imagem);
                            quantidade++;
                            array.push(team_imagem + " " + msg.author + " " + msg.content.substring(2));
                            adicional = adicional + team_imagem + " " + msg.author + " " + msg.content.substring(2) + "\n";
                        }

                        // 
                    }


                })
            })

            //---- fim ler mensagens 






            //   msg.channel.send(msg.author.toString() + ", inserido na RAID!");

            //------------------------     
            setTimeout(function () {


                // msg.channel.send("array 0"+array);                 
                var result = [];


                array.forEach(function (item) {
                    if (result.indexOf(item) < 0) {
                        result.push(item);
                    }
                });

                // msg.channel.send("result 1"+result);              

                result = result.filter(item => item !== autor);
                var qtatr = result.filter(item => item !== autor).length


                //msg.channel.send("result 2"+result);            

                //--------------------------------------               



                criaRaid(raidcanal, pkmraid, result, qtatr);


            }, 1500);
        }


    }










    //  if (msg.content.startsWith('%c')) {
    //  let canal = msg.content.substring(3);

    //   setTimeout(myFunc, 5500, canal);

    //   msg.guild.createChannel(canal, "text");
    //  msg.guild.createRole({name:canal}) ;


    //   }





    //lista todos os elementos que tem a regra
    function criaRaid(canalRaid, bicho, adicional, participantesRaid) {

        try {






            var status = "Desconhecido";
            var cpiv = "Desconhecido"

            var ovo = "";
            var braid = ovo;
            //var bicho="";




            var tiporaid = canalRaid.substring(5, 6);


            var titulo = "RAID " + canalRaid.substr(5);

            var thoras = titulo.split("-");
            var horas = thoras[thoras.length - 1];

            y = thoras;
            var local = "";

            for (var i = 0; i < y.length - 1; i++) {
                local = local + " " + y[i]

            }


            //---- TIPO RAID ----

            if (tiporaid.startsWith('3')) {
                ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

                braid = ovo;

                //bicho
                if (bicho.startsWith('machamp')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000031-dcf97ddeea/450/pokemon_icon_068_00.png";
                    cpiv = "1574-1967 1650-2063"
                }
            }
            //----     




            if (tiporaid.startsWith('4')) {
                ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000027-959cf96a39/200/4.png";

                braid = ovo;


                if (bicho.startsWith('golem')) {
                    braid = " https://exraidspinhalnovo.webnode.pt/_files/200000037-85af786acf/450/golem.png";
                    cpiv = "20 CP 1666";
                    status = "Duplo fraco contra WATER e GRASS\nKyogre Waterfall - Hydro Pump\nGyarados Waterfall - Hydro Pump\nGroudon Mud Shot - Solar Beam"
                }


                if (bicho.startsWith('absol')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000028-3bf1a3ce89/450/apsol.png";
                    cpiv = "1232-1303/1540-1629";
                }

                if (bicho.startsWith('tyra')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000029-e0378e12f0/450/tyra.png";
                }
            } //----  


            //------
            if (tiporaid.startsWith('5')) {
                ovo = "https://exraidspinhalnovo.webnode.pt/_files/200000019-4d5f84e5ec/200/Egg_Raid_Legendary.png";

                braid = ovo;




                if (bicho.startsWith('regis')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000035-0751e084bd/450/registeel.png";
                    cpiv = "1222-1292 / 1528-1615";
                    status = "Charizard with Overheat\nBlaziken FIRE\nTyphlosion - Overheat\nArcanine - Flamethrower\nSalamance - Fire Fang - Fire Blast\nHeracross - Combat\n";
                }



                if (bicho.startsWith('regice')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000018-6874a696da/450/regice.png";
                    cpiv = "1682-1764 / 2103-2205";
                    status = "ENTEI\nMOLTRES\nCHARIZARD\nFLAREON\nHO-oh";
                }

                if (bicho.startsWith('ohoh')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000026-5ec255fb74/450/Ho-Oh.png";
                }


                if (bicho.startsWith('articune')) {
                    braid = "https://exraidspinhalnovo.webnode.pt/_files/200000030-050b3060a3/450/articune.png";
                }

            }//----    



            //----  FIM TIPO RAID ---


            disparaRaid(local, horas, canalRaid, adicional, participantesRaid, ovo, braid, cpiv, status, adicional);
            //  msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage(msg.guild.channels.find("name", msg.channel.name)+"\n"+membersWithRole.join("\n"));

        } catch (err) {
            console.log(err);


        }



    }






    function disparaRaid(local, horas, canal, treinadores, total, ovo, bicho, cpiv, status, adicional) {


        const embed = new Discord.RichEmbed()
            .setTitle(horas)
            .setAuthor(local.toUpperCase(), ovo)

            /*
            * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
            */
            .setColor(0x00AE86)
            .setDescription("Use o canal " + msg.guild.channels.find("name", canal))
            .setFooter("Equipa - PKG Pinhal Novo, pubicado a, ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
            // .setImage("http://i.imgur.com/yVpymuV.png")
            .setThumbnail(bicho)
            /*
             * Takes a Date object, defaults to current date.
             */
            .setTimestamp()
            .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
            .addField("NÍVEL CP ", cpiv)

            /*
             * lista dos jogadores que vão RAID.
             */
            .addField("Treinadores : " + total, treinadores, true)
            /*
             * Blank field, useful to create some space.
             */


            .addBlankField(true)
            .addField("\n\n\n\n\n\Fraco contra:", status, true);

        msg.guild.channels.find("name", "raids-pinhal-novo").sendMessage({ embed });


    }








    //----criar canal ---

    if (msg.channel.name == 'lab-prof-willow') {

        if (msg.content.startsWith("!5") || msg.content.startsWith("!4") || msg.content.startsWith("!3")) {





            //LE A MENSAGEM EXCLUINDO O !
            var text = msg.content.substring(1);

            var canal = '_raid' + text
            canal = canal.split('!').join('').toLowerCase();
            var nomecanal = canal.split(' ').join('-').toLowerCase();
            //cria canal
            if (msg.guild.channels.find("name", nomecanal)) {
            } else {

                msg.guild.createChannel(canal, "text");


            }

                setTimeout(apagacanal, 4680000, nomecanal);
                setTimeout(myFunc, 1500, nomecanal);

        }   // fim do inicio carater

    }

    //fim criar canal----




    //---teste ----
    if (msg.channel.name.startsWith('adm-pg-')) {
        if (msg.content.startsWith('!')) {

            var texto = msg.content.substring(1)
            const embed = new Discord.RichEmbed()
                .setTitle("INFORMAÇÃO")
                .setAuthor("Olá treinadores.", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")
                /*
                 * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
                 */
                .setColor(0x00AE86)
                .setDescription(texto)
                .setFooter("Equipa - PKG Pinhal Novo, pubicado a, ", "https://exraidspinhalnovo.webnode.pt/_files/200000022-231042409e/200/damasc010.png")


                .setThumbnail("https://exraidspinhalnovo.webnode.pt/_files/200000025-adf2daee85/450/Pryce.png")

                .setTimestamp();



             msg.guild.channels.find("name", "informacao").sendMessage({ embed });
             msg.guild.channels.find("name", "chat").sendMessage({ embed });


        }
    }



    //--- fim teste ----

});

client.login(process.env.BOT_TOKEN);
