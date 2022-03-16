import CopyToClipboard from "components/CopyToClipboard/CopyToClipboard";
import { command } from "types/command.type";
import CopyIcon from "components/svg/Copy";

type CommandSelectedProps = {
  command: command;
  assetsUrl: string;
};

const CommandSelected = ({ command, assetsUrl }: CommandSelectedProps) => {
  if (command) {
    return (
      <main>
        {command.image != null ? (
          <div className="image">
            <img src={assetsUrl + command.image} alt={command.title} />
          </div>
        ) : (
          <h2>{command.title}</h2>
        )}
        <p>{command.description}</p>
        <ul>
          {command.sub_commands
            .sort((a, b) => a.sort - b.sort)
            .map((sc) => (
              <li key={sc.id}>
                <div className="info">{sc.info}</div>
                <div className="inline-copy-code">
                  <CopyToClipboard stringToCopy={sc.item}>
                    <CopyIcon />
                  </CopyToClipboard>
                  <code>
                    <span className="sign">{sc.sign}</span> {sc.item}
                  </code>
                </div>
              </li>
            ))}
        </ul>
      </main>
    );
  } else {
    return <></>;
  }
};

export default CommandSelected;
