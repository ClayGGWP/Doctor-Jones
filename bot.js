import "dotenv/config";

import {
  Client,
  Events,
  GatewayIntentBits
} from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(
    `English Coach online come ${readyClient.user.tag}`
  );
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.commandName === "ping") {
    await interaction.reply(
      "🏓 Pong! English Coach B2 è online."
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
