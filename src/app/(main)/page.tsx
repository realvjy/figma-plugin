'use client'

import styled from "styled-components";
import PluginComponent from "@/components/PlguinComponent";
import { pluginData } from "@/lib/plguin-data";


//TODO: reformat everything and add more animations


export default function Home() {
  return (<MainSection>
      <div className="container">
        <Wrapper>
          {pluginData.map((data) => {
            return <PluginComponent pluginData={data}/>
          })}
        </Wrapper>
      </div>
    </MainSection>);
}


const MainSection = styled.section`
`;

const Wrapper = styled.div`
  text-align: center;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;


