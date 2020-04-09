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

const message_no = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir lge rôle Joueur'

const message_no_3 = 'Vous vous êtes trompé de chanel aller dans vérification pour avoir le rôle Joueur...'

const message_no_2 = '`code error: 5933453`' 

const message_no_1 = process.env.DE_CHA_LE_GRADE

const setActivity_1a = process.env.setActivity_1

const set2_2 = process.env.set2

const set3_3 = process.env.set3

const set4_4 = process.env.set4

function test_4(arg){
	if(true_or_false == "!~") {
    console.log('test_4 ru')
  setTimeout(test_1, timer_event, 'funky');
    client.user.setActivity (setActivity_1a, { type: 'WATCHING' });
	}else{
     client.user.setActivity (setActivity_1a, { type: 'WATCHING' });
		  setTimeout(test_1, 10000, 'funky');
	}
}
function test_3(arg){
	if(true_or_false == "!~") {
    console.log('test_3 ru')
   setTimeout(test_4, timer_event, 'funky');
     client.user.setActivity ("rien!!!", { type: 'WATCHING' });
	}else{
      client.user.setActivity (`paladium!!! ${client.ping} ms`, { type: 'WATCHING' });
		   setTimeout(test_4, 10000, 'funky');
	}
}
function test_2(arg){
	if(true_or_false == "!~") {
    console.log('test_2 ru')
      setTimeout(test_3, "10000", 'funky');
        client.user.setActivity ("rien!!", { type: 'WATCHING' });
	}else{
          client.user.setActivity (`paladium!! ${client.ping} ms`, { type: 'WATCHING' });
		     setTimeout(test_3, 10000, 'funky');
	}
}
function test_1(arg) {
	if(true_or_false == "!~") {
    console.log('test_1 ru')
  setTimeout(test_2, timer_event, 'funky');
  client.user.setActivity ("rien!", { type: 'WATCHING' });
	}else{
    client.user.setActivity (`paladium! ${client.ping} ms`, { type: 'WATCHING' });
		  setTimeout(test_2, 10000, 'funky');
	}
}
client.on('error', err => {
  console.error(err);
  process.exit(1);
});

client.on("ready", () => {
    client.user.setActivity ("error :(", { type: 'WATCHING' });
    setTimeout(test_1, 2000, 'funky');
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
              if(message.content === "@PI NETWORK FRANCE BOT"){
message.channel.replay("nope").then(msg => {
  msg.delete(555);
})
}
})

client.on('message', async message => { 
  if(message.author.bot) return;
  if(message.content === prefix + " " + "test"){
    message.channel.bulkDelete(1)
message.reply(` my ${client.ping} ms `).then(msg => {
  msg.delete(5000);
})
};
if(message.content === prefix + " " + "help"){
  message.reply("error").then(msg => {
  msg.delete(5000);
})
   }
  });
// allo d
  // pour ton bot login sur serveurf
client.login(process.env.TOKEN); 
