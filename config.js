const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "DORA-MD [KILL]>>>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FFVXNZWll1QndHclMzWmNMTGJTdmc2YU02VnJlalB6MXNza2wrMVExTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRuMjdBS0JxS0ZWR0oxK1JJK0ZzYWJxRUxES3QwK1lIVktxTFhSbU1EQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUHZ0SW1sZFZsVDk3dmswZGl4UnZrVnBQeklqV3R5TDhISjlyV0VqS1drPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsUGRYcWxZaG14OEZVeVNYQWhzemNJY2VHbHlBNGFHU05sT2lZK0dRaVMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIR1Y1b0V2bDU2aHpaejV6QlZQbDMybGdUeHZsbFl3L3h0S1AxNXJmMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFocGFLUnh2STJSczlXOWJ3bWNXUmo4R3M5anlsdlMvWG9lRmVPVkZGbXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE05SlJhOEFjY3RDUjlqMmYyTTJjVWREcVdsRytEejVoRVp6TGVjUkVVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1JqZG83VTJvUE4rbkVadkhXNUx6aVhORlBieERlZElSZkY0eHJJL0JFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ing2amNpQ0lubEV4SmxERGFHRkZxQ1YvZmVZakZYdG5Cc3lkdDNWWDk3QWYzdnRoN1YzaWJJZjRVTXJvcnB2T3ZvU1N6MkVpSjBMUGVJVWc2V1ZnSmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImNEVmdyUjVSYmdzbVpPRHZMZWRteUpWTHhKU1RwQmFOeS9xempVaHcrN1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRveW43Y2JOUnVhdmdmZVpxWGs2SEEiLCJwaG9uZUlkIjoiMjhhMzZhNzItYmE1YS00Mzg2LWFhODktYzBhNjU1MjMwYjI4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImwvY0REcmZjTlNNc212Y1FENEtWWlRaVzFzVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiWTFNb05QYVdURTRJYW1WbmZvdmh1dnJ2bVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEhXTEhITkciLCJtZSI6eyJpZCI6Ijk0NzQzNDU0OTI4OjQ0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLUFU5UGNGRU5tdWhNQUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJycE1wd1pzRmxiMEF2ditpVy9CTTUweXVHd3Q1R0YrUmVXaGowdFNOK0FFPSIsImFjY291bnRTaWduYXR1cmUiOiJqY012OWFVd1VYZ0RhelpndmthT3ZBZE96S1ZOZHlVc0ViK1Nkekd4VnBRUUlCMUE4RHZVMVRoSEhRczZRTm0yM1dyK2xUaG5LSE5zTVZNVkM5bGRDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWEM5a1VTOE5PZ1QybXZiYjhoNE80bnZQSnZSd3BpQTBZS0NkTDZGelRlSkIxcFlKM2NxdzJKUllvQ2tEOHVnbHkwZTBxRldrd2QxOWxPZHdYUFgyanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MzQ1NDkyODo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhNlRLY0diQlpXOUFMNy9vbHZ3VE9kTXJoc0xlUmhma1hsb1k5TFVqZmdCIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ0OTAxOTk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU00KyJ9",
  OWNER_NUM: process.env.OWNER_NUM || "94743454928",
  PREFIX: process.env.PREFIX || ".",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/i5fwv5.jpg",
  ALIVE_MSG: process.env.ALIVE_MSG || "Hello , I am alive now!!\n\n*🍁 CREATE BY DORA 🍁*\n\n*watsapp channel link* - https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  MODE: process.env.MODE || "public",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
  //AUTO_RECORDING
};
