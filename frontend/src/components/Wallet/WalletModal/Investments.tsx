import React from "react";
import { observer } from "mobx-react-lite";
import styled from "@emotion/styled";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 400px;
`;

const Investments: React.FC = () => {
  return <Root>Investments</Root>;
};
export default observer(Investments);
