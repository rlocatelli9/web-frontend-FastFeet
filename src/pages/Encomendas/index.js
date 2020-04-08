import React from 'react';

import { Container, ContentHeader, ContentTable, Actions } from './styles';

export default function Encomendas() {
  return (
    <Container>
      <ContentHeader>
        <header>Gerenciando encomendas</header>
        <form>
          <input
            type="text"
            name="encomenda"
            id="encomenda"
            placeholder="Buscar por encomenda"
          />
          <button type="button">Cadastrar</button>
        </form>
      </ContentHeader>
      <ContentTable>
        <thead>
          <tr>
            <th>ID</th> <th>Destinatário</th> <th>Entregador</th>{' '}
            <th>Cidade</th>
            <th>Estado</th> <th>Status</th> <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Robson Locatelli</td>
            <td>
              {' '}
              <span>JS</span> João da Silva
            </td>
            <td>Fortaleza</td>
            <td>CE</td>
            <td>
              <span id="status">RETIRADA</span>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Robson Locatelli</td>
            <td>
              {' '}
              <span>JS</span> João da Silva
            </td>
            <td>Fortaleza</td>
            <td>CE</td>
            <td>
              <span id="status">RETIRADA</span>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Robson Locatelli</td>
            <td>
              {' '}
              <span>JS</span> João da Silva
            </td>
            <td>Fortaleza</td>
            <td>CE</td>
            <td>
              <span id="status">RETIRADA</span>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Robson Locatelli</td>
            <td>
              <span>JS</span> João da Silva
            </td>
            <td>Fortaleza</td>
            <td>CE</td>
            <td>
              <span id="status">RETIRADA</span>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Robson Locatelli</td>
            <td>
              {' '}
              <span>JS</span> João da Silva
            </td>
            <td>Fortaleza</td>
            <td>CE</td>
            <td>
              <span id="status">RETIRADA</span>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Robson Locatelli</td>
            <td>
              {' '}
              <span>JS</span> João da Silva
            </td>
            <td>Fortaleza</td>
            <td>CE</td>
            <td>
              <span id="status">RETIRADA</span>
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </ContentTable>
      <Actions>
        {/* <button disabled={page === 1} onClick={this.prevPage}>
            Anterior
          </button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>
            Próximo
          </button> */}
        <button>Anterior</button>
        <button>Próximo</button>
      </Actions>
    </Container>
  );
}
