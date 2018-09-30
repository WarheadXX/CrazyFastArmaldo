const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class OUMonCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'oumon',
        group: 'pokemon',
        memberName: 'oumon',
        description: 'Randomly chooses an OU pokemon'
    })

   }

   async run(message, args)
   {
     var pokemonNames = ["Aerodactyl",
        "Blissey",
        "Celebi",
        "Claydol",
        "Cloyster",
        "Dugtrio",
        "Flygon",
        "Forretress",
        "Gengar",
        "Gyarados",
        "Heracross",
        "Jirachi",
        "Jolteon",
        "Magneton",
        "Metagross",
        "Milotic",
        "Porygon2",
        "Raikou",
        "Regice",
        "Salamence",
        "Skarmory",
        "Snorlax",
        "Starmie",
        "Suicune",
        "Swampert",
        "Tyranitar",
        "Zapdos"];
     var pokemonSelector = Math.floor(Math.random() * 27) + 1;
      message.reply(" " + pokemonNames[pokemonSelector]);
   }

}
module.exports = OUMonCommand;