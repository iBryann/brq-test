import { useSelector } from "react-redux";

import MenuImg from "src/assets/menu-hamburguer.svg";
import AvatarImg from "src/assets/avatar.png";
import { StoreType } from "src/store";
import { ConfigurationContainer } from "./styles";

export const Configuration = () => {
  const { name, lastName } = useSelector((state: StoreType) => state.user);

  return (
    <ConfigurationContainer>
      <header className="header">
        <div className="header-title">
          <button type="button">
            <img src={MenuImg} alt="Menu" />
          </button>

          <h2>Configurações</h2>
        </div>

        <div className="header-user">
          <img src={AvatarImg} alt="Avatar" />
          <span>
            {name} {lastName}
          </span>
        </div>
      </header>

      <main className="body">Body</main>
    </ConfigurationContainer>
  );
};
