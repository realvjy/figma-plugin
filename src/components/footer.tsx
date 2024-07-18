"use client";
import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <Section>
      <div className="container">
        <Wrapper>
          made by
          <span>
            <Link target={"_blank"} href={"https://vjy.me?figmaplugin"}>
              <img src="realvjy.svg" />
            </Link>
          </span>
          at
          <span>
            <Link
              target={"_blank"}
              href={"https://overlayz.studio?figmaplugin"}
            >
              @overlayz
            </Link>
          </span>{" "}
          <span className={"img"}>
            <Link target="" href={"https://x.com/realvjy"}>
              <img src={"/icons/twitter.svg"} />
            </Link>
          </span>
        </Wrapper>
      </div>
    </Section>
  );
}

const Section = styled.footer`
  padding: 10px 0px;
  margin-top: auto;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  padding: 40px 0;
  font-size: 15px;
  font-weight: 500;
  color: #626262;
  gap: 4px;
  font-family: var(--font-inter);
  align-items: center;
  span {
    padding-inline: 5px;
    font-weight: 600;
    a {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
    &.img {
      padding: 0;
    }
  }
`;
