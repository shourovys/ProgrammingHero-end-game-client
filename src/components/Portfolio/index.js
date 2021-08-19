import React, { useState } from "react";
import { PaddingContainer, Title } from "../../style/common";
import CssBar from "../Common/CssBar";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioImg from "./PortfolioImg";

const Portfolio = () => {
  const [currentOption, setCurrentOption] = useState({ name: "All" });
  return (
    <div id="portfolio">
    <PaddingContainer>
      <Title>Our Portfolio</Title>
      <CssBar />
      <PortfolioHeader
        currentOption={currentOption}
        setCurrentOption={setCurrentOption}
      />
      <PortfolioImg currentOption={currentOption} />
    </PaddingContainer>
    </div>
  );
};

export default Portfolio;
