const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class UUTeamCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'uuteam',
        group: 'pokemon',
        memberName: 'uuteam',
        description: 'Randomly generates an UU team'
    })

   }

   async run(message, args)
   {
     var pokemonNames = ["Absol",
        "Aggron",
        "Altaria",
        "Ampharos",
        "Azumarill",
        "Banette",
        "Blastoise",
        "Breloom",
        "Camerupt",
        "Clefable",
        "Cradily",
        "Electabuzz",
        "Electrode",
        "Exploud",
        "Fearow",
        "Feraligatr",
        "Girafarig",
        "Gligar",
        "Golduck",
        "Golem",
        "Gorebyss",
        "Granbull",
        "Grumpig",
        "Hitmonlee",
        "Hitmontop",
        "Houndoom",
        "Hypno",
        "Kabutops",
        "Kangaskhan",
        "Lanturn",
        "Linoone",
        "Lunatone",
        "Magmar",
        "Manectric",
        "Mantine",
        "Meganium",
        "Misdreavus",
        "Mr.Mime",
        "Muk",
        "Nidoking",
        "Nidoqueen",
        "Ninetails",
        "Omastar",
        "Persian",
        "Pinsir",
        "Politoed",
        "Poliwrath",
        "Primape",
        "Quagsire",
        "Qwilfish",
        "Raichu",
        "Rapidash",
        "Sandslash",
        "Scyther",
        "Sharpedo",
        "Shiftry",
        "Slowking",
        "Sneasel",
        "Solrock",
        "Stantler",
        "Tentacruel",
        "Victreebel",
        "Vileplume",
        "Walrein",
        "Xatu"];
        var pokemonSelector1 = Math.floor(Math.random() * 65) + 1;
        var pokemonSelector2 = Math.floor(Math.random() * 65) + 1;
        var pokemonSelector3 = Math.floor(Math.random() * 65) + 1;
        var pokemonSelector4 = Math.floor(Math.random() * 65) + 1;
        var pokemonSelector5 = Math.floor(Math.random() * 65) + 1;
        var pokemonSelector6 = Math.floor(Math.random() * 65) + 1;
         message.reply(" " + pokemonNames[pokemonSelector1] + ", " + pokemonNames[pokemonSelector2]
         + ", " + pokemonNames[pokemonSelector3] + ", " + pokemonNames[pokemonSelector4] + ", " + pokemonNames[pokemonSelector5]
         + ", " + pokemonNames[pokemonSelector6]);
   }

}
module.exports = UUTeamCommand;