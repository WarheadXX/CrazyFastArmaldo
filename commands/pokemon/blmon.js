const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class BLMonCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'blmon',
        group: 'pokemon',
        memberName: 'blmon',
        description: 'Randomly chooses a BL pokemon'
    })

   }

   async run(message, args)
   {
     var pokemonNames = ["Alakazam",
        "Arcanine",
        "Armaldo",
        "Articuno",
        "Blaziken",
        "Chansey",
        "Charizard",
        "Crobat",
        "Dodrio",
        "Donphan",
        "Dragonite",
        "Dusclops",
        "Entei",
        "Espeon",
        "Exeggutor",
        "Gardevoir",
        "Hariyama",
        "Jumpluff",
        "Jynx",
        "Kadabra",
        "Kingdra",
        "Lapras",
        "Ludiculo",
        "Machamp",
        "Marowak",
        "Medicham",
        "Miltank",
        "Moltres",
        "Ninjask",
        "Regirock",
        "Registeel",
        "Rhydon",
        "Sceptile",
        "Scizor",
        "Slaking",
        "Slowbro",
        "Smeargle",
        "Steelix",
        "Tauros",
        "Typhlosion",
        "Umbreon",
        "Ursaring",
        "Vaporeon",
        "Venusaur",
        "Weezing",
        "Zangoose"];
     var pokemonSelector = Math.floor(Math.random() * 46) + 1;
      message.reply(" " + pokemonNames[pokemonSelector]);
   }

}
module.exports = BLMonCommand;