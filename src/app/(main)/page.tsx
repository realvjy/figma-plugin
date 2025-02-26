"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styled from "styled-components";
import PluginComponent from "@/components/PlguinComponent";
import { pluginData } from "@/lib/plguin-data";
import { getRandomShape, shapeTypes } from "coolshapes-react";
import Link from "next/link";

//TODO: reformat everything and add more animations

export default function Home() {
  const randomCoolshape = getRandomShape({ onlyId: true }) as any;
  return (
    <MainPage>
      <Header shape={randomCoolshape} />
      <MainSection>
        <div className="container">
          <MainWrapper>
            {pluginData.map((data) => {
              return (
                <Link href={data.figmaurl} key={data.id} target="_blank">
                  <PluginComponent pluginData={data} />
                </Link>
              );
            })}
          </MainWrapper>
        </div>
      </MainSection>
      <Footer />
      <Family>
        <div className="color"></div>
        <div className="wrap">
          <a href="https://coolshap.es?fp">
            <img src="coolshapes.png" className="cs" />
          </a>
          <a href="https://illlustrations.co?fp">
            <img src="illlustrations.png" className="il" />
          </a>
          <a href="https://3dicons.co?fp">
            <img src="3dicons.png" className="td" />
          </a>
        </div>
      </Family>
    </MainPage>
  );
}

const MainSection = styled.section``;

const MainPage = styled.div`
  position: relative;
`;
const Family = styled.div`
  bottom: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: right;
  @media screen and (max-width: 500px) {
    position: relative;
    justify-content: center;
    overflow: hidden;
  }
  .color {
    position: absolute;
    bottom: -50%;
    height: 300px;
    width: 60px;
    border-radius: 50%;
    z-index: -1;
    background: linear-gradient(
      134.41deg,
      rgba(47, 0, 255, 0.2) 0%,
      rgba(255, 0, 0, 1) 100%
    );
    filter: blur(62px);
  }
  .wrap {
    padding: 20px 40px;
    display: flex;
    align-items: end;
    flex-direction: column;
    @media screen and (max-width: 500px) {
      align-items: center;
    }
    gap: 16px;
    a {
      transition: all ease 400ms;
      &:hover {
        transform: rotate(-4deg) scale(1.05);
      }
    }
    .cs {
      height: 54px;
    }
    .il {
      height: 40px;
    }
    .td {
      height: 44px;
    }
  }
`;

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
