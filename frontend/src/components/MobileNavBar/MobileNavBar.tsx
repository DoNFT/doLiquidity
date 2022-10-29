import styled from "@emotion/styled";
import React from "react";
import { ROUTES } from "@src/constants";
import SizedBox from "@components/SizedBox";
import Text from "@components/Text";
import { useLocation, useNavigate } from "react-router-dom";
import isRoutesEquals from "@src/utils/isRoutesEquals";
import NFT from "./NFT";
import Swap from "./Swap";
import Invest from "./Invest";

interface IProps {}

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  @media (min-width: 880px) {
    display: none;
  }
  background: ${({ theme }) => `${theme.colors.white}`};
  border-top: 1px solid ${({ theme }) => `${theme.colors.primary100}`};
  //justify-content: space-evenly;
  padding: 8px;

  & > * {
    cursor: pointer;
  }
`;

// const MenuItem = styled(Anchor)<{ selected?: boolean }>`
const MenuItem = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
  }
`;
const MobileNavBar: React.FC<IProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    {
      name: "Lend",
      link: ROUTES.LEND,
      icon: <Invest active={isRoutesEquals(ROUTES.LEND, location.pathname)} />,
      big: false,
    },
    {
      name: "Borrow",
      link: ROUTES.BORROW,
      icon: <Swap active={isRoutesEquals(ROUTES.BORROW, location.pathname)} />,
      big: true,
    },
    {
      name: "NFT",
      link: "https://puzzlemarket.org/",
      icon: <NFT />,
      big: false,
    },
  ];
  return (
    <Root>
      {menuItems.map(({ icon, name, big, link }, index) => (
        <MenuItem
          key={index}
          onClick={() => (name === "NFT" ? window.open(link) : navigate(link))}
        >
          {icon}
          {name != null && <SizedBox height={6} />}
          {name != null && (
            <Text
              size="small"
              type={
                isRoutesEquals(link, location.pathname)
                  ? "primary"
                  : "secondary"
              }
              fitContent
            >
              {name}
            </Text>
          )}
        </MenuItem>
      ))}
    </Root>
  );
};
export default MobileNavBar;
