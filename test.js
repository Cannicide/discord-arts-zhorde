const Vidar = require("djs-vidar");
const client = new (require("discord.js").Client)({
    // @ts-ignore
    intents: Vidar.allIntents()
});

require("dotenv").config();
client.on("ready", () => console.log("Ready to test"))

const profileImage = require("./src/Code/profileImage");
client.on("messageCreate", async m => {
    if (m.author.bot) return;

    m.author = await m.author.fetch();

    const card = await profileImage(m.author.id, {
        borderColor: m.author.hexAccentColor || "#00ff00",
        presenceStatus: m.member.presence?.status ?? 'offline',
        badgesFrame: true,
        moreBackgroundBlur: true,
        backgroundBrightness: 70,
        customDate: new Date(),
        rankData: {
            currentXp: 4562,
            requiredXp: 9302,
            rank: 2100,
            level: 200,
            barColor: m.author.hexAccentColor || "#00ff00",
            levelColor: m.author.hexAccentColor || "#00ff00",
            autoColorRank: true,
            brighterBar: true
        }
    });
    await m.reply(card);
    await m.delete();
});

client.login(process.env.TOKEN);