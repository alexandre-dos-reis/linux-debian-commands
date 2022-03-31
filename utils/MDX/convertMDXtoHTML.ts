import {bundleMDX} from 'mdx-bundler'
import type { command } from "types/command.type";
import getMdxComponents from './getMdxComponents';
import { subCmdsToMDX } from './mdxStringUtils';

export default async function convertMDXtoHTML(commands: command[]): Promise<command[]>
{

  return Promise.all(commands.map(async c => {
    
    c.description = (
      await bundleMDX({
        source: c.description,
      })
    ).code;
    
    const importComps: string = `
    import CopyToClipboard from "./CopyToClipboard"
    import CopyIcon from "./CopyIcon"
    import Code from "./Code"

    `.trim()

    let mdx: string = ''
    c.sub_commands.map(sc => {
      mdx = mdx + subCmdsToMDX(sc.info, sc.item, sc.sign)
    })

    c.sub_cmds_mdx_to_html = `${importComps} 
    
    <ul>
      ${mdx}
    </ul>
    `.trim()

    // info to Markdown
    c.sub_cmds_mdx_to_html = (await bundleMDX({
      source: c.sub_cmds_mdx_to_html,
      files: getMdxComponents('./components/MdxComponentServer/')
    })).code

    return c
  }))
}