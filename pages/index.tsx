import Button from "@/Components/Button/Button";
import Titles from "@/Components/Titles/Titles";
import React from "react";

const Home = (): JSX.Element => {
  return (
    <>
      <Titles tag='h1'>Suchi Bonsai!</Titles>
      <Button appearence='primary'>Press Primary</Button>
      <Button appearence='ghost'>Press Ghost</Button>
    </>
  );
};

export default Home;
