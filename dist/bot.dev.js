"use strict";

require('dotenv/config');

var _require = require('./beginner.js'),
    BeginnerClassLinksSpring = _require.BeginnerClassLinksSpring,
    HiraganaSheet = _require.HiraganaSheet,
    KatakanaSheet = _require.KatakanaSheet;

var _require2 = require('./intermediate.js'),
    IntermediateClassLinksSpring = _require2.IntermediateClassLinksSpring;

var _require3 = require('./advanced.js'),
    AdvancedClassLinksSpring = _require3.AdvancedClassLinksSpring;

var _require4 = require('./english.js'),
    EnglishClassLinksSpring = _require4.EnglishClassLinksSpring;

var _require5 = require('discord.js'),
    Client = _require5.Client,
    GatewayIntentBits = _require5.GatewayIntentBits,
    EmbedBuilder = _require5.EmbedBuilder,
    AttachmentBuilder = _require5.AttachmentBuilder;

var client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: ["MESSAGE", "REACTION"]
});
var file = new AttachmentBuilder('JASS Language Classes FB Sem2 .png'); //class IDs
//const BEGINNER_ID = '1024671967846080613'; //add appropriate role ID for beginner role in JASS server
//const INTERMEDIATE_ID = '1024672039585460224'; //add appropriate role ID for intermediate role in JASS server
//const ADVANCED_ID = '1024672057855844392'; //add appropriate role ID for advanced role in JASS server
//const ENGLISH_ID = '1024672075526438922'; //add appropriate role ID for english role in JASS server
//manage role prefixes

var ADD_ROLE_PREFIX = '!add';
var REMOVE_ROLE_PREFIX = '!rmv';
var ADD_FEEDBACK = ' class role added';
var REMOVE_FEEDBACK = ' class role removed';
var WEEK_PREFIX = '!Week '; //types of classes

