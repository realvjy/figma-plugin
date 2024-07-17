"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styled from "styled-components";
import PluginComponent from "@/components/PlguinComponent";
import { pluginData } from "@/lib/plguin-data";
import { getRandomShape, shapeTypes } from "coolshapes-react";

//TODO: reformat everything and add more animations

export default function Home() {
  const randomCoolshape = getRandomShape({ onlyId: true }) as any;
  return (
    <>
      <Header shape={randomCoolshape} />
      <MainSection>
        <div className="container">
          <MainWrapper>
            {pluginData.map((data) => {
              return <PluginComponent pluginData={data} />;
            })}
          </MainWrapper>
        </div>
      </MainSection>
      <Footer />
    </>
  );
}

const MainSection = styled.section``;

const MainWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 260px;
  padding-top: 120px;
`;
const PluginWrapper = styled.div`
  text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  /* overflow: auto; */
  width: 345px;
`;
