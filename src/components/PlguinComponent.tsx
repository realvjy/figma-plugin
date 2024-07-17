"use client";
import { pluginDatatype } from "@/lib/plguin-data";
import styled from "styled-components";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowIcon } from "@/lib/common";

export default function PluginComponent({
  pluginData,
}: {
  pluginData: pluginDatatype;
}) {
  const downloads = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(pluginData.downloads);

  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    setTransformOrigin(`${x}px ${y}px`);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transformOrigin: transformOrigin,
        transform: isHovered ? "rotate(-3deg)" : "rotate(0deg)",
      }}
    >
      <CardBase>
        <img src="/card.png" className="card" />
      </CardBase>

      <PluginLogo>
        <img src={`/plugin-logos/${pluginData.slug}.png`} />
      </PluginLogo>
      <Content>
        <TextInfo>
          <PluginTitle>{pluginData.name}</PluginTitle>
          <PluginDescription> {pluginData.description} </PluginDescription>
          <ContentMeta>
            <div className={"info downloads"}>
              <ArrowIcon /> {downloads} Usages
            </div>
            <Badge className="free">{pluginData.type}</Badge>
          </ContentMeta>
        </TextInfo>
        <Thumbnail>
          <img src={`/thumbnails/${pluginData.slug}.png`} />
        </Thumbnail>
      </Content>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 344px;
  height: 382px;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-origin: top left; /* Set the anchor point for rotation */
  &:hover {
    transform: rotate(2deg); /* Rotate 45 degrees on hover */
  }
  .card {
    max-width: 344px;
  }
`;

const CardBase = styled.div`
  position: absolute;
  top: 0;
  filter: drop-shadow(11px 10px 26.8px rgba(0, 0, 0, 0.35));
`;
export const Thumbnail = styled.div`
  /* height: 60%; */
  background: red;
  /* width: 100%; */
  img {
    border-radius: 6px;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: fit-content;
  justify-content: space-between;
  padding: 10px;
  transform: translateX(10px) translateY(60px);
  height: 260px;
  width: 260px;
  background: linear-gradient(
      163.75deg,
      rgba(103, 103, 103, 0.2) 11.29%,
      rgba(14, 14, 14, 0) 97.3%
    ),
    #0e0e0e;
  box-shadow: 0.6px 0.6px 0px rgba(255, 255, 255, 0.25),
    inset 0px 4.8px 4.8px rgba(0, 0, 0, 0.25),
    inset 0px 2.4px 1.2px rgba(0, 0, 0, 0.45);
  border-radius: 10px;
`;

export const ContentMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 4px;
  align-items: center;
  .info {
    font-size: 11px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .plugin-type {
    text-transform: uppercase;
    border-radius: 10px;
    padding: 4px 8px;

    &.free {
      background: var(--color-bg-cyan);
      color: var(--color-text-blue);
    }

    &.freemium,
    &.pad {
      background: var(--color-bg-orange);
      color: var(--color-text-orange);
    }
  }
  .downloads {
    color: var(--primary-fg-text);
    @media screen and (max-width: 500px) {
      font-size: 0.9em;
    }
  }
`;

const Badge = styled.div`
  background-color: #2a2829;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 2px 4px;
  &.free {
    color: #9cf67a;
  }
`;
export const PluginLogo = styled.div`
  /* transform: translateY(calc(-50% - 12px)); */
  border-radius: 12px;
  right: 20px;
  top: 7px;
  position: absolute;
  display: flex;
  img {
    height: 26px;
    border-radius: 6px;
    border: 1px solid rgba(220, 220, 220, 0.2);
  }
`;
export const PluginTitle = styled.h3`
  font-weight: 700;
  font-size: 17px;
  text-transform: capitalize;
  font-family: var(--font-inter);
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`;
export const PluginDescription = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
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
