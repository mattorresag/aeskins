import { NextPage } from "next/types";
import { Layout } from "../Layout/Layout";
import { Flex } from "../components/Flex/Flex";
import { WordsCarousel } from "../features/Home/WordsCarousel/WordsCarousel";
import { Banner } from "../features/Home/Banner/Banner";
import { HomeFirstSection } from "../features/Home/HomeFirstSection/HomeFirstSection";
import { HomeSecondSection } from "../features/Home/HomeSecondSection/HomeSecondSection";
import { HomeThirdSection } from "../features/Home/HomeThirdSection/HomeThirdSection";
import { QuemUtiliza } from "../features/QuemUtiliza/QuemUtiliza";
import { FacaParte } from "../features/Home/FacaParte/FacaParte";
import { FaleConosco } from "../features/Home/FaleConosco/FaleConosco";

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex direction="col" align="center">
        <Banner />
        <WordsCarousel />
        <HomeFirstSection />
        <HomeSecondSection />
        <HomeThirdSection />
        {/* <QuemUtiliza /> */}
        <FacaParte />
        <FaleConosco />
      </Flex>
    </Layout>
  );
};

export default Home;
