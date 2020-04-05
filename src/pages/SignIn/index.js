import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';
import { FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';
import { signRequest } from '../../store/modules/auth/actions';

import Input from '../../components/Input';

import logo from '../../assets/fastfeet-logo.png';

import { Load } from './styles';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O e-mail é obrigatório'),
        password: Yup.string()
          .min(6, 'A senha deve conter no mínimo 6 caracteres')
          .required('A senha é obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed

      const { email, password } = data;
      dispatch(signRequest(email, password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <div>
        <img src={logo} alt="Fastfeet" />
        <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
          <Input
            type="text"
            name="email"
            label="Seu e-mail"
            id="email"
            placeholder="Seu e-mail cadastrado"
            disabled={loading}
          />

          <Input
            type="password"
            name="password"
            label="Sua Senha"
            id="password"
            placeholder="Sua senha secreta"
            disabled={loading}
          />

          {loading ? (
            <Load loading={loading}>
              <FaSpinner color="#7d40e7" size={50} />
            </Load>
          ) : (
            <button type="submit">entrar no sistema</button>
          )}
        </Form>
      </div>
    </>
  );
}
