import styled from "@emotion/styled";
import React from "react";
import Text from "@components/Text";
import SizedBox from "@components/SizedBox";
import { observer } from "mobx-react-lite";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 24px;
`;

const Overview: React.FC = () => {
  return (
    <Root>
      <Text weight={500} type="secondary">
        Overview
      </Text>
      <SizedBox height={8} />
    </Root>
  );
};
export default observer(Overview);
