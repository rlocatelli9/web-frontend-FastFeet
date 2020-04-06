import React from 'react';
import { Link } from 'react-router-dom';

import notFound from '../../assets/notfound.png';

import { Container, Back } from './styles';

export default function NotFoundPage() {
  return (
    <Container>
      <img src={notFound} alt="NotFound" />
      <h1>OPS!</h1>
      <p>A página que você está procurando, não existe!</p>
      <Back>
        <Link to="/">voltar para o sistema</Link>
      </Back>
    </Container>
  );
}
