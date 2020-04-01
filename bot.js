const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');

var d = new Date();
var n = d.getTime();



client.on('ready',()=>{
    client.user.setPresence({
        game: { 
            name: 'minha vida no lixo',
            type: 'Heck'
        },
        status: 'Coding'
    })
    
    console.log(`Logged in as ${client.user.tag}!`);

    let guild = client.guilds.get(guildID);


});






//bot things
// Create a new role with data and a reason


var str, words;

client.on('message', msg => {

    str = msg.content;
    words=str.trim().split(" ");

    if (msg.author.bot) return;


    if(msg.content!=''){
        console.log(words);
    }

    if(words.includes('fuck')){
        msg.delete();
        msg.reply('olha o palavriado, filho da puta');
    }

    if(msg.content === '+ping'){
        msg.reply('pong');
    }

    if(msg.content === 'que horas são?'){
        msg.reply(n)
    }
    

})




client.login('NjkxMzQ0MzA1MzEwMTM4MzY4.XnnoWw.PNGff5btZOX3Mzu2DwZfMHfqiKA');


