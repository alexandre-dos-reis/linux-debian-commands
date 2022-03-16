import type { NextPage } from "next";
import axios from "axios";
import type { command } from "types/command.type";
import { useState, useEffect } from "react";
import CommandSelected from "components/CommandSelected/CommandSelected";
import Navbar from "components/Navbar/Navbar";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const commands: command[] = (
    await axios.get(
      (process.env.API_DOMAIN + "/items/commands?fields=*.*") as string
    )
  ).data.data;

  return {
    props: {
      commands: commands.filter((c) => c.sub_commands.length !== 0),
      assetsUrl: process.env.API_DOMAIN + "/assets/",
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const commands: command[] = (
    await axios.get(
      (process.env.API_DOMAIN + "/items/commands?fields=*.*") as string
    )
  ).data.data;

  const paths = commands
    .filter((c) => c.sub_commands.length !== 0)
    .map((c) => {
      return {
        params: {
          cmd: c.slug,
        },
      };
    });
  return { paths, fallback: "blocking" };
};

interface HomeProps {
  commands: command[];
  assetsUrl: string;
}

const Home: NextPage<HomeProps> = ({ commands, assetsUrl }) => {
  const router = useRouter();
  const [commandSelected, setCommandSelected] = useState<command>(
    commands.find((c) => c.slug === router.query.cmd) as command
  );

  useEffect(() => {
    const commandFound = commands.find((c) => c.slug === router.query.cmd);

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
      <CommandSelected command={commandSelected} assetsUrl={assetsUrl} />
      <Footer />
    </div>
  );
};

export default Home;
