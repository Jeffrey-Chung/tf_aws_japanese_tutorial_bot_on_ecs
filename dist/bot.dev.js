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
    GatewayIntentBits = _require5.GatewayIntentBits;

var client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: ["MESSAGE", "REACTION"]
}); //class IDs
//const BEGINNER_ID = '1024671967846080613'; //add appropriate role ID for beginner role in JASS server
//const INTERMEDIATE_ID = '1024672039585460224'; //add appropriate role ID for intermediate role in JASS server
//const ADVANCED_ID = '1024672057855844392'; //add appropriate role ID for advanced role in JASS server
//const ENGLISH_ID = '1024672075526438922'; //add appropriate role ID for english role in JASS server
//manage role prefixes

var ADD_ROLE_PREFIX = '!add';
var REMOVE_ROLE_PREFIX = '!remove';
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
  //add beginner role
  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'Beginners';
  })) {
    if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(BEGINNER)) {
      var roleToGive = message.guild.roles.cache.find(function (role) {
        return role.name === "Beginners";
      });
      message.member.roles.add(roleToGive);
      message.reply("".concat(BEGINNER).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //add intermediate role


  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'Intermediate';
  })) {
    if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(INTERMEDIATE)) {
      var _roleToGive = message.guild.roles.cache.find(function (role) {
        return role.name === "Intermediate";
      });

      message.member.roles.add(_roleToGive);
      message.reply("".concat(INTERMEDIATE).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //add advanced role


  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'Advanced';
  })) {
    if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ADVANCED)) {
      var _roleToGive2 = message.guild.roles.cache.find(function (role) {
        return role.name === "Advanced";
      });

      message.member.roles.add(_roleToGive2);
      message.reply("".concat(ADVANCED).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //add english/study group role


  if (!message.member.roles.cache.some(function (role) {
    return role.name === 'English';
  })) {
    if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ENGLISH)) {
      var _roleToGive3 = message.guild.roles.cache.find(function (role) {
        return role.name === "English";
      });

      message.member.roles.add(_roleToGive3);
      message.reply("".concat(ENGLISH).concat(ADD_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //remove beginner role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'Beginners';
  })) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(BEGINNER)) {
      var roleToRemove = message.guild.roles.cache.find(function (role) {
        return role.name === "Beginners";
      });
      message.member.roles.remove(roleToRemove);
      message.reply("".concat(BEGINNER).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    } else if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(BEGINNER)) {
      message.reply('You already added beginners role'); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //remove intermediate role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'Intermediate';
  })) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(INTERMEDIATE)) {
      var _roleToRemove = message.guild.roles.cache.find(function (role) {
        return role.name === "Intermediate";
      });

      message.member.roles.remove(_roleToRemove);
      message.reply("".concat(INTERMEDIATE).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    } else if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(INTERMEDIATE)) {
      message.reply('You already added intermediate role'); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //remove advanced role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'Advanced';
  })) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(ADVANCED)) {
      var _roleToRemove2 = message.guild.roles.cache.find(function (role) {
        return role.name === "Advanced";
      });

      message.member.roles.remove(_roleToRemove2);
      message.reply("".concat(ADVANCED).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    } else if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ADVANCED)) {
      message.reply('You already added advanced role'); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //remove english/study group role


  if (message.member.roles.cache.some(function (role) {
    return role.name === 'English';
  })) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX) + ' ' + "".concat(ENGLISH)) {
      var _roleToRemove3 = message.guild.roles.cache.find(function (role) {
        return role.name === "English";
      });

      message.member.roles.remove(_roleToRemove3);
      message.reply("".concat(ENGLISH).concat(REMOVE_FEEDBACK)); //feedback

      message.channel.send('type !help if you forgot any more commands');
    } else if (message.content === "".concat(ADD_ROLE_PREFIX) + ' ' + "".concat(ENGLISH)) {
      message.reply('You already added english/study group role'); //feedback

      message.channel.send('type !help if you forgot any more commands');
    }
  } //load weekly resources beginner spring


  for (var i = 0; i < BeginnerClassLinksSpring.length; i++) {
    if (message.content === "".concat(WEEK_PREFIX) + (i + 1).toString() + ' ' + "".concat(BEGINNER)) {
      message.reply('Week ' + (i + 1).toString() + ' resources: ' + BeginnerClassLinksSpring[i]);
      message.channel.send('type !help if you forgot any more commands');
    }
  } //load weekly resources intermediate spring


  for (var _i = 0; _i < IntermediateClassLinksSpring.length; _i++) {
    if (message.content === "".concat(WEEK_PREFIX) + (_i + 1).toString() + ' ' + "".concat(INTERMEDIATE)) {
      message.reply('Week ' + (_i + 1).toString() + ' resources: ' + IntermediateClassLinksSpring[_i]);
      message.channel.send('type !help if you forgot any more commands');
    }
  } //load weekly resources advanced spring


  for (var _i2 = 0; _i2 < AdvancedClassLinksSpring.length; _i2++) {
    if (message.content === "".concat(WEEK_PREFIX) + (_i2 + 1).toString() + ' ' + "".concat(ADVANCED)) {
      message.reply('Week ' + (_i2 + 1).toString() + ' resources: ' + AdvancedClassLinksSpring[_i2]);
      message.channel.send('type !help if you forgot any more commands');
    }
  } //load weekly resources english spring


  for (var _i3 = 0; _i3 < EnglishClassLinksSpring.length; _i3++) {
    if (message.content === "".concat(WEEK_PREFIX) + (_i3 + 1).toString() + ' ' + "".concat(ENGLISH)) {
      message.reply('Week ' + (_i3 + 1).toString() + ' resources: ' + EnglishClassLinksSpring[_i3]);
      message.channel.send('type !help if you forgot any more commands');
    }
  }

  if (message.content === '!hiragana-sheet') {
    message.reply(HiraganaSheet);
    message.channel.send('type !help if you forgot any more commands');
  }

  if (message.content === '!katakana-sheet') {
    message.reply(KatakanaSheet);
    message.channel.send('type !help if you forgot any more commands');
  }

  if (message.content === '!help') {
    message.reply('Bot Cheatsheet: ' + 'https://docs.google.com/document/d/1a_bc031_JFLhPw3zdEt6jDCn-tBeL72sXgTNxn1Wcbg/edit?usp=sharing');
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