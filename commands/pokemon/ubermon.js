const Commando = require('discord.js-commando');
// const bot = new Commando.Client();

class UberMonCommand extends Commando.Command
{
   
   constructor(client){
    super(client, {
        name: 'ubermon',
        group: 'pokemon',
        memberName: 'ubermon',
        description: 'Randomly chooses an Ubers pokemon'
    })

   }

   async run(message, args)
   {
     var pokemonNames = ["Deoxys",
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
     var pokemonSelector = Math.floor(Math.random() * 15) + 1;
      message.reply(" " + pokemonNames[pokemonSelector]);
   }

}
module.exports = UberMonCommand;