import { AppTitle } from "../AppTitle";
import { Container, Icon, Order } from "./styles";
import orderIcon from "../../assets/icons/Receipt.svg";
import menuIcon from "../../assets/icons/menu.svg";

export function Header() {
  return (
    <Container>
      <Icon
        src={menuIcon}
        width={"3rem"}
        height={"3rem"}
      />

      <AppTitle
        fontSize={"2.64rem"}
        iconSize={"3rem"}
      />

      <Order>
        <Icon
          src={orderIcon}
          width={"3.8rem"}
          height={"3.8rem"}
        />
        <button>
          0
        </button>
      </Order>

    </Container>
  );
}
