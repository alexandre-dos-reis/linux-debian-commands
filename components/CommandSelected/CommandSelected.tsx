import CopyToClipboard from "components/CopyToClipboard/CopyToClipboard";
import { command } from "types/command.type";
import CopyIcon from "components/svg/Copy";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import SubCommand from "./SubCommand";

type CommandSelectedProps = {
  command: command;
  assetsUrl: string;
};

const CommandSelected = ({ command, assetsUrl }: CommandSelectedProps) => {
  const DescMD = useMemo(
    () => getMDXComponent(command.description),
    [command.description]
  );

  // https://docs.directus.io/reference/files/#requesting-a-thumbnail
  const directusImgConfig = "?fit=outside&width=150&height=150&quality=80"

  if (command) {
    return (
      <main>
        {command.image != null ? (
          <div className="image">
            <img src={assetsUrl + command.image + directusImgConfig} alt={command.title} />
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
