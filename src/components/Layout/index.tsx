import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import LogoImg from "src/assets/logo.svg";
import AvatarImg from "src/assets/avatar.png";
import { Icon } from "src/components";
import { ILayout } from "./types";
import { LayoutContainer } from "./styles";
import { StoreType } from "src/store";
import { logout } from "src/store/reducers/auth";
import { toggleMenu } from "src/store/reducers/layout";

export const Layout = ({ children, ...props }: ILayout) => {
  const { showMenu } = useSelector((state: StoreType) => state.layout);
  const { name, lastName } = useSelector((state: StoreType) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <LayoutContainer $showMenu={showMenu} {...props}>
      <nav className="navbar">
        <button
          type="button"
          className="navbar-close"
          onClick={() => dispatch(toggleMenu())}
        >
          <Icon name="Close" />
        </button>

        <div className="navbar-logo">
          <img src={LogoImg} alt="Logo" />
          <h2>BRQ Exchange</h2>
        </div>

        <ul className="navbar-menu">
          <li>
            <button type="button" onClick={() => navigate("/")}>
              <Icon name="Home" /> Home
            </button>
          </li>

          <li>
            <button type="button" onClick={() => navigate("/configuration")}>
              <Icon name="Config" /> Configurações
            </button>
          </li>

          <li>
            <button type="button" onClick={() => dispatch(logout())}>
              <Icon name="Exit" /> Sair
            </button>
          </li>
        </ul>
      </nav>

      <header className="header">
        <div className="header-title">
          <button type="button" onClick={() => dispatch(toggleMenu())}>
            <Icon name="Hamburguer" />
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

      <main className="body">{children}</main>
    </LayoutContainer>
  );
};
