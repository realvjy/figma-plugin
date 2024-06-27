'use client'

import styled from "styled-components";

export default function Home() {
  return (
    <MainSection>
      <div className="container">
        <Wrapper>
          hello world
        </Wrapper>
      </div>
    </MainSection>
  );
}


const MainSection = styled.section`
`;

const Wrapper = styled.div`
  text-align: center;
  padding: 100px 0;
`;


