const Commando = require('discord.js-commando');
const Discord = require('discord.js');

class BLCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'bl',
        group: 'pokemon',
        memberName: 'bl',
        description: 'Shows a list of all BL pokemon'
    })

   }

   async run(message, args)
   {
     var myInfo = new Discord.RichEmbed()
     .setTitle("# BL")
     // .addField("About Me", "Name: Crazy Fast Armaldo", true)
     .setDescription("* Alakazam" + "\r\n" + "* Arcanine" + "\r\n" + 
     "* Armaldo(ME)" + "\r\n" + "* Articuno" + "\r\n" + "* Blaziken" + "\r\n"  + "* Chansey" + "\r\n" + "* Charizard" + "\r\n" + 
     "* Crobat" + "\r\n" + "* Dodrio" + "\r\n" + "* Donphan" + "\r\n"+ "* Dragonite" + "\r\n" + "* Dusclops" + "\r\n" + 
     "* Entei" + "\r\n" + "* Espeon" + "\r\n" + "* Exeggutor" + "\r\n"+ "* Gardevoir" + "\r\n" + "* Hariyama" + "\r\n" + 
     "* Jumpluff" + "\r\n" + "* Jynx" + "\r\n" + "* Kadabra" + "\r\n"+ "* Kingdra" + "\r\n" + "* Lapras" + "\r\n" + 
     "* Ludiculo" + "\r\n" + "* Machamp" + "\r\n" + "* Marowak" + "\r\n"+ "* Medicham" + "\r\n" + "* Miltank" + "\r\n" + 
     "* Moltres" + "\r\n" + "* Ninjask" + "\r\n" + "* Regirock" + "\r\n" + "* Registeel" + "\r\n" + "* Rhydon" + "\r\n" +
     "* Sceptile" + "\r\n" + "* Scizor" + "\r\n" + "* Slaking" + "\r\n" + "* Slowbro" + "\r\n" + "* Smeargle" + "\r\n" + 
     "* Steelix" + "\r\n" + "* Tauros" + "\r\n" + "* Typhlosion" + "\r\n" + "* Umbreon" + "\r\n" + "* Ursaring" + "\r\n" +
     "* Vaporeon"+ "\r\n" + "* Venusaur" + "\r\n" + "* Weezing" + "\r\n" + "* Zangoose")
     //  .setTitle("Aerodactyl")
     // .setColor(0xFF0000)
     // .setThumbnail(message.author.avatarURL)
     // .setThumbnail("https://cdn.bulbagarden.net/upload/1/16/MDP348.png")
     .setURL("https://www.smogon.com/dex/rs/formats/uubl/")
     //  .setURL("https://bulbapedia.bulbagarden.net/wiki/Armaldo_(Pok%C3%A9mon)")
     // .setFooter("Vote me into Ubers 2020")

     message.channel.send(myInfo);
   }

}
module.exports = BLCommand;