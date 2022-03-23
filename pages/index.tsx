import { Col, Row } from "antd";
import { GraphQLClient } from "graphql-request";
import type { GetStaticProps, NextPage } from "next";
import { CardService } from "_/components/cards/CardService";
import { FlexContainer } from "_/components/FlexContainer";
import { Heading } from "_/components/Heading";
import { Timeline } from "_/components/Timeline";
import { Service, TimelineEntry } from "_/types/global";
import { OverlayedParallax } from "_/wrappers/OverlayedParallax";
import { ResponsiveContainer } from "_/wrappers/ResponsiveContainer";

type IndexProps = {
    educationEntries: TimelineEntry[];
    services: Service[];
    workEntries: TimelineEntry[];
};

const Index: NextPage<IndexProps> = ({ educationEntries, services, workEntries }: IndexProps) => {
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
                <ResponsiveContainer>
                    <Row gutter={[40, 40]}>
                        <Col xs={24} lg={12}>
                            <Timeline data={workEntries} icon="fas fa-briefcase" title="Work" />
                        </Col>
                        <Col xs={24} lg={12}>
                            <Timeline data={workEntries} icon="fas fa-graduation-cap" title="Education" />
                        </Col>
                    </Row>
                </ResponsiveContainer>
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
    const { educationEntries, services, workEntries } = await graphcms.request(
        `
        {
            educationEntries(orderBy:startDate_DESC) {
                bulletPoints
                endDate
                id
                startDate
                title
            }
            services {
                description
                icon
                id
                title
            }
            workEntries(orderBy:startDate_DESC) {
                bulletPoints
                endDate
                id
                startDate
                title
            }
        }
		`
    );

    return {
        props: {
            educationEntries,
            services,
            workEntries,
        },
    };
};

export default Index;
