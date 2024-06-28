const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917558935910";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_17_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMjIyLFxuICAgICAgICA4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM3LFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMixcbiAgICAgICAgMTQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICAzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDc2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NSxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMixcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzMCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkFjaU9mWkhlLzdCSWcxV1MvMkVSQlYweTJNSnpaSlZkempMd01CYzdua3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NTU4OTM1OTEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MEQyRjhGQTQxQkEzMkM5MzZDQUNEMUFCQzYzNjQwRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk1ODQyMzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQXhhdWp5UmdTOEt0WUtXZklWbGFDUVwiLFxuICBcInBob25lSWRcIjogXCJjZjBhZGU2Mi01ZTcwLTQ1ZTctOWUyNC1iYjIyNjljZDMwNGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIwLFxuICAgICAgMTYwLFxuICAgICAgMjMyLFxuICAgICAgMTIsXG4gICAgICAxMzQsXG4gICAgICA2NyxcbiAgICAgIDMwLFxuICAgICAgMjQ3LFxuICAgICAgNSxcbiAgICAgIDEzMixcbiAgICAgIDU5LFxuICAgICAgMTI4LFxuICAgICAgMTQxLFxuICAgICAgMTEzLFxuICAgICAgNTcsXG4gICAgICAxNjgsXG4gICAgICAxODgsXG4gICAgICAyNCxcbiAgICAgIDE2LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTExLFxuICAgICAgMjMzLFxuICAgICAgMTIzLFxuICAgICAgMTY0LFxuICAgICAgMzMsXG4gICAgICAyNDEsXG4gICAgICA0MixcbiAgICAgIDIzLFxuICAgICAgMTAxLFxuICAgICAgMTA4LFxuICAgICAgNzQsXG4gICAgICAyNTUsXG4gICAgICAxMixcbiAgICAgIDI3LFxuICAgICAgMTI5LFxuICAgICAgMjUxLFxuICAgICAgMTgsXG4gICAgICAxNTMsXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkhUM1kyNUtcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzU1ODkzNTkxMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic21tbW1cIixcbiAgICBcImxpZFwiOiBcIjQxODQ1OTY3MDQ4ODc3OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC9vM2Y4R0VPQ0wrN01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzaHdCbTdRSFlRNGZHNlQ5aVF5dUtBZXQwQzAweHJZQzZ4MzREZjY2UzFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhPbXlrLy9ZNEljZlR5Z1FFZnBKWi80M2dCYkNHY0g3NFVseVpzNEVueGFVUHZ4SVh1OTBGRjBFY3hxU2VCaHdyejk0WmNmSUVnYjYxVjVqcjVFSkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFGbzV5VUx2ZHZYQXRBVVhLMlpHZnpjZEt0MDdBeG5Ed21WdmJwMG9TQjl5TTd5Wlp0elo2UVl2NDF0WW94d0VmdHgzMDkyYXJVaVYyRmtqeXgxSWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzU1ODkzNTkxMDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTg0MjI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzNSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHM1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0QnBkeFZmaU9EMG9ZdlpxUEdGNFExTkFVbktuTm1ndlhiUU1NMFVqNGFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Nzg0ODgxOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
