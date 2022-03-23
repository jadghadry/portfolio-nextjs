import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { FlexContainer } from "./FlexContainer";

export type HeadingProps = {
    list: {
        highlighted: boolean;
        text: string;
    }[];
};

export const Heading = ({ list }: HeadingProps) => {
    // Memoizations
    const memoizedList = useMemo(() => {
        return list.map((title) => {
            return {
                key: uuidv4(),
                ...title,
            };
        });
    }, [list]);

    return (
        <FlexContainer centered spacing="16px">
            {memoizedList.map((title) => {
                const { key, highlighted, text } = title;
                return (
                    <div
                        key={key}
                        style={{
                            backgroundColor: highlighted ? "#9e805e" : undefined,
                            borderBottom: !highlighted ? "1px solid #fff" : undefined,
                            padding: highlighted ? "8px" : "0px",
                        }}
                    >
                        <h1>{text}</h1>
                    </div>
                );
            })}
        </FlexContainer>
    );
};
