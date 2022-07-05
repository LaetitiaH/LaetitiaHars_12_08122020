import styled from "styled-components";
import variables from "../../utils/variables";
import yoga from "../../assets/yoga-icon.png";
import gym from "../../assets/gym-icon.png";
import bike from "../../assets/bike-icon.png";
import swim from "../../assets/swimming-icon.png";

const iconList = [yoga, swim, bike, gym];

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #020203;
  min-height: calc(100vh - ${variables.height.header}px);
  width: 117px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Icon = styled.img`
  height: 64px;
  width: 64px;
`;

const MenuCopyright = styled.div`
  color: #ffffff;
  font-size: 12px;
  transform: rotate(-90deg);
  width: max-content;
`;

const Menu = () => (
  <>
    <MenuContainer>
      <ListContainer>
        {iconList.map((icon, index) => (
          <Icon key={index} src={icon}></Icon>
        ))}
      </ListContainer>
      <MenuCopyright>Copyright, SportSee 2020</MenuCopyright>
    </MenuContainer>
  </>
);

export default Menu;
