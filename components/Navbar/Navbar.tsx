import { command } from "types/command.type";

type NavbarProps = {
  commands: command[];
  commandSelected: command;
  setCommandSelected(command: command): void;
};

const Navbar = ({
  commands,
  setCommandSelected,
  commandSelected,
}: NavbarProps) => {
  return (
    <nav>
      <ul>
        {commands
          .sort((a, b) => a.cmd_order - b.cmd_order)
          .map((c) => (
            <li
              key={c.id}
              className={
                (c.net ? "net-cmd" : "") +
                (commandSelected.id === c.id ? " item-selected" : "")
              }
            >
              {commandSelected.id === c.id ? (
                <div>{c.tab}</div>
              ) : (
                <div onClick={() => setCommandSelected(c)}>{c.tab}</div>
              )}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navbar;
