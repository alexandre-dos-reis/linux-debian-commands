import type { command } from "types/command.type";
import axios from "axios";

export default async function fetchCommands(): Promise<command[]>
{
    return (await axios.get(
        (process.env.API_DOMAIN + "/items/commands?fields=*.*") as string
      )).data.data.filter((c: command) => c.sub_commands.length !== 0)
}