import React from "react";
import { Container } from "react-bootstrap";

import EscilatorPage from "../../pages/layoutPages/1.escilator/EscilatorPage";

import LeavingBagPage from "../../pages/layoutPages/3.leavingBag/LeavingBagPage";
import EnterNoEntry from "../../pages/layoutPages/4.enteringNoEntry/EnterNoEntry";
import HavingFightPage from "../../pages/layoutPages/5.havingFight/HavingFightPage";
import ThrowGarbagePage from "../../pages/layoutPages/2.throwGarbage/ThrowWaterPage";
import HeroPage from "../../pages/layoutPages/0.1.heroPage/HeroPage";
import HowItWorks from "../../pages/layoutPages/0.2.howItWorks/HowItWorks";
import StartPage from "../../pages/register/StartPage";

const Layout = () => {
  return (
    <>
      <HeroPage />

      <Container>
        <HowItWorks />
        <EscilatorPage />
        <ThrowGarbagePage />
        <LeavingBagPage />
        <EnterNoEntry />
        <HavingFightPage />
      </Container>
    </>
  );
};

export default Layout;
