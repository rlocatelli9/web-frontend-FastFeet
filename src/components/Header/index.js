import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <div>
            <ul>
              <li>
                <Link to="/dashboard">ENCOMENDAS</Link>
              </li>
              <li>
                <Link to="/dashboard">ENTREGADORES</Link>
              </li>
              <li>
                <Link to="/dashboard">DESTINATÁRIOS</Link>
              </li>
              <li>
                <Link to="/dashboard">PROBLEMAS</Link>
              </li>
            </ul>
          </div>
        </nav>

        <aside>
          <strong>Administrador</strong>
          <Link to="/">
            sair
            <FaSignOutAlt />
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
