const Stefanie = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')


Stefanie.addCommand({pattern: 'help', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '.freedeta', description: "𝐆𝐞𝐭 𝐄𝐡𝐢 𝐥𝐢𝐬𝐭", rowId:"tenu1"},
        {title: '.alist', description: "𝐆𝐞𝐭 𝐀𝐧𝐢𝐦𝐞 𝐥𝐢𝐬𝐭", rowId:"tenu2"},
        {title: '.song', description: "𝐆𝐞𝐭 𝐒𝐨𝐧𝐠𝐬 𝐘𝐨𝐮 𝐖𝐫𝐨𝐭𝐞", rowId:"tenu3"},
        {title: '.video', description: "𝐃𝐢𝐫𝐞𝐜𝐭 𝐕𝐢𝐝𝐞𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐝𝐞𝐫", rowId:"tenu4"},
        {title: '.yt', description: "𝐈𝐭 𝐒𝐞𝐚𝐫𝐜𝐡𝐬 𝐨𝐧 𝐘𝐨𝐮𝐓𝐮𝐛𝐞", rowId:"tenu5"},
        {title: '.wiki', description: "𝐒𝐞𝐚𝐫𝐬𝐡𝐞𝐬 𝐐𝐮𝐞𝐫𝐲 𝐨𝐧 𝐖𝐢𝐤𝐢𝐩𝐞𝐝𝐢𝐚", rowId:"tenu6"},
        {title: '.img', description: "𝐒𝐞𝐚𝐫𝐬𝐡𝐞𝐬 𝐟𝐨𝐫 𝐫𝐞𝐥𝐚𝐭𝐞𝐝 𝐩𝐢𝐜𝐬 𝐨𝐧 𝐆𝐨𝐨𝐠𝐥𝐞", rowId:"tenu7"},
        {title: '.lyric', description: "𝐅𝐢𝐧𝐝 𝐭𝐡𝐞 𝐋𝐲𝐫𝐢𝐜𝐬 𝐨𝐟 𝐭𝐡𝐞 𝐬𝐨𝐧𝐠", rowId:"tenu8"},
        {title: '.github', description: "𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐬 𝐠𝐢𝐭𝐡𝐮𝐛 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐠𝐢𝐯𝐞𝐧 𝐮𝐬𝐞𝐫𝐧𝐚𝐦𝐞", rowId:"tenu9"},
        {title: '.audio', description: "𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐀𝐮𝐝𝐢𝐨 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐕2", rowId:"tenu10"},
        {title: '.fb', description: "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐯𝐢𝐝𝐞𝐨𝐬", rowId:"tenu11"},
        {title: '.photo', description: "𝐂𝐡𝐚𝐧𝐠𝐞 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐭𝐨 𝐏𝐡𝐨𝐭𝐨", rowId:"tenu12"},
        {title: '.sticker', description: "𝐂𝐡𝐚𝐧𝐠𝐞 𝐏𝐡𝐨𝐭𝐨 𝐭𝐨 𝐒𝐭𝐢𝐜𝐤𝐞𝐫", rowId:"tenu13"},
        {title: '.meme', description: "𝐏𝐡𝐨𝐭𝐨 𝐜𝐡𝐚𝐧𝐠𝐞 𝐭𝐨 𝐦𝐞𝐦𝐞𝐬 𝐫𝐞𝐩𝐥𝐢𝐞𝐝 𝐭𝐨", rowId:"tenu14"},
        {title: '.mediafire', description: "𝐌𝐞𝐝𝐢𝐚𝐟𝐢𝐫𝐞 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫 𝐥𝐢𝐬𝐭", rowId:"tenu15"},
        {title: '.movie', description: "𝐒𝐡𝐨𝐰 𝐦𝐨𝐯𝐢𝐞 𝐝𝐞𝐭𝐞𝐢𝐥𝐬", rowId:"tenu16"},
        {title: '.brdmore', description: "𝐀𝐝𝐝 𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞 𝐛𝐞𝐟𝐨𝐫𝐞 𝐲𝐨𝐮𝐫 𝐭𝐞𝐱𝐭", rowId:"tenu17"},
        {title: '.remore', description: "𝐀𝐝𝐝 𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞 𝐚𝐟𝐭𝐞𝐫 𝐲𝐨𝐮𝐫 𝐭𝐞𝐱𝐭", rowId:"tenu18"},
        {title: '.ocr', description: "𝐑𝐞𝐚𝐝𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐨𝐧 𝐭𝐡𝐞 𝐩𝐡𝐨𝐭𝐨 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐫𝐞𝐩𝐥𝐢𝐞𝐝", rowId:"tenu19"},
        {title: '.random', description: "𝐑𝐚𝐧𝐝𝐨𝐦 𝐰𝐨𝐫𝐝 𝐢𝐦𝐚𝐠𝐞", rowId:"tenu20"},
        {title: '.removebg', description: "𝐑𝐞𝐦𝐨𝐯𝐞𝐬 𝐭𝐡𝐞 𝐛𝐚𝐜𝐤𝐠𝐫𝐨𝐮𝐧𝐝 𝐨𝐟 𝐭𝐡𝐞 𝐩𝐡𝐨𝐭𝐨", rowId:"tenu21"},
        {title: '.report', description: "𝐒𝐞𝐧𝐝 𝐫𝐞𝐩𝐨𝐫𝐭𝐬 𝐭𝐨 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐦𝐢𝐧𝐬", rowId:"tenu22"},
        {title: '.scan', description: "𝐂𝐡𝐞𝐜𝐤𝐬 𝐭𝐡𝐞 𝐞𝐧𝐭𝐞𝐫𝐞𝐝 𝐧𝐮𝐦𝐛𝐞𝐫 𝐢𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐞𝐫𝐝 𝐨𝐧 𝐖𝐡𝐚𝐫𝐬𝐀𝐩𝐩", rowId:"tenu23"},
        {title: '.trt', description: "𝐈𝐭 𝐭𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞𝐬 𝐰𝐢𝐭𝐡 𝐆𝐨𝐨𝐥𝐠𝐞 𝐓𝐫𝐚𝐧𝐬𝐥𝐚𝐭𝐞.𝐘𝐨𝐮 𝐦𝐮𝐬𝐭 𝐫𝐞𝐩𝐥𝐲 𝐚𝐧𝐲 𝐦𝐞𝐬𝐬𝐚𝐠𝐞.", rowId:"tenu24"},
        {title: '.detectlang', description: "𝐆𝐮𝐞𝐬𝐬 𝐭𝐡𝐞 𝐥𝐚𝐧𝐠𝐮𝐚𝐠𝐞 𝐨𝐠 𝐭𝐡𝐞 𝐫𝐞𝐩𝐥𝐞𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞", rowId:"tenu25"},
        {title: '.tts', description: "𝐈𝐭 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐞𝐱𝐭 𝐭𝐨 𝐬𝐨𝐮𝐧𝐝", rowId:"tenu26"},
        {title: '.covid', description: "𝐒𝐡𝐨𝐰 𝐭𝐡𝐞 𝐝𝐚𝐢𝐥𝐲 𝐚𝐧𝐝 𝐨𝐯𝐞𝐫𝐚𝐥𝐥 𝐜𝐨𝐯𝐢𝐝 𝐭𝐚𝐛𝐥𝐞 𝐨𝐟 𝐦𝐨𝐫𝐞 𝐭𝐡𝐚𝐧 15 𝐜𝐨𝐮𝐧𝐭𝐫𝐢𝐞𝐬", rowId:"tenu27"},
        {title: '.ss', description: "𝐓𝐚𝐤𝐞𝐬 𝐚 𝐬𝐜𝐫𝐞𝐞𝐧𝐬𝐡𝐨𝐭 𝐟𝐫𝐨𝐦 𝐭𝐡𝐞 𝐩𝐚𝐠𝐞 𝐢𝐧 𝐭𝐡𝐞 𝐠𝐢𝐯𝐞𝐧 𝐥𝐢𝐧𝐤", rowId:"tenu28"},
        {title: '.animesay', description: "𝐈𝐭 𝐰𝐫𝐢𝐭𝐞𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐢𝐧𝐬𝐢𝐝𝐞 𝐭𝐡𝐞 𝐛𝐚𝐧𝐧𝐞𝐫 𝐭𝐡𝐞 𝐚𝐧𝐢𝐦𝐞 𝐠𝐢𝐫𝐥 𝐢𝐬 𝐡𝐨𝐥𝐝𝐢𝐧𝐠", rowId:"tenu13"},
        {title: 'changesay', description: "𝐓𝐮𝐫𝐧𝐬 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐢𝐧𝐭𝐨 𝐭𝐡𝐞 𝐜𝐡𝐚𝐧𝐠𝐞 𝐦𝐲 𝐦𝐢𝐧𝐝 𝐩𝐨𝐬𝐭𝐞𝐫", rowId:"tenu29"},
        {title: '.trumpsay', description: "𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐭𝐨 𝐓𝐫𝐮𝐦𝐩'𝐬 𝐭𝐰𝐞𝐞𝐭 ", rowId:"tenu30"},
        {title: '.unvoice', description: "𝐂𝐨𝐧𝐯𝐞𝐫𝐬 𝐚𝐮𝐝𝐢𝐨 𝐭𝐨 𝐬𝐨𝐮𝐧𝐝 𝐫𝐞𝐜𝐨𝐫𝐝𝐢𝐧𝐠", rowId:"tenu31"},
        {title: '.spdf', description: "𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐰𝐞𝐛𝐬𝐢𝐭𝐞 𝐥𝐢𝐧𝐤 𝐭𝐨 𝐩𝐝𝐟", rowId:"tenu32"},
        {title: '.download', description: "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐬𝐭𝐚𝐭𝐮𝐬 𝐭𝐨 𝐲𝐨𝐮𝐫 𝐥𝐨𝐠", rowId:"tenu33"},
        {title: '.ttp', description: "𝐂𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐭𝐞𝐱𝐭 𝐭𝐨 𝐩𝐥𝐚𝐢𝐧 𝐩𝐚𝐢𝐧𝐭𝐢𝐧𝐟", rowId:"tenu34"},
        {title: '.attp', description: "𝐀𝐝𝐝𝐬 𝐫𝐚𝐢𝐧𝐛𝐨𝐰 𝐞𝐟𝐟𝐞𝐜𝐭 𝐭𝐨 𝐭𝐡𝐞 𝐭𝐞𝐱𝐭 𝐚𝐬 𝐚 𝐬𝐭𝐢𝐜𝐤𝐞𝐫", rowId:"tenu35"},
        {title: '.tiktok', description: "𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐭𝐢𝐤𝐭𝐨𝐤 𝐯𝐢𝐝𝐞𝐨𝐬", rowId:"tenu36"},
        {title: '.tagadmin', description: "𝐓𝐚𝐠 𝐠𝐫𝐨𝐮𝐩 𝐚𝐝𝐝𝐦𝐢𝐧𝐬", rowId:"tenu37"},
        {title: '.voicy', description: "𝐈𝐭 𝐜𝐨𝐧𝐯𝐞𝐫𝐭𝐬 𝐚𝐮𝐝𝐢𝐨 𝐭𝐨 𝐭𝐞𝐱𝐭.", rowId:"tenu38"},
        {title: '.wallpaper', description: "𝐈𝐭 𝐬𝐞𝐧𝐝𝐬 𝐡𝐢𝐠𝐡 𝐫𝐞𝐬𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫𝐬", rowId:"tenu39"},
        {title: '.wame', description: "𝐆𝐞𝐭 𝐚 𝐥𝐢𝐧𝐤 𝐭𝐨 𝐭𝐡𝐞 𝐮𝐬𝐞𝐫 𝐜𝐡𝐚𝐭", rowId:"tenu40"},
        {title: '.weather', description: "𝐒𝐡𝐨𝐰 𝐭𝐡𝐞 𝐰𝐞𝐚𝐭𝐡𝐞𝐫", rowId:"tenu41"},
        {title: '.speedtest', description: "𝐌𝐞𝐚𝐬𝐮𝐫𝐞𝐬 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐚𝐧𝐝 𝐔𝐩𝐥𝐨𝐚𝐝 𝐬𝐩𝐞𝐞𝐝", rowId:"tenu42"},
        {title: '.ping', description: "𝐌𝐞𝐚𝐬𝐮𝐫𝐞𝐬 𝐲𝐨𝐮𝐫 𝐩𝐢𝐧𝐠", rowId:"tenu43"},
        {title: '.short', description: "𝐒𝐡𝐨𝐫𝐭𝐞𝐧 𝐭𝐡𝐞 𝐥𝐨𝐠 𝐥𝐢𝐧𝐤", rowId:"tenu44"},
        {title: '.calc', description: "𝐏𝐞𝐫𝐟𝐨𝐫𝐦𝐬 𝐬𝐢𝐦𝐩𝐥𝐞 𝐦𝐚𝐭𝐡 𝐨𝐩𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬", rowId:"tenu45"},
        {title: '.info', description: "𝐃𝐢𝐬𝐩𝐥𝐚𝐲𝐬 𝐦𝐞𝐭𝐚𝐝𝐚𝐭𝐚 𝐝𝐚𝐭𝐚 𝐨𝐟 𝐠𝐫𝐨𝐮𝐩 𝐨𝐫 𝐩𝐞𝐫𝐬𝐨𝐧", rowId:"tenu46"},
        {title: '.Admin', description: "𝐒𝐞𝐭 𝐨𝐟 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐟𝐨𝐫 𝐛𝐨𝐭 𝐮𝐬𝐞𝐫 𝐨𝐫 𝐬𝐮𝐝𝐨", rowId:"tenu47"}
       ]
       
       const sections = [{title: "■ 𝐒𝐓𝐄𝐅𝐀𝐍𝐈𝐄 𝐁𝐎𝐓 ■️", rows: rows}]
       
       const button = {
        buttonText: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
        description: '\n\n\n\n\n▣ 👸𝐒𝐓𝐄𝐅𝐀𝐍𝐈𝐄 𝐁𝐎𝐓👸▣\n\n\n8.2 Beta Public release\n\n◽ ᴠᴇʀꜱɪᴏɴ-𝐕 8.1\n◽ ᴅᴇᴠᴇʟᴏᴘᴇʀ-𝐕𝐢𝐫𝐮𝐬 𝐅𝐮𝐜𝐤𝐞𝐫\n◽ ʙʀᴀɴᴄʜ-𝐌𝐚𝐬𝐭𝐞𝐫\n◽ ʟᴀɴɢᴜᴀɢᴇ-𝐄𝐧𝐠𝐥𝐢𝐬𝐡\n◽ ᴡᴏʀᴋ ᴛʏᴘᴇ-𝐏𝐮𝐛𝐥𝐢𝐜\n◽ ᴀɴᴛɪʟɪɴᴋ-𝐨𝐧\n◽ ᴀᴜᴛᴏ ʙɪᴏ-𝐨𝐧\n◽ ʙᴀᴅ ᴋɪᴄᴋ-𝐨𝐧\n\n◽ ᴏᴡɴᴇʀ- '+Config.OWNER_NAME+'\n◽ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ-wa.me/'+Config.OWNER_NUMBER+'\n\n\n\nᴄʟɪᴄᴋ *▢ᴄʟɪᴄᴋ ᴍᴇ▢* ʙᴜᴛᴛᴏɴ ᴛᴏ ɢᴇᴛ\nᴄᴏᴍᴍᴀɴᴅꜱ\n\n\n',
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
