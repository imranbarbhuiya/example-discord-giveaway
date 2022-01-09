import { GiveawaysManager } from "discord-giveaways";
import { Client, Intents, TextChannel } from "discord.js";

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});
const manager = new GiveawaysManager<ExtraData>(client, {});
client.on("interactionCreate", (interaction) => {
  if (!interaction.isCommand() || !interaction.inCachedGuild()) return;
  manager.start(interaction.channel as TextChannel, {
    prize: "test",
    winnerCount: 1,
    extraData: {
      // requiredRole: "",
    },
  });
  manager.edit("test", {
    newExtraData: {
      // requiredRole: "",
    },
  });
});

interface ExtraData {
  requiredRole?: string;
}
