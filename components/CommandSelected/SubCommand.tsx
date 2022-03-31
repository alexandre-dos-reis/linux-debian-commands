import CopyToClipboard from "components/CopyToClipboard/CopyToClipboard";
import CopyIcon from "components/svg/CopyIcon";
import type { subCommand } from "types/subCommand.type";
import MdxComponent from "components/MdxComponentClient/MdxComponent";

type SubCommandProps = {
  subCommand: subCommand;
};

const SubCommand = ({ subCommand }: SubCommandProps) => {
  return (
    <li key={subCommand.id}>
      <div className="info">
        <MdxComponent code={subCommand.info} />
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
