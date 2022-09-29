require('dotenv/config');

const {BeginnerClassLinksSpring, HiraganaSheet, KatakanaSheet} = require('./beginner.js');
const {IntermediateClassLinksSpring} = require('./intermediate.js');
const {AdvancedClassLinksSpring} = require('./advanced.js');
const {EnglishClassLinksSpring} = require('./english.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
	],
});

//class IDs
//const BEGINNER_ID = '1024671967846080613'; //add appropriate role ID for beginner role in JASS server
//const INTERMEDIATE_ID = '1024672039585460224'; //add appropriate role ID for intermediate role in JASS server
//const ADVANCED_ID = '1024672057855844392'; //add appropriate role ID for advanced role in JASS server
//const ENGLISH_ID = '1024672075526438922'; //add appropriate role ID for english role in JASS server

//manage role prefixes
const ADD_ROLE_PREFIX = '!add-';
const REMOVE_ROLE_PREFIX = '!remove-';   
const ADD_FEEDBACK = ' class role added';
const REMOVE_FEEDBACK = ' class role removed';
const WEEK_PREFIX = '!Week-';

//types of classes
const BEGINNER = 'beginners';
const INTERMEDIATE = 'intermediate';
const ADVANCED = 'advanced';
const ENGLISH = 'english';

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    //add beginner role
    if(!message.member.roles.cache.some(role => role.name === 'Beginners')){
        if (message.content === `${ADD_ROLE_PREFIX}${BEGINNER}`) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "Beginners");
            message.member.roles.add(roleToGive); 
            message.reply(`${BEGINNER}${ADD_FEEDBACK}`); //feedback
        }
    }

     //add intermediate role
     if (!message.member.roles.cache.some(role => role.name === 'Intermediate')) {
        if (message.content === `${ADD_ROLE_PREFIX}${INTERMEDIATE}`) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "Intermediate");
            message.member.roles.add(roleToGive); 
            message.reply(`${INTERMEDIATE}${ADD_FEEDBACK}`); //feedback
        }

     }
    
     //add advanced role
     if (!message.member.roles.cache.some(role => role.name === 'Advanced')) {
        if (message.content === `${ADD_ROLE_PREFIX}${ADVANCED}`) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "Advanced");
            message.member.roles.add(roleToGive); 
            message.reply(`${ADVANCED}${ADD_FEEDBACK}`); //feedback
        }
     }
     
     //add english/study group role
     if (!message.member.roles.cache.some(role => role.name === 'English')) {
        if (message.content === `${ADD_ROLE_PREFIX}${ENGLISH}`) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "English");
            message.member.roles.add(roleToGive); 
            message.reply(`${ENGLISH}${ADD_FEEDBACK}`); //feedback
        }
     }
     
     //remove beginner role
     if (message.member.roles.cache.some(role => role.name === 'Beginners')) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${BEGINNER}`) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "Beginners");
            message.member.roles.remove(roleToRemove); 
            message.reply(`${BEGINNER}${REMOVE_FEEDBACK}`); //feedback
        }
        else if (message.content === `${ADD_ROLE_PREFIX}${BEGINNER}`) {
            message.reply('You already added beginners role'); //feedback
        }  
     }
    
    //remove intermediate role
    if (message.member.roles.cache.some(role => role.name === 'Intermediate')) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${INTERMEDIATE}`) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "Intermediate");
            message.member.roles.remove(roleToRemove); 
            message.reply(`${INTERMEDIATE}${REMOVE_FEEDBACK}`); //feedback
        }
        else if (message.content === `${ADD_ROLE_PREFIX}${INTERMEDIATE}`) {
            message.reply('You already added intermediate role'); //feedback
        } 
    }
    
    //remove advanced role
    if (message.member.roles.cache.some(role => role.name === 'Advanced')) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${ADVANCED}`) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "Advanced");
            message.member.roles.remove(roleToRemove);  
            message.reply(`${ADVANCED}${REMOVE_FEEDBACK}`); //feedback
        }
        else if (message.content === `${ADD_ROLE_PREFIX}${ADVANCED}`) {
            message.reply('You already added advanced role'); //feedback
        } 
    }
  
    //remove english/study group role
    if (message.member.roles.cache.some(role => role.name === 'English')) {
        if (message.content === `${REMOVE_ROLE_PREFIX}${ENGLISH}`) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "English");
            message.member.roles.remove(roleToRemove);  
            message.reply(`${ENGLISH}${REMOVE_FEEDBACK}`); //feedback
        }
        else if (message.content === `${ADD_ROLE_PREFIX}${ENGLISH}`) {
            message.reply('You already added english/study group role'); //feedback
        } 
    }

    //load weekly resources beginner spring
    for(let i=0; i<BeginnerClassLinksSpring.length; i++){
        if(message.content===`${WEEK_PREFIX}` + (i+1).toString() + '-' + `${BEGINNER}`){
            message.reply(BeginnerClassLinksSpring[i]);
        }
    }

    //load weekly resources intermediate spring
    for(let i=0; i<IntermediateClassLinksSpring.length; i++){
        if(message.content===`${WEEK_PREFIX}` + (i+1).toString() + '-' + `${INTERMEDIATE}`){
            message.reply(IntermediateClassLinksSpring[i]);
        }
    }

    //load weekly resources advanced spring
    for(let i=0; i<AdvancedClassLinksSpring.length; i++){
        if(message.content===`${WEEK_PREFIX}` + (i+1).toString() + '-' + `${ADVANCED}`){
            message.reply(AdvancedClassLinksSpring[i]);
        }
    }

    //load weekly resources english spring
    for(let i=0; i<EnglishClassLinksSpring.length; i++){
        if(message.content===`${WEEK_PREFIX}`+ (i+1).toString() + '-' + `${ENGLISH}`){
            message.reply(EnglishClassLinksSpring[i]);
        }
    }

    if(message.content==='!hiragana-sheet'){
        message.reply(HiraganaSheet);
    }

    if(message.content === '!katakana-sheet'){
        message.reply(KatakanaSheet);
    }

    if(message.content === '!help'){
        message.reply('Bot Cheatsheet: ' + 'https://docs.google.com/document/d/1a_bc031_JFLhPw3zdEt6jDCn-tBeL72sXgTNxn1Wcbg/edit?usp=sharing')
    }
    
    if(message.content === 'k!sf scores') {
        message.reply('Jeffrey is the しりとりおおさま');
        message.react('❓');
    }

    if(message.content === 'Jeffrey is the しりとりおおさま'){
        message.react('😘');
    }
});

client.login(process.env.BOT_TOKEN)