import {bundleMDX} from 'mdx-bundler'
import type { command } from "types/command.type";

export default async function toMarkdown(commands: command[]): Promise<command[]>
{
    return Promise.all(commands.map(async c => {
      // description to Markdown
      c.description = (
        await bundleMDX({
          source: c.description,
        })
      ).code;

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