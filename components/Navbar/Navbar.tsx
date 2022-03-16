import { command } from "types/command.type";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const handleClick = (c: command) => {
    router.replace(`/${c.slug}`, "", {
      shallow: true,
    });
    setCommandSelected(c);
  };

  if (commandSelected) {
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
                  <div onClick={() => handleClick(c)}>{c.tab}</div>
                )}
              </li>
            ))}
        </ul>
      </nav>
    );
  } else {
    return <></>
  }
};

export default Navbar;
