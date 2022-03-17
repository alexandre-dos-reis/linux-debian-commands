import CopyToClipboard from "components/CopyToClipboard/CopyToClipboard";
import CopyIcon from "components/svg/Copy";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import type { subCommand } from "types/subCommand.type";

type SubCommandProps = {
  subCommand: subCommand;
};

const SubCommand = ({ subCommand }: SubCommandProps) => {
  const SCinfoMD = useMemo(
    () => getMDXComponent(subCommand.info),
    [subCommand.info]
  );

  return (
    <li key={subCommand.id}>
      <div className="info">
        <SCinfoMD />
      </div>
      <div className="inline-copy-code">
        <CopyToClipboard stringToCopy={subCommand.item}>
          <CopyIcon />
        </CopyToClipboard>
        <code>
          <span className="sign">{subCommand.sign}</span> {subCommand.item}
        </code>
      </div>
    </li>
  );
};

export default SubCommand;
