import type { NextPage } from "next";
import { FlexContainer } from "_/components/FlexContainer";
import { OverlayedParallax } from "_/wrappers/OverlayedParallax";
import { ResponsiveContainer } from "_/wrappers/ResponsiveContainer";

const Index: NextPage = () => {
  return (
    <>
      <section id="landing">
        <OverlayedParallax
          backgroundImage="https://source.unsplash.com/tMbQpdguDVQ/2400x1600"
          styles={{
            container: {
              height: "100vh",
            },
          }}
        >
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}></FlexContainer>
        </OverlayedParallax>
      </section>
      <section id="about">
        <OverlayedParallax backgroundImage="https://source.unsplash.com/pVt9j3iWtPM/2400x1600">
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}></FlexContainer>
        </OverlayedParallax>
        <ResponsiveContainer></ResponsiveContainer>
      </section>
      <section id="resume">
        <OverlayedParallax backgroundImage="https://source.unsplash.com/bUpwY7EdrlQ/2400x1600">
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}></FlexContainer>
        </OverlayedParallax>
        <ResponsiveContainer></ResponsiveContainer>
      </section>
      <section id="services">
        <OverlayedParallax backgroundImage="https://source.unsplash.com/aOC7TSLb1o8/2400x1714">
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}></FlexContainer>
        </OverlayedParallax>
        <ResponsiveContainer></ResponsiveContainer>
      </section>
    </>
  );
};

export default Index;
