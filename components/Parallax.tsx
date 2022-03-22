import styled from "styled-components";

export type ParallaxProps = {
  backgroundImage?: string | undefined;
};

export const Parallax = styled.div<ParallaxProps>`
  ${({ backgroundImage }) => backgroundImage && `background-image: url(${backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media only all {
    background-attachment: scroll;
  }

  @media only screen and (min-width: 768px) {
    background-attachment: fixed;
  }
`;
