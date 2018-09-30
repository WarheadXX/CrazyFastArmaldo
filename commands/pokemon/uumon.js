const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class UUMonCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'uumon',
        group: 'pokemon',
        memberName: 'uumon',
        description: 'Randomly chooses an UU pokemon'
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
     var pokemonSelector = Math.floor(Math.random() * 65) + 1;
      message.reply(" " + pokemonNames[pokemonSelector]);
   }

}
module.exports = UUMonCommand;