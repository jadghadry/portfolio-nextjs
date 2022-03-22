import { PropsWithChildren } from "react";
import { Footer } from "_/components/Footer";

export type LayoutProps = PropsWithChildren<{}>;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
