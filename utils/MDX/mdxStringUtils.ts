export const newLine = "\n"
export const mdCodeTag = "```"

export function subCmdsToMDX(info: string, item: string, sign: string): string
{
    return `
    <li>
      <div className="info">
        <p>${info}</p>
      </div>
      <div className="inline-copy-code">
        <CopyToClipboard stringToCopy="${item.replaceAll(`"`, `&QUOT;`)}">
            <CopyIcon />
        </CopyToClipboard>
        ${mdCodeTag}
        ${sign} ${item}
        ${mdCodeTag}
      </div>
    </li>
    `.trim()
}