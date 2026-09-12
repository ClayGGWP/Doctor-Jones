import "dotenv/config";
import {
  REST,
  Routes,
  SlashCommandBuilder
} from "discord.js";

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Controlla se English Coach è online")
    .toJSON()
];

const rest = new REST({ version: "10" }).setToken(
  process.env.DISCORD_TOKEN
);

try {
  console.log("Registro i comandi Discord...");

  await rest.put(
    Routes.applicationGuildCommands(
      process.env.CLIENT_ID,
      process.env.GUILD_ID
    ),
    {
      body: commands
    }
  );

  console.log("Comandi registrati correttamente.");
} catch (error) {
  console.error(error);
}
