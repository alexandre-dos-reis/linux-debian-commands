import Link from "next/link";
import LinuxLogo from "components/svg/linux-logo"

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <h1>Commandes GNU/Linux | Debian | Ubuntu</h1>
      {/* <p>
        Site créé par{" "}
        <span className="creator-site">
          <Link href="https://alexandre-dosreis.me">Alexandre Dos Reis</Link>
        </span>
      </p> */}
    </header>
  );
};

export default Header;
