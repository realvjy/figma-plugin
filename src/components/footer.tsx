'use client'
import styled from "styled-components"

export default function Footer(){

  return(
    <Section>
      <div className="container">
        <Wrapper>
          ©xgreenapple
        </Wrapper>
      </div>
    </Section>
  )
}

const Section = styled.footer`
  padding: 10px 0px;
  margin-top: auto;
`;
const Wrapper = styled.div``;