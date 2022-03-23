import moment from "moment";
import styled from "styled-components";
import { SocialMedialLink } from "_/types/global";
import { ResponsiveContainer } from "_/wrappers/ResponsiveContainer";
import { FlexContainer } from "./FlexContainer";

/**
 * Styled Components
 */

const Icon = styled(FlexContainer)`
    background-color: #f5f5f5;
    border-radius: 50%;
    color: #000;
    font-size: 20px;
    height: 44px;
    width: 44px;
    transition: 0.25s all ease-in-out;
`;

const Highlight = styled.span`
    color: #9e805e;
    font-weight: 600;
`;

/**
 * Component Definition
 */

export type FooterProps = {
    links: SocialMedialLink[];
};

export const Footer = ({ links }: FooterProps) => {
    return (
        <ResponsiveContainer style={{ backgroundColor: "#000", color: "#fff" }}>
            <FlexContainer centered flexDirection="column" spacing="24px">
                <FlexContainer alignItems="center" flexWrap="wrap" spacing="12px">
                    {links?.map((link) => {
                        const { icon, id, url } = link;
                        return (
                            <a href={url} key={id} rel="noreferrer" target="_blank">
                                <Icon centered>
                                    <i className={icon} />
                                </Icon>
                            </a>
                        );
                    })}
                </FlexContainer>
                <div>
                    {`© ${moment().year()}`} <Highlight>Jade Ghadry</Highlight>. All Rights Reserved.
                </div>
            </FlexContainer>
        </ResponsiveContainer>
    );
};
