import React from "react";
import { Container } from "react-bootstrap";

import LeavingBagPage from "../../pages/layoutPages/3.leavingBag/LeavingBagPage";
import EnterNoEntry from "../../pages/layoutPages/4.enteringNoEntry/EnterNoEntry";
import HavingFightPage from "../../pages/layoutPages/5.havingFight/HavingFightPage";
import ThrowGarbagePage from "../../pages/layoutPages/2.throwGarbage/ThrowGarbagePage";
import HeroPage from "../../pages/layoutPages/0.1.heroPage/HeroPage";
import HowItWorks from "../../pages/layoutPages/0.2.howItWorks/HowItWorks";

import FallingPage from "../../pages/layoutPages/1.falling/FallingPage";
import UploadModal from "../uploadModal/UploadModal";
import { useDispatch, useSelector } from "react-redux";
const Layout = () => {
  return (
    <>
      <HeroPage />

      <Container>
        <HowItWorks />
        <FallingPage />
        <ThrowGarbagePage />
        <LeavingBagPage />
        <EnterNoEntry />
        <HavingFightPage />
      </Container>
      <UploadModal />
    </>
  );
};

export default Layout;
