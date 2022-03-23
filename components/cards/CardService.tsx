import styled from "styled-components";
import { FlexContainer } from "../FlexContainer";

/**
 * Styles Components
 */
const Icon = styled(FlexContainer)`
  background-color: #f5f5f5;
  border-radius: 50%;
  padding: 44px;
  transition: 0.25s all ease-in-out;
`;
const Container = styled(FlexContainer)`
  background-color: #fff;
  box-shadow: #00000010 0px 0px 20px;
  padding: 48px 32px;
  text-align: center;
  transition: 0.25s all ease-in-out;
  :hover {
    box-shadow: #00000030 0px 0px 20px;
    transform: translateY(-10px);
    > ${Icon} {
      background-color: #9e805e;
    }
  }
`;

/**
 * Component Definition
 */

export type CardServiceProps = {
  description: string;
  icon?: string;
  title: string;
};

export const CardService = ({ description, icon, title }: CardServiceProps) => {
  return (
    <Container centered flexDirection="column" spacing="24px">
      {icon && <Icon />}
      <FlexContainer centered flexDirection="column" spacing="12px">
        <h2>{title}</h2>
        <p>{description}</p>
      </FlexContainer>
    </Container>
  );
};
