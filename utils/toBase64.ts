import type { command } from "types/command.type";
import imageToBase64 from "image-to-base64";
import axios from "axios";
import { files } from "types/files.type";

export default async function toBase64(commands: command[]): Promise<command[]>
{
    const filesInfo: files = (await axios.get(process.env.API_DOMAIN + "/files?fields=id,type")).data;
    return Promise.all(commands.map(async c => {
      // Convert image to Base64
      if(c.image != null){
        const base64 = await imageToBase64(process.env.API_DOMAIN + "/assets/" + c.image + "?fit=outside&width=150&height=150&quality=80")
        const data = filesInfo.data.find(d => d.id === c.image)
        c.image = `data:${data?.type};base64,${base64}`
      }
      return c
    }))
}