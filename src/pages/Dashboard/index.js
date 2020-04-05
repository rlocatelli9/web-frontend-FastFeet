import React from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Dashboard() {
  api.get('recipients', {
    params: {
      isLike: '%',
    },
  });
  return (
    <Container>
      <h1>Dashboard</h1>
    </Container>
  );
}
