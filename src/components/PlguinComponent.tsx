'use client'
import { pluginDatatype } from "@/lib/plguin-data";
import styled from "styled-components";
import Link from "next/link";


export default function PluginComponent({pluginData}: { pluginData: pluginDatatype }) {
  const downloads = Intl.NumberFormat('en-US', {
    notation: "compact", maximumFractionDigits: 1
  }).format(pluginData.downloads);
  return (<Wrapper>
      <Thumbnail>
        <img src={`/thumbnails/${pluginData.slug}.png`}/>
      </Thumbnail>
      <Content>
        <ContentHeader>
          <div className={"plugin-type " + pluginData.type}>
            {pluginData.type}
          </div>
          <div className={"downloads"}>
            {downloads} Usages
          </div>
        </ContentHeader>
        <PluginTitle>{pluginData.name}</PluginTitle>
        <PluginDescription> {pluginData.description} </PluginDescription>
        <PluginButton href={pluginData.url} target={"_blank"}> try now </PluginButton>
        <PluginLogo>
          <img src={`/plugin-logos/${pluginData.slug}.png`}/>
        </PluginLogo>
      </Content>
    </Wrapper>)
}


export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  display: flex;

  flex-direction: column;
  border: 1px solid var(--primary-border-color);
`;
export const Thumbnail = styled.div`
  height: 60%;
  background: red;
  width: 100%;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  border-top: 1px solid var(--primary-border-color);
  padding: 12px 20px 20px 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .plugin-type {
    font-size: 0.75em;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 10px;
    padding: 4px 8px;

    &.free {
      background: var(--color-bg-cyan);
      color: var(--color-text-blue);
    }

    &.freemium, &.pad {
      background: var(--color-bg-orange);
      color: var(--color-text-orange);
    }
  }
;

  .downloads {
    font-size: 1em;
    color: var(--primary-fg-text);
    font-weight: 600;
    @media screen and (max-width: 500px) {
      font-size: 0.9em;
    }
  }
`;
export const PluginLogo = styled.div`
  position: absolute;
  background: red;
  border: 3px solid white;
  transform: translateY(calc(-50% - 12px));
  border-radius: 12px;
  display: flex;
  overflow: hidden;

  img {
    height: 48px;
  }
;

`;
export const PluginTitle = styled.h3`
  font-weight: 700;
  font-size: 20px;
  text-transform: capitalize;
  margin-top: 8px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const PluginDescription = styled.p`
  font-size: 1.12em;
  font-weight: 400;
  color: var(--primary-fg-text);
  margin-top: 8px;
  @media screen and (max-width: 500px) {
    font-size: 1em;
  }
`;
export const PluginButton = styled(Link)`
  font-size: 1em;
  border-radius: 15px;
  padding: 8px 20px;
  background: var(--primary-fg-color);
  color: var(--primary-bg-color);
  margin-top: 18px;
`;


