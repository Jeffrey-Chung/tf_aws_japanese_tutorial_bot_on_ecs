"use strict";

require('dotenv/config');

var _require = require('./beginner.js'),
    BeginnerClassLinksSpring = _require.BeginnerClassLinksSpring;

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
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
}); //class IDs

var BEGINNER_ID = '1024671967846080613'; //add appropriate role ID for beginner role in JASS server

var INTERMEDIATE_ID = '1024672039585460224'; //add appropriate role ID for intermediate role in JASS server

var ADVANCED_ID = '1024672057855844392'; //add appropriate role ID for advanced role in JASS server

var ENGLISH_ID = '1024672075526438922'; //add appropriate role ID for english role in JASS server
//manage role prefixes

var ADD_ROLE_PREFIX = '!add-';
var REMOVE_ROLE_PREFIX = '!remove-';
var ADD_FEEDBACK = ' class role added';
var REMOVE_FEEDBACK = ' class role removed'; //types of classes

var BEGINNER = 'beginners';
var INTERMEDIATE = 'intermediate';
var ADVANCED = 'advanced';
var ENGLISH = 'english';
client.on('ready', function () {
  console.log('The bot is ready');
});
client.on('messageCreate', function (message) {
  //add beginner role
  if (!message.member.roles.cache.has("".concat(BEGINNER_ID))) {
    if (message.content === "".concat(ADD_ROLE_PREFIX).concat(BEGINNER)) {
      message.member.roles.add("".concat(BEGINNER_ID));
      message.reply("".concat(BEGINNER).concat(ADD_FEEDBACK)); //feedback
    }
  } //add intermediate role


  if (!message.member.roles.cache.has("".concat(INTERMEDIATE_ID))) {
    if (message.content === "".concat(ADD_ROLE_PREFIX).concat(INTERMEDIATE)) {
      message.member.roles.add("".concat(INTERMEDIATE_ID));
      message.reply("".concat(INTERMEDIATE).concat(ADD_FEEDBACK)); //feedback
    }
  } //add advanced role


  if (!message.member.roles.cache.has("".concat(ADVANCED_ID))) {
    if (message.content === "".concat(ADD_ROLE_PREFIX).concat(ADVANCED)) {
      message.member.roles.add("".concat(ADVANCED_ID));
      message.reply("".concat(ADVANCED).concat(ADD_FEEDBACK)); //feedback
    }
  } //add english/study group role


  if (!message.member.roles.cache.has("".concat(ENGLISH_ID))) {
    if (message.content === "".concat(ADD_ROLE_PREFIX).concat(ENGLISH)) {
      message.member.roles.add("".concat(ENGLISH_ID));
      message.reply("".concat(ENGLISH).concat(ADD_FEEDBACK)); //feedback
    }
  } //remove beginner role


  if (message.member.roles.cache.has("".concat(BEGINNER_ID))) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX).concat(BEGINNER)) {
      message.member.roles.remove("".concat(BEGINNER_ID));
      message.reply("".concat(BEGINNER).concat(REMOVE_FEEDBACK)); //feedback
    }
  } //remove intermediate role


  if (message.member.roles.cache.has("".concat(INTERMEDIATE_ID))) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX).concat(INTERMEDIATE)) {
      message.member.roles.remove("".concat(INTERMEDIATE_ID));
      message.reply("".concat(INTERMEDIATE).concat(REMOVE_FEEDBACK)); //feedback
    }
  } //remove advanced role


  if (message.member.roles.cache.has("".concat(ADVANCED_ID))) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX).concat(ADVANCED)) {
      message.member.roles.remove("".concat(ADVANCED_ID));
      message.reply("".concat(ADVANCED).concat(REMOVE_FEEDBACK)); //feedback
    }
  } //remove english/study group role


  if (message.member.roles.cache.has("".concat(ENGLISH_ID))) {
    if (message.content === "".concat(REMOVE_ROLE_PREFIX).concat(ENGLISH)) {
      message.member.roles.remove("".concat(ENGLISH_ID));
      message.reply("".concat(ENGLISH).concat(REMOVE_FEEDBACK)); //feedback
    }
  } //load weekly resources beginner spring


  for (var i = 0; i < BeginnerClassLinksSpring.length; i++) {
    if (message.content === '!Week-' + (i + 1).toString() + '-beginners') {
      message.reply(BeginnerClassLinksSpring[i]);
    }
  } //load weekly resources intermediate spring


  for (var _i = 0; _i < IntermediateClassLinksSpring.length; _i++) {
    if (message.content === '!Week-' + (_i + 1).toString() + '-intermediate') {
      message.reply(IntermediateClassLinksSpring[_i]);
    }
  } //load weekly resources beginner spring


  for (var _i2 = 0; _i2 < AdvancedClassLinksSpring.length; _i2++) {
    if (message.content === '!Week-' + (_i2 + 1).toString() + '-advanced') {
      message.reply(AdvancedClassLinksSpring[_i2]);
    }
  } //load weekly resources beginner spring


  for (var _i3 = 0; _i3 < EnglishClassLinksSpring.length; _i3++) {
    if (message.content === '!Week-' + (_i3 + 1).toString() + '-english') {
      message.reply(EnglishClassLinksSpring[_i3]);
    }
  }

  if (message.content === '!help') {
    message.reply('Bot Cheatsheet: https://docs.google.com/document/d/1a_bc031_JFLhPw3zdEt6jDCn-tBeL72sXgTNxn1Wcbg/edit?usp=sharing');
  }

  if (message.content === 'k!sf scores') {
    message.reply('Jeffrey is the しりとりおおさま');
  }

  if (message.content === 'Jeffrey is the しりとりおおさま') {
    message.react('😘');
  }
});
client.login(process.env.BOT_TOKEN);