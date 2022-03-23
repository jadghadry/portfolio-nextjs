import { CSSProperties, PropsWithChildren } from "react";
import { Parallax, ParallaxProps } from "_/components/Parallax";
import { ResponsiveContainer } from "./ResponsiveContainer";

export type OverlayedParallaxProps = PropsWithChildren<
    ParallaxProps & {
        overlayColor?: string | undefined;
        styles?: {
            container?: CSSProperties | undefined;
        };
    }
>;

export const OverlayedParallax = ({
    backgroundImage,
    children,
    overlayColor = "#00000080",
    styles,
}: OverlayedParallaxProps) => {
    return (
        <Parallax backgroundImage={backgroundImage} style={styles?.container}>
            <ResponsiveContainer style={{ backgroundColor: overlayColor, color: "#fff", height: "100%" }}>
                {children}
            </ResponsiveContainer>
        </Parallax>
    );
};
