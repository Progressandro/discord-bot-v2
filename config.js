const ytdl = require("@distube/ytdl-core");
const agent = process.env.LOGIN_INFO
  ? ytdl.createAgent([
      {
        domain: ".youtube.com",
        expirationDate: 1234567890,
        hostOnly: false,
        httpOnly: true,
        name: "LOGIN_INFO",
        path: "/",
        sameSite: "no_restriction",
        secure: true,
        session: false,
        value: process.env.LOGIN_INFO,
      },
    ])
  : undefined;

module.exports = {
  app: {
    token: process.env.DISCORD_TOKEN || "xxx",
    playing: "by the Community ❤️",
    global: true,
    guild: process.env.GUILD_ID || "xxx",
    extraMessages: false,
    loopMessage: false,
    lang: "en",
    enableEmojis: false,
  },

  emojis: {
    back: "⏪",
    skip: "⏩",
    ResumePause: "⏯️",
    savetrack: "💾",
    volumeUp: "🔊",
    volumeDown: "🔉",
    loop: "🔁",
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: "",
      commands: [],
    },
    Translate_Timeout: 10000,
    maxVol: 100,
    spotifyBridge: true,
    volume: 75,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 30000,
    leaveOnEnd: true,
    leaveOnEndCooldown: 30000,
    discordPlayer: {
      ytdlOptions: {
        requestOptions: {
          headers: {
            cookie: process.env.LOGIN_INFO || "",
          },
        },
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
