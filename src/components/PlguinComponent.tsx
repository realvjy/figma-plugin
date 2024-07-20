"use client";
import { pluginDatatype } from "@/lib/plguin-data";
import styled from "styled-components";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { ArrowIcon } from "@/lib/common";
import TypingEffect from "./TypingEffect";

export default function PluginComponent({
  pluginData,
}: {
  pluginData: pluginDatatype;
}) {
  const downloads = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(pluginData.downloads);

  const likes = Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(pluginData.likes);

  const [transformOrigin, setTransformOrigin] = useState("center center");
  const [isHovered, setIsHovered] = useState(false);
  const delayTimeout = useRef<number | null>(null);

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
  const words = [
    { key: "likes", type: `stat`, value: `${likes}` },
    { key: "usage", type: `stat`, value: `${downloads}` },
  ];

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
      <h4 className="credit">figmaplug.in</h4>
      <div className="cut">
        <img src="/cut.png" className="normal" />
        <img src="/cut-hover.png" className="hov" />
      </div>
      <PluginLogo>
        <img src={`/plugin-logos/${pluginData.slug}.png`} />
      </PluginLogo>
      <Content>
        <TextInfo>
          <PluginTitle>{pluginData.name}</PluginTitle>
          <PluginDescription> {pluginData.description} </PluginDescription>
          <ContentMeta>
            <div className={"info"}>
              <TypingEffect words={words} />
            </div>
            <Badge
              className={`${pluginData.type === "free" ? "free" : "freemium"}`}
            >
              {pluginData.type}
            </Badge>
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

  .card {
    max-width: 344px;
  }

  .cut {
    position: absolute;
    bottom: 0;
    width: 38px;
    height: 24px;
    left: calc(50% + 10px);
    bottom: 17.5px;
    transform: translateX(-50%);
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all ease 300ms;
      &.hov {
        opacity: 0;
        max-width: 94px !important;
      }
    }
  }
  &:hover {
    transform: rotate(2deg); /* Rotate 45 degrees on hover */
    .cut {
      .normal {
        opacity: 0;
      }
      .hov {
        opacity: 1;
        mix-blend-mode: overlay;
      }
    }
  }

  .credit {
    position: absolute;
    transform: rotate(-90deg) translateX(-105%);
    left: -36px;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #4e4e4e;
    text-shadow: 0px 1px 1px #000000;
  }
`;

const CardBase = styled.div`
  position: absolute;
  top: 0;
  filter: drop-shadow(16px 10px 12px rgba(0, 0, 0, 0.5))
    drop-shadow(8px 12px 8px rgba(0, 0, 0, 0.55));
`;
export const Thumbnail = styled.div`
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
  padding: 14px 12px;
  transform: translateX(10px) translateY(60px);
  height: 260px;
  width: 260px;
  background: linear-gradient(
      160deg,
      rgba(103, 103, 103, 0.2) 14%,
      rgba(14, 14, 14, 0.2) 97.3%
    ),
    #0c0c0c;
  box-shadow: 0.6px 0.6px 0px rgba(255, 255, 255, 0.297),
    inset 0px 4.8px 4.8px rgba(0, 0, 0, 0.2),
    inset 2px 3px 1.2px rgba(0, 0, 0, 0.45);
  border-radius: 12px;
`;

export const ContentMeta = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 12px;
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
    color: var(--primary-fg-color);
    @media screen and (max-width: 500px) {
    }
  }
`;

const Badge = styled.div`
  background-color: rgba(95, 95, 95, 0.2);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 2px;
  padding: 2px 6px;
  &.freemium {
    color: #fffa6d;
  }
  &.free {
    color: #68ff32;
  }
`;
export const PluginLogo = styled.div`
  /* transform: translateY(calc(-50% - 12px)); */
  right: 20px;
  position: absolute;
  display: flex;
  top: 7px;
  .logo-fx {
    top: 0;
    background-color: rgba(250, 0, 0, 0.7);
    transform: translateX(30px);
    height: 6px;
    width: 40px;
    filter: blur(12px);
    border-radius: 50%;
  }
  img {
    z-index: 1;
    height: 26px;
    border-radius: 6px;
    filter: drop-shadow(1px 1px 4px rgba(255, 0, 0, 0.4));
    border: 1px solid rgba(220, 220, 220, 0.2);
  }
`;
export const PluginTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.3px;
  margin-top: 4px;
  text-transform: uppercase;
  text-shadow: 2px 2px 0.2px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
  }
`;
export const PluginDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.5px;
  color: var(--primary-fg-text);
  margin-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 500px) {
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
