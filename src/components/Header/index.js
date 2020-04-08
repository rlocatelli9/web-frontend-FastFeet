import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/fastfeet-logo.png';

import { Container, Content } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="FastFeet" />
          </Link>
          <div>
            <ul>
              <li>
                <Link to="/orders">ENCOMENDAS</Link>
              </li>
              <li>
                <Link to="/deliveryman">ENTREGADORES</Link>
              </li>
              <li>
                <Link to="/recipients">DESTINATÁRIOS</Link>
              </li>
              <li>
                <Link to="/problems">PROBLEMAS</Link>
              </li>
            </ul>
          </div>
        </nav>

        <aside>
          <strong>{profile.name}</strong>
          <Link to="/">
            sair
            <FaSignOutAlt />
          </Link>
        </aside>
      </Content>
    </Container>
  );
}
