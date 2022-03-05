import Link from "next/link";
import LinuxLogo from "components/svg/linux-logo";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <footer>
      <p>
      v 3.0 - créé par{" "}
        <span className="creator-site">
          <Link href="https://alexandre-dosreis.me"><a target="_blank">
            Alexandre Dos Reis
            </a></Link>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
