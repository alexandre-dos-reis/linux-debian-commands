import type { NextPage } from "next";
import axios from "axios";
import type { command } from "types/command.type";
import { useState } from "react";
import CommandSelected from "components/CommandSelected/CommandSelected";
import Navbar from "components/Navbar/Navbar";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

export async function getStaticProps() {
  const commands: command[] = (
    await axios.get(
      (process.env.API_DOMAIN + "/items/commands?fields=*.*") as string
    )
  ).data.data;

  return {
    props: {
      commands,
      assetsUrl: process.env.API_DOMAIN + '/assets/',
    },
  };
}

interface HomeProps {
  commands: command[];
  assetsUrl: string;
}

const Home: NextPage<HomeProps> = ({ commands, assetsUrl }) => {
  const [commandSelected, setCommandSelected] = useState<command>(commands[0]);

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
