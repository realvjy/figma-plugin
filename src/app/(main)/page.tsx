"use client";

import styled from "styled-components";
import PluginComponent from "@/components/PlguinComponent";
import { pluginData } from "@/lib/plguin-data";
import Link from "next/link";

//TODO: reformat everything and add more animations

export default function Home() {
  return (
    <MainSection>
      <div className="container">
        {/* <Wrapper>
          {pluginData.map((data) => {
            return <PluginComponent pluginData={data} />;
          })}
        </Wrapper> */}
        <div className="screenshot">
          <img src="screenshot.png" />
        </div>
        <Button href={"https://figma.com/@realvjy"} target={"_blank"}>
          Figma @realvjy
        </Button>
      </div>
    </MainSection>
  );
}

const MainSection = styled.section`
  .screenshot {
    margin-top: 40px;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Button = styled(Link)`
  font-size: 1em;
  border-radius: 15px;
  padding: 8px 20px;
  background: var(--primary-fg-color);
  color: var(--primary-bg-color);
  margin-top: 18px;
`;
