import { command } from "types/command.type";
import SubCommand from "./SubCommand";
import MdxComponent from "components/MdxComponentClient/MdxComponent";

type CommandSelectedProps = {
  command: command;
};

const CommandSelected = ({ command }: CommandSelectedProps) => {
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
        <MdxComponent code={command.description} />
        <MdxComponent code={command.sub_cmds_mdx_to_html} />
      </main>
    );
  } else {
    return <></>;
  }
};

export default CommandSelected;
