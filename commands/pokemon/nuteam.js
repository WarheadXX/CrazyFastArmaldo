const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class NUTeamCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'nuteam',
        group: 'pokemon',
        memberName: 'nuteam',
        description: 'Randomly generates a NU team'
    })

   }

   async run(message, args)
   {
     var pokemonNames = ["Abra",
        "Aipom",
        "Anorith",
        "Arbok",
        "Ariados",
        "Beautifly",
        "Beedrill",
        "Bellossom",
        "Butterfree",
        "Cacturne",
        "Castform",
        "Charmeleon",
        "Chimecho",
        "Clamperl",
        "Corsola",
        "Crawdaunt",
        "Delcatty",
        "Delibird",
        "Dewgong",
        "Diglett",
        "Ditto",
        "Dragonair",
        "Drowzee",
        "Dunsparce",
        "Duskull",
        "Dustox",
        "Farfetch'd",
        "Flareon",
        "Furret",
        "Glalie",
        "Golbat",
        "Graveler",
        "Grovyle",
        "Haunter",
        "Hitmonchan",
        "Houndour",
        "Huntail",
        "Illumise",
        "Kecleon",
        "Kingler",
        "Koffin",
        "Lairon",
        "Ledian",
        "Lickitung",
        "Lileep",
        "Lombre",
        "Luvdisc",
        "Machoke",
        "Magby",
        "Magcargo",
        "Masquerain",
        "Mawile",
        "Metang",
        "Mightyena",
        "Minun",
        "Murkrow",
        "Noctowl",
        "Nosepass",
        "Octillery",
        "Omanyte",
        "Onix",
        "Parasect",
        "Pelipper",
        "Pidgeot",
        "Pikachu",
        "Piloswine",
        "Pineco",
        "Plusle",
        "Poliwhirl",
        "Ponyta",
        "Porygon",
        "Pupitar",
        "Quilava",
        "Raticate",
        "Relincanth",
        "Roselia",
        "Sableye",
        "Seadra",
        "Seaking",
        "Sealeo",
        "Seviper",
        "Shedinja",
        "Shelgon",
        "Shuckle",
        "Spinda",
        "Staryu",
        "Sudowoodo",
        "Sunflora",
        "Swalot",
        "Tangela",
        "Togetic",
        "Torkoal",
        "Trapinch",
        "Tropius",
        "Unown",
        "Venomoth",
        "Vigoroth",
        "Warortle",
        "Weepinbell",
        "Whiscash",
        "Wigglytuff",
        "Yanma"];
        var pokemonSelector1 = Math.floor(Math.random() * 102) + 1;
        var pokemonSelector2 = Math.floor(Math.random() * 102) + 1;
        var pokemonSelector3 = Math.floor(Math.random() * 102) + 1;
        var pokemonSelector4 = Math.floor(Math.random() * 102) + 1;
        var pokemonSelector5 = Math.floor(Math.random() * 102) + 1;
        var pokemonSelector6 = Math.floor(Math.random() * 102) + 1;
         message.reply(" " + pokemonNames[pokemonSelector1] + ", " + pokemonNames[pokemonSelector2]
         + ", " + pokemonNames[pokemonSelector3] + ", " + pokemonNames[pokemonSelector4] + ", " + pokemonNames[pokemonSelector5]
         + ", " + pokemonNames[pokemonSelector6]);
   }

}
module.exports = NUTeamCommand;