const Discord = require('discord.js');
var client = new Discord.Client();
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

    //let guild = client.guilds.get(guildID);


});






//bot things
// Create a new role with data and a reason


var str, words;

client.on('message', async msg => {

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
        const m = await msg.reply('pong!');
        m.edit(`Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);

    }

    if(words[0]==='roll'){
        console.log(words[1]);
        

    }
   

    if(msg.content === 'que horas são?'){
        msg.reply(n)
    }
    

})




client.login(auth.token);


