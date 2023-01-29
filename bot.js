require('dotenv/config');

const {BeginnerClassLinksSpring, HiraganaSheet, KatakanaSheet} = require('./beginner.js');
const {IntermediateClassLinksSpring} = require('./intermediate.js');
const {AdvancedClassLinksSpring} = require('./advanced.js');
const {EnglishClassLinksSpring} = require('./english.js');
const {SponsorNames, SponsorImages, SponsorDiscounts} = require('./sponsors.js');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
	],
    partials: ["MESSAGE", "REACTION"]
});

var RANDOM = -1; //may change to const variable later
var GUESS_SPONSOR = false;
var CORRECT_ANSWER = false;
//manage role prefixes
const ADD_ROLE_PREFIX = '!add';
const REMOVE_ROLE_PREFIX = '!rmv';   
const ADD_FEEDBACK = ' class role added';
const REMOVE_FEEDBACK = ' class role removed';
const WEEK_PREFIX = '!Week ';

//types of classes
const BEGINNER = 'Beginners'; //add appropriate role ID for beginner role in JASS server
const INTERMEDIATE = 'Intermediate'; //add appropriate role ID for intermediate role in JASS server
const ADVANCED = 'Advanced'; //add appropriate role ID for advanced role in JASS server
const ENGLISH = 'English'; //add appropriate role ID for english role in JASS server

client.on('ready', () => {
    console.log('The bot is ready');
});

