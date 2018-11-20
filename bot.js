var ServerID = ""; //اي دي السيرفر
var ChannelID = "";// اي دي الروم
const prefix = '~'
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if(message.content === '^^DailyForAll'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '^^AllCredit'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '^^RepForAlashaq'){
        message.channel.send('#rep <@346045919072092161>')
    }
});



client.on('message', message => {
    if(message.content === '^^DailyForAll'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '^^AllCredit'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '^^RepForAlashaq'){
        message.channel.send('#rep <@346045919072092161>')
    }
});


client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Sultan#0060','\n','ProBot credits miner is ready!'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 


    });
}

var timer = setTimeout(timerFunc, 1000);



client.login(process.env.BOT_TOKEN);