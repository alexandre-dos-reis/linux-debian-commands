import {bundleMDX} from 'mdx-bundler'
import type { command } from "types/command.type";
import imageToBase64 from "image-to-base64";
import axios from "axios";

export default async function toMarkdown(commands: command[]): Promise<command[]>
{
    return Promise.all(commands.map(async c => {
      // description to Markdown
      c.description = (
        await bundleMDX({
          source: c.description,
        })
      ).code;
      
      // Convert image to Base64
      if(c.image != null){
        const base64 = await imageToBase64(process.env.API_DOMAIN + "/assets/" + c.image + "?fit=outside&width=150&height=150&quality=80")
        const assetInfo = await axios.get(
          (process.env.API_DOMAIN + "/files/"+ c.image +"?fields=id,type") as string
        ).then(a => a.data)
        c.image = `data:${assetInfo.data.type};base64,${base64}`
      }

      // info to Markdown
      c.sub_commands = await Promise.all(c.sub_commands.map(async sc => {
        sc.info = (
            await bundleMDX({
              source: sc.info,
            })
          ).code;
          return sc
      }))
      return c
    }))
}