import type { NextPage } from "next";
import type { command } from "types/command.type";
import { useState, useEffect } from "react";
import CommandSelected from "components/CommandSelected/CommandSelected";
import Navbar from "components/Navbar/Navbar";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import fetchCommands from "utils/fetchCommands";
import mdToHtml from "utils/toMarkdown";
import toBase64 from "utils/toBase64";

export const getStaticProps: GetStaticProps = async () => {
  const commands = await fetchCommands();
  const commandsMD = await mdToHtml(commands);
  const commandsBase64 = await toBase64(commandsMD);

  return {
    props: {
      commands: commandsBase64,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await fetchCommands()).map((c) => {
    return {
      params: {
        slug: c.slug,
      },
    };
  });
  return { paths, fallback: "blocking" };
};

interface HomeProps {
  commands: command[];
}

const Home: NextPage<HomeProps> = ({ commands }) => {
  const router = useRouter();
  const [commandSelected, setCommandSelected] = useState<command>(
    commands.find((c) => c.slug === router.query.slug) as command
  );

  useEffect(() => {
    const commandFound = commands.find((c) => c.slug === router.query.slug);

    if (commandFound) {
      setCommandSelected(commandFound);
    } else {
      setCommandSelected(commands[0]);
      router.replace(`/${commands[0].slug}`, "", {
        shallow: true,
      });
    }
  }, [commands, router]);

  return (
    <div className="app">
      <Header />
      <Navbar
        commandSelected={commandSelected}
        commands={commands}
        setCommandSelected={setCommandSelected}
      />
      <CommandSelected command={commandSelected} />
      <Footer />
    </div>
  );
};

export default Home;
