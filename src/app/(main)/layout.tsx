"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ShootingStars from "@/components/ShootingStars";
import StarBackground from "@/components/StarBackground";
import { ReactNode } from "react";
import styled from "styled-components";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <Main>
      <StarWrapper>
        <StarBackground />
        <ShootingStars />
      </StarWrapper>
      {children}
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  height: 100vh;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -100;
    left: 50%;
    top: -50px;
    transform: translate(-50%, -50%);
    height: 350px;
    width: 800px;
    mix-blend-mode: color-dodge;
    border-radius: 50%;
    filter: blur(62px);
    background: linear-gradient(
      0deg,
      rgba(25, 0, 255, 0.2) 0%,
      rgba(255, 0, 0, 1) 100%
    );
    z-index: -1;
    pointer-events: none;
  }
`;

const StarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
