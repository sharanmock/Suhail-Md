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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_52_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgxLFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MixcbiAgICAgICAgMjUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NixcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMixcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI5Q0gyMVpmQ29aNlhJcEIrb1BMRGt2VWNGeFU0WHcydWVZdld6KzA3Nm1jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzU1ODkzNTkxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjM1RUU4NDE5ODhGNTk4RjREREYxRUJBQ0Y2QTk2OThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NTc5MTUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3NTU4OTM1OTEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzOUI0NDM2QzcyOTkyMTIwNDVEMTg1RkQzNDM0MEY2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk1NzkxNTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZEtLVWRjNTZRUUdfVlNLTGhETTluUVwiLFxuICBcInBob25lSWRcIjogXCJjYTU2YmNmZC02N2RjLTQzYjItYWJlZi0wMzViNzUwNzY2MDFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIxLFxuICAgICAgMTU0LFxuICAgICAgMSxcbiAgICAgIDE4MCxcbiAgICAgIDQ0LFxuICAgICAgNjEsXG4gICAgICAzMyxcbiAgICAgIDI2LFxuICAgICAgMjAzLFxuICAgICAgMjIsXG4gICAgICAxODgsXG4gICAgICAyNTEsXG4gICAgICAyMzQsXG4gICAgICAxOCxcbiAgICAgIDI2LFxuICAgICAgMTc4LFxuICAgICAgMjM1LFxuICAgICAgMTEwLFxuICAgICAgMTg4LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDE0MSxcbiAgICAgIDExMSxcbiAgICAgIDcyLFxuICAgICAgMzcsXG4gICAgICA0MyxcbiAgICAgIDk1LFxuICAgICAgMTk4LFxuICAgICAgMjUzLFxuICAgICAgOTYsXG4gICAgICAxNTYsXG4gICAgICAxNTUsXG4gICAgICAxNzksXG4gICAgICAxNjMsXG4gICAgICAxMjUsXG4gICAgICAxNDIsXG4gICAgICAxNTUsXG4gICAgICAxNTEsXG4gICAgICA5NyxcbiAgICAgIDUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJUVkpFNzg0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc1NTg5MzU5MTA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNtbW1tXCIsXG4gICAgXCJsaWRcIjogXCI0MTg0NTk2NzA0ODg3Nzo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6bzNmOEdFSXJrK3JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic2h3Qm03UUhZUTRmRzZUOWlReXVLQWV0MEMwMHhyWUM2eDM0RGY2NlMxVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxaHIvdzRwSEpKYU5MaHVNSnRuNzVmT0QxKzk0YTN5OWZZQmQ0ZXIzRkJzbHVhKzNNSytubkdxSUNvRmxGUENWT2pha1pmVURRR1RBdnpzazk0dFFBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtTTc1UmdLcUlMVUJwN1VBQzRMWDF0WkR5NmllU1hGYXhXcVpmWWZDZHJaS1BzcFpJRDhwTFBqcm9xUytyc0JQU0JZY2ZEcllpNnBmTDV4ZkdNZU5DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTc1NTg5MzU5MTA6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTU3OTE0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURKS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBREpLLmpzb24iOiAie1wia2V5RGF0YVwiOlwidWY2WVAzdzZFa2xYVFpraGFBSCs3dktwUmdzTDBvN0lHZlZrYTFVcng4MD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODc4NDg4MTg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk1NzkxNTEwMDBcIn0iCn0="  // PUT your SESSION_ID 


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
