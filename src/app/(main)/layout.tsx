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
  min-height: 100vh;
`;

const StarWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
`;
