import { command } from "types/command.type";
import SubCommand from "./SubCommand";
import MdxComponent from "components/MDX/MdxComponent";

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