var BEGINNER = 'Beginners';
var INTERMEDIATE = 'Intermediate';
var ADVANCED = 'Advanced';
var ENGLISH = 'English';
client.on('ready', function () {
  console.log('The bot is ready');
});
client.on('messageCreate', function (message) {
  //make improved, easier help manual
  var helpEmbed = new EmbedBuilder().setColor(0x0099FF).setURL('https://discord.js.org/').setAuthor({
    name: 'Help Guide'
  }).setThumbnail('https://scontent.fsyd4-1.fna.fbcdn.net/v/t39.30808-6/300519002_5334389690007910_6903679430506030642_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=8631f5&_nc_ohc=6lsZOarXQYYAX8RSjzv&_nc_ht=scontent.fsyd4-1.fna&oh=00_AT_9bqLZR-Qmd7rCBkZXKbKcqObS1BnvqEwWfHxWdt0HVg&oe=634419EB').addFields({
    name: 'Class Names',
    value: 'Beginners, Intermediate, Advanced, English',
    inline: true
  }, {
    name: 'Week Numbers',
    value: '1, 2, 3, 4, 5, 6, 7, 8, 9'
  }, {
    name: "\u200B",
    value: "\u200B"
  }, //blank space
  {
    name: 'Add Command',
    value: '!add <Class Name>'
  }, {
    name: 'Remove Command',
    value: '!remove <Class Name>'
  }, {
    name: 'Load Slides',
    value: '!Week <Week number> <Class Name>'
  }, {
    name: 'Hiragana Sheet',
    value: '!Hiragana Sheet'
  }, {
    name: 'Katakana Sheet',
    value: '!Katakana Sheet'
  }, {
    name: 'Help Command',
    value: '!help-language-bot'
  }).setFooter({
    text: 'All commands are space sensitive, but NOT case sensitive, make sure spelling is all correct'
  }); //add beginner role

  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'Beginners';
  })) {
    if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(BEGINNER).toLowerCase()) {
      var roleToGive = message.guild.roles.cache.find(function (role) {
        return role.name === "Beginners";
      });
      message.member.roles.add(roleToGive);
      message.reply("".concat(BEGINNER).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //add intermediate role


  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'Intermediate';
  })) {
    if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(INTERMEDIATE).toLowerCase()) {
      var _roleToGive = message.guild.roles.cache.find(function (role) {
        return role.name === "Intermediate";
      });

      message.member.roles.add(_roleToGive);
      message.reply("".concat(INTERMEDIATE).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //add advanced role


  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'Advanced';
  })) {
    if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ADVANCED).toLowerCase()) {
      var _roleToGive2 = message.guild.roles.cache.find(function (role) {
        return role.name === "Advanced";
      });

      message.member.roles.add(_roleToGive2);
      message.reply("".concat(ADVANCED).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //add english/study group role


  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'English';
  })) {
    if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ENGLISH).toLowerCase()) {
      var _roleToGive3 = message.guild.roles.cache.find(function (role) {
        return role.name === "English";
      });

      message.member.roles.add(_roleToGive3);
      message.reply("".concat(ENGLISH).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //remove beginner role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'Beginners';
  })) {
    if (message.content.toLowerCase() === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(BEGINNER).toLowerCase()) {
      var roleToRemove = message.guild.roles.cache.find(function (role) {
        return role.name === "Beginners";
      });
      message.member.roles.remove(roleToRemove);
      message.reply("".concat(BEGINNER).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    } else if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(BEGINNER).toLowerCase()) {
      message.reply('You already added beginners role'); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //remove intermediate role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'Intermediate';
  })) {
    if (message.content.toLowerCase() === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(INTERMEDIATE).toLowerCase()) {
      var _roleToRemove = message.guild.roles.cache.find(function (role) {
        return role.name === "Intermediate";
      });

      message.member.roles.remove(_roleToRemove);
      message.reply("".concat(INTERMEDIATE).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    } else if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(INTERMEDIATE).toLowerCase()) {
      message.reply('You already added intermediate role'); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //remove advanced role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'Advanced';
  })) {
    if (message.content.toLowerCase() === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(ADVANCED).toLowerCase()) {
      var _roleToRemove2 = message.guild.roles.cache.find(function (role) {
        return role.name === "Advanced";
      });

      message.member.roles.remove(_roleToRemove2);
      message.reply("".concat(ADVANCED).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    } else if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ADVANCED).toLowerCase()) {
      message.reply('You already added advanced role'); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //remove english/study group role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'English';
  })) {
    if (message.content.toLowerCase() === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(ENGLISH).toLowerCase()) {
      var _roleToRemove3 = message.guild.roles.cache.find(function (role) {
        return role.name === "English";
      });

      message.member.roles.remove(_roleToRemove3);
      message.reply("".concat(ENGLISH).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    } else if (message.content.toLowerCase() === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ENGLISH).toLowerCase()) {
      message.reply('You already added english/study group role'); //feedback

      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //load weekly resources beginner spring


  for (var i = 0; i < BeginnerClassLinksSpring.length; i++) {
    if (message.content.toLowerCase() === "".concat(WEEK_PREFIX).toLowerCase() + (i + 1).toString() + ' ' + "".concat(BEGINNER).toLowerCase()) {
      message.reply('Week ' + (i + 1).toString() + ' resources: ' + BeginnerClassLinksSpring[i]);
      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //load weekly resources intermediate spring


  for (var _i = 0; _i < IntermediateClassLinksSpring.length; _i++) {
    if (message.content.toLowerCase() === "".concat(WEEK_PREFIX).toLowerCase() + (_i + 1).toString() + ' ' + "".concat(INTERMEDIATE).toLowerCase()) {
      message.reply('Week ' + (_i + 1).toString() + ' resources: ' + IntermediateClassLinksSpring[_i]);
      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //load weekly resources advanced spring


  for (var _i2 = 0; _i2 < AdvancedClassLinksSpring.length; _i2++) {
    if (message.content.toLowerCase() === "".concat(WEEK_PREFIX).toLowerCase() + (_i2 + 1).toString() + ' ' + "".concat(ADVANCED).toLowerCase()) {
      message.reply('Week ' + (_i2 + 1).toString() + ' resources: ' + AdvancedClassLinksSpring[_i2]);
      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  } //load weekly resources english spring


  for (var _i3 = 0; _i3 < EnglishClassLinksSpring.length; _i3++) {
    if (message.content.toLowerCase() === "".concat(WEEK_PREFIX).toLowerCase() + (_i3 + 1).toString() + ' ' + "".concat(ENGLISH).toLowerCase()) {
      message.reply('Week ' + (_i3 + 1).toString() + ' resources: ' + EnglishClassLinksSpring[_i3]);
      message.channel.send('type "!help-language-bot" if you forgot any more commands');
    }
  }

  if (message.content.toLowerCase() === '!hiragana sheet'.toLowerCase()) {
    message.reply(HiraganaSheet);
    message.channel.send('type "!help-language-bot" if you forgot any more commands');
  }

  if (message.content.toLowerCase() === '!katakana sheet'.toLowerCase()) {
    message.reply(KatakanaSheet);
    message.channel.send('type "!help-language-bot" if you forgot any more commands');
  }

  if (message.content.toLowerCase() === '!help-language-bot'.toLowerCase()) {
    message.reply({
      embeds: [helpEmbed]
    });
    message.channel.send('For more information see: ' + 'https://docs.google.com/document/d/1a_bc031_JFLhPw3zdEt6jDCn-tBeL72sXgTNxn1Wcbg/edit?usp=sharing');
  }

  if (message.content === 'k!sf-score-jeffrey') {
    message.reply('Jeffrey is the しりとりおおさま');
    message.react('❓');
  }

  if (message.content === 'Jeffrey is the しりとりおおさま') {
    message.react('😘');
  }
});
client.login(process.env.BOT_TOKEN);