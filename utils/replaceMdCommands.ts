import {bundleMDX} from 'mdx-bundler'
import type { command } from "types/command.type";

export async function addDescriptionMD(commands: command[]): Promise<command[]>
{
    return await Promise.all(
        commands.map(async (c) => {
          c.description = (
            await bundleMDX({
              source: c.description,
            })
          ).code as string;
          return c;
        })
      );
}

export async function addSubCmdInfoMD(commands: command[]): Promise<command[]>
{
    return await Promise.all(commands.map(async (c) => {
        c.sub_commands = await Promise.all(c.sub_commands.map(async sc => {
            sc.info = (
                await bundleMDX({
                  source: sc.info,
                })
              ).code as string;
              return sc
        }))
        return c
    })
    
    )
}