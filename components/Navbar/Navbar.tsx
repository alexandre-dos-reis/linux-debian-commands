import { command } from "types/command.type";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import SearchIcon from "components/svg/SearchIcon";

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
  const [searchedValue, setSearchValue] = useState("");

  const handleClick = (c: command) => {
    router.replace(`/${c.slug}`, "", {
      shallow: true,
    });
    setCommandSelected(c);
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(String(e.target.value).toLowerCase());
  };

  if (commandSelected) {
    const filteredCommands = commands.filter((c) =>
      c.tab.includes(searchedValue)
    );

    return (
      <nav>
        <div className="search-area">
          <SearchIcon />
          <input
            type="text"
            value={searchedValue}
            onChange={handleSearchInput}
            placeholder="Recherche"
          />
          <button onClick={() => setSearchValue("")}>x</button>
        </div>
        {filteredCommands.length === 0 && (
          <div className="cmd-not-found">Aucune commandes trouvées !</div>
        )}
        <ul>
          {filteredCommands
            .sort((a, b) => a.cmd_order - b.cmd_order)
            .map((c) => (
              <li
                key={c.id}
                tabIndex={0}
                className={
                  (commandSelected.id === c.id ? "item-selected" : "") +
                  (c.net ? " net-cmd" : "")
                }
                onClick={() => handleClick(c)}
              >
                {c.tab}
              </li>
            ))}
        </ul>
      </nav>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
