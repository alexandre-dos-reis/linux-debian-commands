import CopyToClipboard from "components/CopyToClipboard/CopyToClipboard";
import { command } from "types/command.type";
import CopyIcon from "components/svg/Copy";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import SubCommand from "./SubCommand";

type CommandSelectedProps = {
  command: command;
};

const CommandSelected = ({ command }: CommandSelectedProps) => {
  const DescMD = useMemo(
    () => getMDXComponent(command.description),
    [command.description]
  );

  if (command) {
    return (
      <main>
        {command.image != null ? (
          <div className="image">
            <img src={command.image} alt={command.title} />
          </div>
        ) : (
          <h2>{command.title}</h2>
        )}
        <DescMD />
        <ul>
          {command.sub_commands
            .sort((a, b) => a.sort - b.sort)
            .map((sc) => (
              <SubCommand key={sc.id} subCommand={sc} />
            ))}
        </ul>
      </main>
    );
  } else {
    return <></>;
  }
};

export default CommandSelected;
