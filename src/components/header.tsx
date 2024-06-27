/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import styled from "styled-components"

export default function Header(){

  return(
    <Section>
      <div className="container">
        <Wrapper>
          <LogoWrapper href={"/"}>
            <img src="/next.svg" alt="home"/>
          </LogoWrapper>
          <LinksWrapper>
            <NavLink href="#link1">
              about
            </NavLink>
            <NavLink href="#link1" className="themed">
              contact
            </NavLink>
          </LinksWrapper>
        </Wrapper>
      </div>
    </Section>
  )
}

const Section = styled.header`
  padding: 20px 0;
  border-bottom: 1px solid #e9e7e7;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoWrapper = styled(Link)`
  img{
    height: 20px;
  }
`;
const LinksWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;
const NavLink =  styled(Link)`
  font-size: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  &.themed{
    padding: 4px 16px;
    background: black;
    border-radius: 20px;
    color: white;
  }
`;
