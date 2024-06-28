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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_39_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICA2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgODUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkwLFxuICAgICAgICA5NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxLFxuICAgICAgICA4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYxLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMm02elVaOWFqV1BJZEVlZHF6dytvSHJHTnMwN1pJN1E4RHRVbDQvTExRND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc1NTg5MzU5MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ1RUU0Q0IyRkUzRjczNUVGNzAzRUJFN0I1NUE4MThCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTU4MTk0N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzU1ODkzNTkxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzI5NEFERTc1REVBOTkyQjU1MDk0Nzc4OEM5QzEyNTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTgxOTQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdidGpRU19uVFBtd1M3M2Z1N0pGemdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDcxM2IxYTMtZmMyNi00YTEzLWE5MjQtMjQ0ZGRlZmYwMmUwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OCxcbiAgICAgIDE2NCxcbiAgICAgIDIyNixcbiAgICAgIDE0NCxcbiAgICAgIDIxLFxuICAgICAgMixcbiAgICAgIDIwNSxcbiAgICAgIDEzOCxcbiAgICAgIDIwOSxcbiAgICAgIDE1NCxcbiAgICAgIDg5LFxuICAgICAgNTMsXG4gICAgICA3NCxcbiAgICAgIDIxMixcbiAgICAgIDE1MyxcbiAgICAgIDUzLFxuICAgICAgMTIzLFxuICAgICAgMTM4LFxuICAgICAgMTQzLFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgNCxcbiAgICAgIDE3NixcbiAgICAgIDI5LFxuICAgICAgODgsXG4gICAgICAyMTgsXG4gICAgICAyMDQsXG4gICAgICAxMjMsXG4gICAgICAyNTAsXG4gICAgICA4OSxcbiAgICAgIDg1LFxuICAgICAgMTY4LFxuICAgICAgMTI3LFxuICAgICAgMjA0LFxuICAgICAgMTcsXG4gICAgICA3MixcbiAgICAgIDgyLFxuICAgICAgNjcsXG4gICAgICAxMTQsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODFERVRBRURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxNzU1ODkzNTkxMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwic21tbW1cIixcbiAgICBcImxpZFwiOiBcIjQxODQ1OTY3MDQ4ODc3OjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUDdvM2Y4R0VQRDUrck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJzaHdCbTdRSFlRNGZHNlQ5aVF5dUtBZXQwQzAweHJZQzZ4MzREZjY2UzFVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJqZEtnRkZRcVR4RnR1dlY1RllIdi9EVjVPTEhUQUpCQUl3MVlJeFp2YU9rVHB4ckFxTjdrMVBmYkFaUVg4VTRTdExLU1JnZWt4MGhsVmVmeXZCQ0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhQN0hXMzNLUWRDWmZRbWxMbDJQOUJRVXhzTDVBZHZnMU5lV0o2YWtBL0tlamlkM3FobTYydUVSKzR4ZGtDbnR2enN6RFRmaFFKNVZMWmJ6eUZvdWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzU1ODkzNTkxMDo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTgxOTQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzNSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHM1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI0QnBkeFZmaU9EMG9ZdlpxUEdGNFExTkFVbktuTm1ndlhiUU1NMFVqNGFzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Nzg0ODgxOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTU4MTk0NDgwOVwifSIKfQ=="  // PUT your SESSION_ID 


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
