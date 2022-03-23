import moment from "moment";
import { useCallback, useState } from "react";
import { TimelineEntry } from "_/types/global";
import { FlexContainer } from "./FlexContainer";

/**
 * `TimelineBlock` Component Definition
 */
type TimelineBlockProps = {
    data: TimelineEntry;
};

const TimelineBlock = ({ data }: TimelineBlockProps) => {
    /**
     * Constants
     */
    const padding = {
        left: 60,
        top: 40,
    };
    const sizes = {
        bulletpoint: {
            height: 14,
            width: 14,
        },
    };

    /**
     * Helpers
     */
    const formatDate = (x: string): string => {
        return moment(x).format("MMMM YYYY");
    };

    return (
        <FlexContainer
            flexDirection="column"
            spacing="12px"
            style={{ padding: `${padding.top}px 0px 0px ${padding.left}px` }}
        >
            <div style={{ color: "#aaa", fontStyle: "italic" }}>
                {`${formatDate(data.startDate)} – ${data.endDate ? formatDate(data.endDate) : "Present"}`}
            </div>
            <FlexContainer alignItems="center" style={{ position: "relative" }}>
                <div
                    style={{
                        backgroundColor: "#9e805e",
                        borderRadius: "50%",
                        height: sizes.bulletpoint.height,
                        left: `${-(padding.left + sizes.bulletpoint.width / 2)}px`,
                        position: "absolute",
                        width: sizes.bulletpoint.width,
                    }}
                />
                <h3>{data.title}</h3>
            </FlexContainer>
            <FlexContainer flexDirection="column" spacing="4px">
                {data.bulletPoints.map((bulletPoint, index) => {
                    return <div key={index}>{bulletPoint}</div>;
                })}
            </FlexContainer>
        </FlexContainer>
    );
};

/**
 * `Timeline` Component Definition
 */

export type TimelineProps = {
    data: TimelineEntry[];
    icon: string | undefined;
    title: string;
};

export const Timeline = ({ data, icon, title }: TimelineProps) => {
    /**
     * Callbacks
     */
    const containerRef = useCallback((node) => {
        setBulletPoint(node);
    }, []);

    /**
     * States
     */
    const [container, setBulletPoint] = useState<HTMLDivElement>();

    return (
        <FlexContainer flexDirection="column">
            <FlexContainer alignItems="center" spacing="24px">
                <i
                    className={icon}
                    ref={containerRef}
                    style={{
                        backgroundColor: "#9e805e",
                        color: "#fff",
                        fontSize: "24px",
                        padding: "28px",
                    }}
                />
                <h2>{title}</h2>
            </FlexContainer>
            {container && (
                <FlexContainer
                    flexDirection="column"
                    style={{
                        borderLeft: "1px solid #bbb",
                        marginLeft: container.getBoundingClientRect().width / 2,
                    }}
                >
                    {data.map((d) => {
                        return <TimelineBlock key={d.id} data={d} />;
                    })}
                </FlexContainer>
            )}
        </FlexContainer>
    );
};
