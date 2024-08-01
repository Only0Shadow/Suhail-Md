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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_43_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMzLFxuICAgICAgICA0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAwLFxuICAgICAgICAyOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDksXG4gICAgICAgIDcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY1LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDczLFxuICAgICAgICA0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAzMixcbiAgICAgICAgODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxLFxuICAgICAgICA1OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamdMY3pJTGNxWkpjMTlzL3B0TUxvOHBocU9wWGVYVytCZW9nd1FxL0F0dz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYzkzRXYxV1pSV2k2UUdQa1J2cGpvd1wiLFxuICBcInBob25lSWRcIjogXCI4ZWE2OGVkNi00ZDY1LTRjNDYtOTgzZS1hMjJmMzliYmQyODRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgMTA2LFxuICAgICAgMTgwLFxuICAgICAgOTIsXG4gICAgICAxNzUsXG4gICAgICAyMSxcbiAgICAgIDIwOCxcbiAgICAgIDEwMixcbiAgICAgIDM3LFxuICAgICAgMjI1LFxuICAgICAgMjQxLFxuICAgICAgNSxcbiAgICAgIDkxLFxuICAgICAgMTMsXG4gICAgICAyMTUsXG4gICAgICAxMDQsXG4gICAgICAxMzcsXG4gICAgICA3NCxcbiAgICAgIDE0MyxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAyMSxcbiAgICAgIDEyLFxuICAgICAgMTkxLFxuICAgICAgMjMzLFxuICAgICAgNzMsXG4gICAgICA5OCxcbiAgICAgIDkxLFxuICAgICAgMjMsXG4gICAgICAyNixcbiAgICAgIDE0OSxcbiAgICAgIDIxMixcbiAgICAgIDI0MixcbiAgICAgIDIxMCxcbiAgICAgIDEyNixcbiAgICAgIDE5OSxcbiAgICAgIDE0NCxcbiAgICAgIDEzOSxcbiAgICAgIDE1OSxcbiAgICAgIDMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg1QjNBSDlNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDgyMjM5NDU4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTzLZozLZhzLZkzLZvzLZ3zLYnc8y2XCIsXG4gICAgXCJsaWRcIjogXCIyNzgyNTQwNTMyNTczMTQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQYTh3clFHRUx1dXI3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndUVWQwKzgwUk9BcE1XRDYvSDVPd2owYjBXVmYybGRITW8zRWh1SUo5RmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRWlVUzhCTmhFNCtrejNLY3J4SmxKSStyUUdkYlAvaFZxVHBKZGxId0RMaDU5Y1FUa1NsLzcycGdBSHRNdzFjK2dRSmRhdmFONWlVMlFhNFpOZjgrQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMkVQbWhDWmRxYU8zTzJ5T1J4NWxoMG9TYjdHWW9CaEgzQW1WR1VUWFdoNk1aUW5PQ2pUNlgyb0NzcUNXSFJGM1VZTnFEU3RTeEs3NmxRUEVjRDV0Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4MjIzOTQ1ODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUzNzc5MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Shadow",
  packname: process.env.PACK_NAME || "Shadow",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shadow",


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
