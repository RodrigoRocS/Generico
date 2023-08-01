import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      const { token } = response.data;
      console.log(token);
      localStorage.setItem('Token', token);
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Usuário:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder='Email:'
        />
      </div>
      <div>
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder='Senha:'
        />
      </div>
      <button type="submit">Entrar</button>
      <p>Não possui uma conta? <Link to="/cadastro">Cadastre-se aqui</Link></p>
    </form>
  );
};

export default LoginForm;
