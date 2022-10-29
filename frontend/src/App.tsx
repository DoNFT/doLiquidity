import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";
import Header from "@components/Header";
import { Column } from "@components/Flex";
import NotFound from "@screens/NotFound";
import { useStores } from "@stores";
import Staking from "@screens/Staking";
import WalletModal from "@components/Wallet/WalletModal";
import { ROUTES } from "./constants";
import MobileNavBar from "./components/MobileNavBar";

const Root = styled(Column)`
  width: 100%;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary50};
  min-height: 100vh;
`;
const MobileSpace = styled.div`
  height: 56px;
  @media (min-width: 880px) {
    display: none;
  }
`;
const App: React.FC = () => {
  const { accountStore } = useStores();
  return (
    <Root>
      <Header />
      <Routes>
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
        {/* Stake */}
        <Route path={ROUTES.LEND} element={<Staking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WalletModal
        onClose={() => accountStore.setWalletModalOpened(false)}
        visible={accountStore.walletModalOpened}
      />
      <MobileSpace />
      <MobileNavBar />
    </Root>
  );
};

export default observer(App);
