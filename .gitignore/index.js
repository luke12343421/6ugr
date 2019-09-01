const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = process.env.PREFIX

const GroupID1 = process.env.GRADE

const timer_delete = process.env.TIMES_MESSAGE // 10000 = 11 S

const message_no = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur'

const message_no_3 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur...'

const message_no_2 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur..'

const message_no_1 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur.'

client.on("ready", () => {
    client.user.setActivity "Ceria/DarkRP", { type: 'WATCHING' });
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id} `)
        })
    })
});

client.on('message', async message => { 
  if(message.author.bot) return;
  //if(message.content === "!" + " " + "clear bot"){
  //  message.channel.bulkDelete(message | 2).then(() => { });
//  }
    if (message.channel.id === process.env.ADMIN_COMMAND) {
        if(message.content === prefix + " " + "Admin") {
             message.channel.bulkDelete(message | 1).then(() => { });
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**:x: Vous n'avez pas la permission dls**").catch(console.error);
         client.channels.get('607229829242290183').send(process.env.MESSAGE)
        }
    }else{
        if(message.content === prefix + " " + "Admin"){
          message.channel.bulkDelete(message | 1).then(() => { });
     message.reply("**:x: Vous n'avez pas la permission dls**").then(msg => {
    msg.delete(4000);
     
    })};
        
  if (message.channel.id === process.env.COMMAND_GRADE) {
  if(message.content === prefix + " " + "vérification") {
    const member = message.member
    member.addRole(GroupID1)
    console.log(`${message.author.username}!`),
    console.log(`${message.author.id}!`),
    console.log(`${message.author.avatarURL}!`),
    //console.log(client.channels.get('613440449260290049')//.send(`${message.author.username}! id = ${message.author.id}`))
    console.log(`[Joueur]`)
    message.channel.bulkDelete(message | 1).then(() => { });
  };
  if(message.content === prefix + " " + "verification") {
    
    const member = message.member
    member.addRole(GroupID1)
    console.log(`${message.author.username}!`),
    console.log(`${message.author.id}!`),
    console.log(`${message.author.avatarURL}!`),
    //console.log(client.channels.get('613440449260290049')//.send(`${message.author.username}! id = ${message.author.id}`))
    console.log(`[Joueur]`)
    message.channel.bulkDelete(message | 1).then(() => { });
  };        
    }else{
      if(message.content === prefix + " " + "verification"){
        test(message);
    message.reply(message_no)    .then(msg => {
    msg.delete(timer_delete);
  });
      };
          if(message.content === prefix + " " + "vérification"){
        test(message);
           message.reply(message_no)  .then(msg => {
    msg.delete(timer_delete);
  });
    };
    }

    }});
  // pour ton bot login sur serveur
client.login(process.env.TOKEN); 

function test(message) {
  message.channel.bulkDelete(message | 1).then(() => { });
  console.log(`${message.author.username}!, qui a le grade il samuse avec la commands !!!!!!!!`)
}
