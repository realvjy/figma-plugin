/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styled from "styled-components";
import { Coolshape, shapeTypes } from "coolshapes-react";
import { FigmaIcon } from "@/lib/common";

export default function Header({
  shape,
}: {
  shape: { shapeType: shapeTypes; index: number };
}) {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          <LogoWrapper href={"/"}>
            {/* <Coolshape className={"logo"} type={"star"} index={9} /> */}
            <img src="figmaplugin.png" />
          </LogoWrapper>
          <HeaderText>Figma plugins I made over the years 🪄</HeaderText>
          <Button href={"https://figma.com/@realvjy"} target={"_blank"}>
            <FigmaIcon height={18} /> @realvjy
          </Button>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.header``;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  margin-top: 40px;

  transition: transform 0.3s ease, transform-origin 0.3s ease;
`;
const LogoWrapper = styled(Link)`
  display: flex;
  img {
    max-width: 72px;
  }
  .logo {
    width: auto;
    max-height: 60px;

    filter: drop-shadow(0.48px 2px 0.24px rgba(0, 0, 0, 0.95))
      drop-shadow(0.48px 1.44px 2.88px rgba(0, 0, 0, 0.95));
  }
`;
const HeaderText = styled.h1`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 24px;
  max-width: 250px;
  font-weight: 700;
  letter-spacing: -0.4px;
  font-family: var(--font-inter);
  background: linear-gradient(
    to right,
    #ffffff,
    #818181
  ); /* Define the gradient colors */
  -webkit-background-clip: text; /* Safari/Chrome */
  -webkit-text-fill-color: transparent; /* Safari/Chrome */
  background-clip: text; /* Standard syntax */
  color: transparent; /* Standard syntax */
`;

const NavLink = styled(Link)`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;

  &.themed {
    padding: 4px 16px;
    background: black;
    border-radius: 20px;
    color: white;
  }
`;

const Button = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  border-radius: 15px;
  padding: 10px 20px;
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(
    90deg,
    rgba(61, 61, 61, 0.5) 0%,
    rgba(45, 45, 45, 0.1) 100%
  );
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25),
    inset 0px 0px 1px rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  color: var(--primary-fg-color);
  font-family: var(--font-inter);
`;
