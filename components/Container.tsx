import styled from "styled-components";

export type ResponsivePadding = {
    horizontal?: {
        xs?: string | undefined;
        sm?: string | undefined;
        md?: string | undefined;
        lg?: string | undefined;
        xl?: string | undefined;
        xxl?: string | undefined;
    };
    vertical?: {
        xs?: string | undefined;
        sm?: string | undefined;
        md?: string | undefined;
        lg?: string | undefined;
        xl?: string | undefined;
        xxl?: string | undefined;
    };
};

export type ContainerProps = {
    maxWidth?: string | undefined;
    padding?: ResponsivePadding | null | undefined;
};

export const Container = styled.div<ContainerProps>`
    box-sizing: border-box;
    margin: auto;
    max-width: ${({ maxWidth }) => maxWidth || "1920px"};

    @media only all {
        padding-bottom: ${(props) => props.padding?.vertical?.xs};
        padding-left: ${(props) => props.padding?.horizontal?.xs};
        padding-right: ${(props) => props.padding?.horizontal?.xs};
        padding-top: ${(props) => props.padding?.vertical?.xs};
    }
    @media only screen and (min-width: 576px) {
        padding-bottom: ${(props) => props.padding?.vertical?.sm};
        padding-left: ${(props) => props.padding?.horizontal?.sm};
        padding-right: ${(props) => props.padding?.horizontal?.sm};
        padding-top: ${(props) => props.padding?.vertical?.sm};
    }
    @media only screen and (min-width: 768px) {
        padding-bottom: ${(props) => props.padding?.vertical?.md};
        padding-left: ${(props) => props.padding?.horizontal?.md};
        padding-right: ${(props) => props.padding?.horizontal?.md};
        padding-top: ${(props) => props.padding?.vertical?.md};
    }
    @media only screen and (min-width: 992px) {
        padding-bottom: ${(props) => props.padding?.vertical?.lg};
        padding-left: ${(props) => props.padding?.horizontal?.lg};
        padding-right: ${(props) => props.padding?.horizontal?.lg};
        padding-top: ${(props) => props.padding?.vertical?.lg};
    }
    @media only screen and (min-width: 1200px) {
        padding-bottom: ${(props) => props.padding?.vertical?.xl};
        padding-left: ${(props) => props.padding?.horizontal?.xl};
        padding-right: ${(props) => props.padding?.horizontal?.xl};
        padding-top: ${(props) => props.padding?.vertical?.xl};
    }
    @media only screen and (min-width: 1660px) {
        padding-bottom: ${(props) => props.padding?.vertical?.xxl};
        padding-left: ${(props) => props.padding?.horizontal?.xxl};
        padding-right: ${(props) => props.padding?.horizontal?.xxl};
        padding-top: ${(props) => props.padding?.vertical?.xxl};
    }
`;
