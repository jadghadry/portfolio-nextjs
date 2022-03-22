import styled from "styled-components";

export type FlexContainerProps = {
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline" | undefined;
  alignContent?:
    | "normal"
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | undefined;
  centered?: boolean | undefined;
  flexDirection?: "column" | "row" | undefined;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined;
  spacing?: string | undefined;
};

export const FlexContainer = styled.div<FlexContainerProps>`
  align-items: ${(props) => (props.centered ? "center" : props.alignItems)};
  display: flex;
  justify-content: ${(props) => (props.centered ? "center" : props.justifyContent)};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};

  > * {
    &:not(:last-child) {
      ${({ flexDirection, spacing }) => flexDirection === "row" && `margin-right: ${spacing};`};
      ${({ flexDirection, spacing }) => flexDirection === "column" && `margin-bottom: ${spacing};`};
    }
  }
`;

FlexContainer.defaultProps = {
  alignItems: "flex-start",
  alignContent: "normal",
  centered: false,
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  spacing: undefined,
};
