const Discord = require('discord.js');
// fght
const client = new Discord.Client();
// test
const prefix = process.env.PREFIX

const url_live = process.env.URL_LIVE_2

const live = process.env.LIVE

const GroupID1 = process.env.GRADE

const true_or_false = process.env.TRUEORFALSE

const timer_delete = process.env.TIMES_MESSAGE // 10000 = 11 S

const timer_Admin = process.env.TIME_ADMIN

const timer_event = process.env.TIMER_EVENT

const message_no = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur'

const message_no_3 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur...'

const message_no_2 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur..'

const message_no_1 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur.'

function test_4(arg){
	if(true_or_false == "!~") {
  setTimeout(test_1, timer_event, 'funky');
    client.user.setActivity ("lvailllan06:2019 dev new commande ", { type: 'WATCHING' });
	}else{
	client.user.setActivity (`${live} !`, { type: 'STREAMING', url: url_live})
		  setTimeout(test_1, timer_event, 'funky');
	}
}
function test_3(arg){
	if(true_or_false == "!~") {
   setTimeout(test_4, timer_event, 'funky');
     client.user.setActivity ("lvailllan06:2019 dev new commande  !!!", { type: 'WATCHING' });
	}else{
	client.user.setActivity (`${live}. !`, { type: 'STREAMING', url: url_live})
		   setTimeout(test_4, timer_event, 'funky');
	}
}
function test_2(arg){
	if(true_or_false == "!~") {
      setTimeout(test_3, timer_event, 'funky');
        client.user.setActivity ("lvailllan06:2019 dev new commande  !!", { type: 'WATCHING' });
	}else{
	client.user.setActivity (`${live}.. !`, { type: 'STREAMING', url: url_live})
		     setTimeout(test_3, timer_event, 'funky');
	}
}
function test_1(arg) {
	if(true_or_false == "!~") {
  setTimeout(test_2, timer_event, 'funky');
  client.user.setActivity ("lvailllan06:2019 dev new commande  !", { type: 'WATCHING' });
	}else{
	client.user.setActivity (`${live}... !`, { type: 'STREAMING', url: url_live})
		  setTimeout(test_2, timer_event, 'funky');
	}
}
client.on("ready", () => {
    client.user.setActivity ("bot start ;) 😉", { type: 'WATCHING' }).then(msg => {
    setTimeout(test_1, 4000, 'funky');
    })
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
  if(message.content === prefix + " " + "test" + " " +"dev"){
const a = message.guild.roles.get('614095413942943758');

const filter = (reaction, user) => ['✅','❎'].includes(reaction.emoji.name) && user.id === message.author.id;

const embed = new RichEmbed()
    .setTitle('a')
    .setDescription(`
    
    ✅ ${a.toString()}
    ❎ ❎❎❎❎❎❎❎❎❎❎

    
    `)
    .setColor(0xdd9323)
    .setFooter(`ID: ${message.author.id}`);

  message.channel.send(embed).then(async msg =>{

   await msg.react('✅');
   await msg.react('❎');

msg.awaitReactions(filter,{
  max: 2,
  time: 90000,
  errors: ['Time']
}).then(collected => {
const reaction = collected.first();

switch (reaction.emoji.name){
  case '✅':
     message.member.addRole(a).catch(err =>{
          console.log(err)
          return message.channel.send(`error ${a.name}`)
     });
     break;
  case '❎':
  if(message.member.roles.has(a)){
             console.log(err)
         return message.channel.send(`error ${a.name}`)
  }
    message.member.send('error ban or kick ???').catch(err =>{
         console.log(err)
         return message.channel.send(`error ${a.name}`)
    })
    message.channel.send(`${message.member.name} a faire le ❎`)
    break;
}
}).then(collected => {
return message.channel.send(`@${message.author.username} a les grade de ${a.name} a`).then (msg =>{
msg.delete(1000)
});
});
	});
  }
  if(message.content === "!" + " " + "clear bot"){
      process.env.COMMAND_FLY
   message.channel.bulkDelete(message | 2).then(() => { });
  }
    if (message.channel.id === process.env.ADMIN_COMMAND) {
        if(message.content === prefix + " " + "Admin") {
             message.channel.bulkDelete(message | 1).then(() => { });
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("**:x: Vous n'avez pas la permission dls**").then(msg => {
    msg.delete(timer_Admin).catch(console.error);;
         client.channels.get('607229829242290183').send(process.env.MESSAGE)
		    message.channel.bulkDelete(message | 1).then(() => { });
        })
    }else{
        if(message.content === prefix + " " + "Admins"){
          message.channel.bulkDelete(message | 1).then(() => { });
     message.reply("**:x: Vous n'avez pas la permission dls**").then(msg => {
    msg.delete(timer_Admin);
     
    })}};
        
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
// allo
  // pour ton bot login sur serveur
client.login(process.env.TOKEN); 
