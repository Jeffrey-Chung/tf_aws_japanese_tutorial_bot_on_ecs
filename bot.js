require('dotenv/config');

const {BeginnerClassLinksSpring} = require('./beginner.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
	],
});

//class IDs
const BEGINNER_ID = '1024671967846080613' //add appropriate role ID for beginner role in JASS server
const INTERMEDIATE_ID = '1024672039585460224' //add appropriate role ID for intermediate role in JASS server
const ADVANCED_ID = '1024672057855844392' //add appropriate role ID for advanced role in JASS server
const ENGLISH_ID = '1024672075526438922' //add appropriate role ID for english role in JASS server

//manage role prefixes
const ADD_ROLE_PREFIX = '!add-'
const REMOVE_ROLE_PREFIX = '!remove-'   
const ADD_FEEDBACK = ' class role added'
const REMOVE_FEEDBACK = ' class role removed'

//types of classes
const BEGINNER = 'beginner'
const INTERMEDIATE = 'intermediate'
const ADVANCED = 'advanced'
const ENGLISH = 'english'

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    //add beginner role
    if (!message.member.roles.cache.has(`${BEGINNER_ID}`)) {
        if (message.content === `${ADD_ROLE_PREFIX}${BEGINNER}`) {
            message.member.roles.add(`${BEGINNER_ID}`); 
            message.reply(`${BEGINNER}${ADD_FEEDBACK}`); //feedback
        }

    }

     //add intermediate role
     if (!message.member.roles.cache.has(`${INTERMEDIATE_ID}`)) {
        if (message.content === `${ADD_ROLE_PREFIX}${INTERMEDIATE}`) {
            message.member.roles.add(`${INTERMEDIATE_ID}`); 
            message.reply(`${INTERMEDIATE}${ADD_FEEDBACK}`); //feedback
        }

     }
    
     //add advanced role
     if (!message.member.roles.cache.has(`${ADVANCED_ID}`)) {
        if (message.content === `${ADD_ROLE_PREFIX}${ADVANCED}`) {
            message.member.roles.add(`${ADVANCED_ID}`); 
            message.reply(`${ADVANCED}${ADD_FEEDBACK}`); //feedback
        }
     }
     
     //add english/study group role
     if (!message.member.roles.cache.has(`${ENGLISH_ID}`)) {
        if (message.content === `${ADD_ROLE_PREFIX}${ENGLISH}`) {
            message.member.roles.add(`${ENGLISH_ID}`); 
            message.reply(`${ENGLISH}${ADD_FEEDBACK}`); //feedback
        }
     }
     
     //remove beginner role
     if (message.member.roles.cache.has(`${BEGINNER_ID}`)) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${BEGINNER}`) {
            message.member.roles.remove(`${BEGINNER_ID}`); 
            message.reply(`${BEGINNER}${REMOVE_FEEDBACK}`); //feedback
        }  
     }
    
    //remove intermediate role
    if (message.member.roles.cache.has(`${INTERMEDIATE_ID}`)) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${INTERMEDIATE}`) {
            message.member.roles.remove(`${INTERMEDIATE_ID}`); 
            message.reply(`${INTERMEDIATE}${REMOVE_FEEDBACK}`); //feedback
        }

    }
    
    //remove advanced role
    if (message.member.roles.cache.has(`${ADVANCED_ID}`)) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${ADVANCED}`) {
            message.member.roles.remove(`${ADVANCED_ID}`); 
            message.reply(`${ADVANCED}${REMOVE_FEEDBACK}`); //feedback
        }
    }
  
    //remove english/study group role
    if (message.member.roles.cache.has(`${ENGLISH_ID}`)) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${ENGLISH}`) {
            message.member.roles.remove(`${ENGLISH_ID}`); 
            message.reply(`${ENGLISH}${REMOVE_FEEDBACK}`); //feedback
        }
    }
    if(message.content === '!Week-1-beginner')
    {
        message.reply(BeginnerClassLinksSpring.week1);
    }
    
    if(message.content === 'k!sf scores') {
        message.reply('Jeffrey is the しりとりおおさま')
    }

    if(message.content === 'Jeffrey is the しりとりおおさま'){
        message.react('😘');
    }
});

client.login(process.env.BOT_TOKEN)