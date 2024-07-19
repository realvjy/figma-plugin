export const figmaPluginUrl = "https://www.figma.com/api/feed/plugins";

export const userAgentToFake =
  "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36";

export const HeartIcon = ({
  size = "12px",
  color = "black",
  fill = "currentColor",
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
    color={fill}
  >
    <path
      fill="currentColor"
      d="M6.958 1.727a2.89 2.89 0 013.19.643 2.988 2.988 0 010 4.173l-3.713 3.775a.61.61 0 01-.87 0L1.85 6.544A2.976 2.976 0 011 4.457c0-.78.305-1.531.851-2.087a2.903 2.903 0 012.07-.87c.778 0 1.522.315 2.069.87l.01.01.01-.01c.27-.275.592-.494.948-.643zm1.121.99a1.667 1.667 0 00-1.199.505l-.445.453a.61.61 0 01-.87 0l-.446-.453a1.682 1.682 0 00-1.198-.506c-.448 0-.88.181-1.2.506-.32.326-.501.77-.501 1.235 0 .465.181.91.502 1.235L6 9.024l3.278-3.332a1.775 1.775 0 000-2.47 1.667 1.667 0 00-1.199-.506z"
    ></path>
  </svg>
);

export const ArrowIcon = ({
  size = "12px",
  color = "black",
  fill = "currentColor",
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 12"
    color={fill}
  >
    <path
      fill="currentColor"
      d="M6.6 2.5a.6.6 0 10-1.2 0V8.05L2.925 5.576a.6.6 0 00-.849.848L5.572 9.92a.604.604 0 00.63.145.598.598 0 00.223-.14l3.5-3.5a.6.6 0 00-.849-.85L6.6 8.052V2.5z"
    ></path>
  </svg>
);

export const FigmaIcon = ({
  height = "8px",
  width = "12px",
  color = "black",
  secondaryColor,
  ...props
}: React.SVGProps<SVGSVGElement> & { secondaryColor?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 8 12"
  >
    <path fill="#0ACF83" d="M2 12a2 2 0 002-2V8H2a2 2 0 000 4z"></path>
    <path fill="#A259FF" d="M0 6a2 2 0 012-2h2v4H2a2 2 0 01-2-2z"></path>
    <path fill="#F24E1E" d="M0 2a2 2 0 012-2h2v4H2a2 2 0 01-2-2z"></path>
    <path fill="#FF7262" d="M4 0h2a2 2 0 010 4H4V0z"></path>
    <path fill="#1ABCFE" d="M8 6a2 2 0 11-4.001-.001A2 2 0 018 6z"></path>
  </svg>
);