client.on('messageCreate', message => {
    //make improved, easier help manual
    const helpEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Help Guide'})
    .setThumbnail('https://scontent.fsyd4-1.fna.fbcdn.net/v/t39.30808-6/300519002_5334389690007910_6903679430506030642_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=6lsZOarXQYYAX8RSjzv&_nc_ht=scontent.fsyd4-1.fna&oh=00_AT_9bqLZR-Qmd7rCBkZXKbKcqObS1BnvqEwWfHxWdt0HVg&oe=634419EB')
	.addFields(
        { name: 'Class Names', value: 'Beginners, Intermediate, Advanced, English', inline: true },
        { name: 'Week Numbers', value: '1, 2, 3, 4, 5, 6, 7, 8, 9'},
        { name: '\u200B', value: '\u200B' }, //blank space
		{ name: 'Add Command', value: '!add <Class Name>'},
		{ name: 'Remove Command', value: '!rmv <Class Name>' },
        { name: 'Load Slides', value: '!Week <Week number> <Class Name>' },
        { name: 'Hiragana Sheet', value: '!Hiragana Sheet' },
        { name: 'Katakana Sheet', value: '!Katakana Sheet' },
        { name: 'Help Command', value: '!help-language-bot' },
	)
	.setFooter({ text: 'All commands are space sensitive, but NOT case sensitive, make sure spelling is all correct' });

    //add beginner role
    if(!message.member.roles.cache.some(role => role.name === 'Beginners')){
        if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${BEGINNER}`.toLowerCase()) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "Beginners");
            message.member.roles.add(roleToGive); 
            message.reply(`${BEGINNER}${ADD_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
    }

     //add intermediate role
     if (!message.member.roles.cache.some(role => role.name === 'Intermediate')) {
        if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${INTERMEDIATE}`.toLowerCase()) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "Intermediate");
            message.member.roles.add(roleToGive); 
            message.reply(`${INTERMEDIATE}${ADD_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }

     }
    
     //add advanced role
     if (!message.member.roles.cache.some(role => role.name === 'Advanced')) {
        if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${ADVANCED}`.toLowerCase()) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "Advanced");
            message.member.roles.add(roleToGive); 
            message.reply(`${ADVANCED}${ADD_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
     }
     
     //add english/study group role
     if (!message.member.roles.cache.some(role => role.name === 'English')) {
        if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${ENGLISH}`.toLowerCase()) {
            const roleToGive = message.guild.roles.cache.find(role => role.name === "English");
            message.member.roles.add(roleToGive); 
            message.reply(`${ENGLISH}${ADD_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
     }
     
     //remove beginner role
     if (message.member.roles.cache.some(role => role.name === 'Beginners')) {
        if (message.content.toLowerCase() === `${REMOVE_ROLE_PREFIX}` + ' ' + `${BEGINNER}`.toLowerCase()) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "Beginners");
            message.member.roles.remove(roleToRemove); 
            message.reply(`${BEGINNER}${REMOVE_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
        else if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${BEGINNER}`.toLowerCase()) {
            message.reply('You already added beginners role\n type "!help-language-bot" if you forgot any more commands'); //feedback
        }  
     }
    
    //remove intermediate role
    if (message.member.roles.cache.some(role => role.name === 'Intermediate')) {
        if (message.content.toLowerCase() === `${REMOVE_ROLE_PREFIX}` + ' ' + `${INTERMEDIATE}`.toLowerCase()) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "Intermediate");
            message.member.roles.remove(roleToRemove); 
            message.reply(`${INTERMEDIATE}${REMOVE_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
        else if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${INTERMEDIATE}`.toLowerCase()) {
            message.reply('You already added intermediate role \ntype "!help-language-bot" if you forgot any more commands'); //feedback
        } 
    }
    
    //remove advanced role
    if (message.member.roles.cache.some(role => role.name === 'Advanced')) {
        if (message.content.toLowerCase() === `${REMOVE_ROLE_PREFIX}` + ' ' + `${ADVANCED}`.toLowerCase()) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "Advanced");
            message.member.roles.remove(roleToRemove);  
            message.reply(`${ADVANCED}${REMOVE_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
        else if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${ADVANCED}`.toLowerCase()) {
            message.reply('You already added advanced role \ntype "!help-language-bot" if you forgot any more commands'); //feedback
            message.channel.send('type "!help-language-bot" if you forgot any more commands');
        } 
    }
  
    //remove english/study group role
    if (message.member.roles.cache.some(role => role.name === 'English')) {
        if (message.content.toLowerCase() === `${REMOVE_ROLE_PREFIX}` + ' ' + `${ENGLISH}`.toLowerCase()) {
            const roleToRemove = message.guild.roles.cache.find(role => role.name === "English");
            message.member.roles.remove(roleToRemove);  
            message.reply(`${ENGLISH}${REMOVE_FEEDBACK}` + '\ntype "!help-language-bot" if you forgot any more commands'); //feedback
        }
        else if (message.content.toLowerCase() === `${ADD_ROLE_PREFIX}` + ' ' + `${ENGLISH}`.toLowerCase()) {
            message.reply('You already added english/study group role \ntype "!help-language-bot" if you forgot any more commands'); //feedback
        } 
    }

    //load weekly resources beginner autumn
    for(let i=0; i<BeginnerClassLinksSpring.length; i++){
        if(message.content.toLowerCase()===`${WEEK_PREFIX}`.toLowerCase() + (i+1).toString() + ' ' + `${BEGINNER}`.toLowerCase()){
            message.reply('Week ' + (i+1).toString() + ' resources: ' + BeginnerClassLinksSpring[i] + '\ntype "!help-language-bot" if you forgot any more commands');
        }
    }

    //load weekly resources intermediate autumn
    for(let i=0; i<IntermediateClassLinksSpring.length; i++){
        if(message.content.toLowerCase()===`${WEEK_PREFIX}`.toLowerCase() + (i+1).toString() + ' ' + `${INTERMEDIATE}`.toLowerCase()){
            message.reply('Week ' + (i+1).toString() + ' resources: ' + IntermediateClassLinksSpring[i] + '\ntype "!help-language-bot" if you forgot any more commands');
        }
    }

    //load weekly resources advanced autumn
    for(let i=0; i<AdvancedClassLinksSpring.length; i++){
        if(message.content.toLowerCase()===`${WEEK_PREFIX}`.toLowerCase() + (i+1).toString() + ' ' + `${ADVANCED}`.toLowerCase()){
            message.reply('Week ' + (i+1).toString() + ' resources: ' + AdvancedClassLinksSpring[i] + '\ntype "!help-language-bot" if you forgot any more commands');
        }
    }

    //load weekly resources english autumn
    for(let i=0; i<EnglishClassLinksSpring.length; i++){
        if(message.content.toLowerCase()===`${WEEK_PREFIX}`.toLowerCase()+ (i+1).toString() + ' ' + `${ENGLISH}`.toLowerCase()){
            message.reply('Week ' + (i+1).toString() + ' resources: ' + EnglishClassLinksSpring[i] + '\ntype "!help-language-bot" if you forgot any more commands');
        }
    }
    //load hiragana sheets
    if(message.content.toLowerCase()==='!hiragana sheet'.toLowerCase()){
        message.reply(HiraganaSheet + '\ntype "!help-language-bot" if you forgot any more commands');
    }
    //load katakana sheets
    if(message.content.toLowerCase() === '!katakana sheet'.toLowerCase()){
        message.reply(KatakanaSheet + '\ntype "!help-language-bot" if you forgot any more commands');
    }
    //load help page
    if(message.content.toLowerCase() === '!help-language-bot'.toLowerCase()){
        message.reply({ embeds: [helpEmbed] });
        message.channel.send('For more information see: ' + 'https://docs.google.com/document/d/1a_bc031_JFLhPw3zdEt6jDCn-tBeL72sXgTNxn1Wcbg/edit?usp=sharing')
    }
    
    if(message.content.toLowerCase() === '!guess sponsor'.toLowerCase()){
        var random = Math.floor(Math.random() * SponsorNames.length);
        RANDOM = random;
        message.reply('Guess this sponsor: ' + SponsorImages[RANDOM]);
        GUESS_SPONSOR = true;
    }
    if(GUESS_SPONSOR) {
        var timeleft = 10;
        var downloadTimer = setInterval(function(){
            if(timeleft <= 0 && CORRECT_ANSWER == false){
                message.reply('The correct answer should be ' + SponsorNames[RANDOM] + '. They provide ' + SponsorDiscounts[RANDOM] + " Type '!guess sponsor' to try again!");
                RANDOM = -1;
                clearInterval(downloadTimer);
            }
            else if (timeleft <= 0 && CORRECT_ANSWER == true) {
                CORRECT_ANSWER = false;    
                clearInterval(downloadTimer);           
            }
            timeleft -= 1;
        }, 1000);
        GUESS_SPONSOR = false;
    }
    
    
    if(message.content.toLowerCase() === `${SponsorNames[RANDOM]}`.toLowerCase()){
        message.reply('Congrats, you got the answer! ' + SponsorNames[RANDOM] + ' provides ' + SponsorDiscounts[RANDOM] + " Type '!guess sponsor' to try again!");
        CORRECT_ANSWER = true;
        RANDOM = -1;
    }
    
    if(message.content === 'k!sf-score-jeffrey') {
        message.reply('Jeffrey is the しりとりおおさま');
        message.react('❓');
    }

    if(message.content === 'Jeffrey is the しりとりおおさま'){
        message.react('😘');
    }

    
});

client.login(process.env.BOT_TOKEN)