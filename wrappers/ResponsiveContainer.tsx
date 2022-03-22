import _ from "lodash";
import { HTMLAttributes, PropsWithChildren } from "react";
import { Container, ContainerProps, ResponsivePadding } from "_/components/Container";

/**
 * Global Constants
 */

export const RESPONSIVE_PADDING: ResponsivePadding = {
  horizontal: {
    xs: "32px",
    md: "64px",
    lg: "120px",
    xl: "200px",
  },
  vertical: {
    xs: "96px",
    lg: "128px",
  },
};

/**
 * Component Definition
 */

export type ResponsiveContainerProps = PropsWithChildren<ContainerProps & HTMLAttributes<HTMLDivElement>>;
export const ResponsiveContainer = ({ children, padding, ...other }: ResponsiveContainerProps) => {
  /**
   * Constants
   */
  const responsivePadding = _.isUndefined(padding) ? RESPONSIVE_PADDING : padding;

  return (
    <Container padding={responsivePadding} {...other}>
      {children}
    </Container>
  );
};
