import Link from "next/link";
import LinuxLogo from "components/svg/linux-logo";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer>
      <p>
        v 3.0 | créé par{" "}
        <span className="creator-site">
          <Link href="https://alexandre-dosreis.me">
            <a target="_blank">Alexandre Dos Reis</a>
          </Link>
        </span>{" "}
        |{" "}
        <span className="creator-site">
          <Link href="https://github.com/alexandre-dos-reis/linux-debian-commands">
            <a target="_blank">Code Source</a>
          </Link>
        </span>{" "}
        | {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
