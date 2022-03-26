import Head from "next/head";
import { useRouter } from "next/router";
type HeaderProps = {};

const Header = ({}: HeaderProps) => {
  const router = useRouter();
  const authorName = "Alexandre Dos Reis";
  return (
    <header>
      <Head>
        <title>
          GNU/Linux | Debian | Ubuntu Commandes | {router.query.slug}
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta lang="fr" />
        <meta httpEquiv="content-language" content="fr" />
        <meta
          name="description"
          content="Site listant les commandes GNU/linux orienté Debian et Ubuntu"
        />
        <meta
          name="keywords"
          content={`gnu, linux, debian, ubuntu, ligne de commandes, cli, code, ${authorName}`}
        />
        <meta name="author" content={authorName} />
        <meta name="geography" content="Caen, France" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_DOMAINE_NAME}${router.asPath}`}
        />
      </Head>

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
