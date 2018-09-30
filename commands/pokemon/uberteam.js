const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class UberTeamCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'uberteam',
        group: 'pokemon',
        memberName: 'uberteam',
        description: 'Randomly generates an Ubers team'
    })

   }

   async run(message, args)
   {
     var uberNames = ["Deoxys",
        "Deoxys-Attack",
        "Deoxys-Defense",
        "Deoxys-Speed",
        "Groudon",
        "Ho-Oh",
        "Kyogre",
        "Latias",
        "Latios",
        "Lugia",
        "Mew",
        "Mewtwo",
        "Rayquaza",
        "Wobbuffet",
        "Wynaut"];
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
        "Zangoose",
        "Deoxys",
        "Deoxys-Attack",
        "Deoxys-Defense",
        "Deoxys-Speed",
        "Groudon",
        "Ho-Oh",
        "Kyogre",
        "Latias",
        "Latios",
        "Lugia",
        "Mew",
        "Mewtwo",
        "Rayquaza",
        "Wobbuffet",
        "Wynaut"];
        var pokemonSelector1 = Math.floor(Math.random() * 15) + 1;
        var pokemonSelector2 = Math.floor(Math.random() * 88) + 1;
        var pokemonSelector3 = Math.floor(Math.random() * 88) + 1;
        var pokemonSelector4 = Math.floor(Math.random() * 88) + 1;
        var pokemonSelector5 = Math.floor(Math.random() * 88) + 1;
        var pokemonSelector6 = Math.floor(Math.random() * 88) + 1;
         message.reply(" " + uberNames[pokemonSelector1] + ", " + pokemonNames[pokemonSelector2]
         + ", " + pokemonNames[pokemonSelector3] + ", " + pokemonNames[pokemonSelector4] + ", " + pokemonNames[pokemonSelector5]
         + ", " + pokemonNames[pokemonSelector6]);
   }

}
module.exports = UberTeamCommand;