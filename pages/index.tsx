import { Col, Row } from "antd";
import { GraphQLClient } from "graphql-request";
import type { GetStaticProps, NextPage } from "next";
import { CardService } from "_/components/cards/CardService";
import { FlexContainer } from "_/components/FlexContainer";
import { Heading } from "_/components/Heading";
import { OverlayedParallax } from "_/wrappers/OverlayedParallax";
import { ResponsiveContainer } from "_/wrappers/ResponsiveContainer";

type IndexProps = {
  services: {
    description: string;
    icon: string;
    id: string;
    title: string;
  }[];
};

const Index: NextPage<IndexProps> = ({ services }: IndexProps) => {
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
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}>
            <Heading
              list={[
                { highlighted: false, text: "ABOUT" },
                { highlighted: true, text: "ME" },
              ]}
            />
          </FlexContainer>
        </OverlayedParallax>
        <ResponsiveContainer></ResponsiveContainer>
      </section>
      <section id="resume">
        <OverlayedParallax backgroundImage="https://source.unsplash.com/bUpwY7EdrlQ/2400x1600">
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}>
            <Heading
              list={[
                { highlighted: true, text: "MY" },
                { highlighted: false, text: "RESUME" },
              ]}
            />
          </FlexContainer>
        </OverlayedParallax>
        <ResponsiveContainer></ResponsiveContainer>
      </section>
      <section id="services">
        <OverlayedParallax backgroundImage="https://source.unsplash.com/aOC7TSLb1o8/2400x1714">
          <FlexContainer centered flexDirection="column" style={{ height: "100%" }}>
            <Heading
              list={[
                { highlighted: true, text: "MY" },
                { highlighted: false, text: "SERVICES" },
              ]}
            />
          </FlexContainer>
        </OverlayedParallax>
        <ResponsiveContainer>
          <Row align="stretch" gutter={[32, 32]}>
            {services?.map((service) => {
              return (
                <Col key={service.id} xs={24} md={12} xl={8}>
                  <CardService {...service} />
                </Col>
              );
            })}
          </Row>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const endpoint = `https://api-eu-central-1.graphcms.com/v2/cl13cmj6pbn7001yw1nlka2qd/master`;
  const graphcms = new GraphQLClient(endpoint);
  const { services } = await graphcms.request(
    `
    {
      services {
        description
        icon
        id
        title
      }
    }
		`
  );

  return {
    props: {
      services,
    },
  };
};

export default Index;
