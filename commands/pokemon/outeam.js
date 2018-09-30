const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class OUTeamCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'outeam',
        group: 'pokemon',
        memberName: 'outeam',
        description: 'Randomly generates an OU team'
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
        "Zapdos",
        "Alakazam",
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
        var pokemonSelector1 = Math.floor(Math.random() * 73) + 1;
        var pokemonSelector2 = Math.floor(Math.random() * 73) + 1;
        var pokemonSelector3 = Math.floor(Math.random() * 73) + 1;
        var pokemonSelector4 = Math.floor(Math.random() * 73) + 1;
        var pokemonSelector5 = Math.floor(Math.random() * 73) + 1;
        var pokemonSelector6 = Math.floor(Math.random() * 73) + 1;
         message.reply(" " + pokemonNames[pokemonSelector1] + ", " + pokemonNames[pokemonSelector2]
         + ", " + pokemonNames[pokemonSelector3] + ", " + pokemonNames[pokemonSelector4] + ", " + pokemonNames[pokemonSelector5]
         + ", " + pokemonNames[pokemonSelector6]);
   }

}
module.exports = OUTeamCommand;