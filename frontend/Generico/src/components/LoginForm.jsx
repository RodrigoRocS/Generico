import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormContainer } from '../styles/LoginForm';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [invalidLogin, setInvalidLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', formData);
      const { token } = response.data;
      localStorage.setItem('Token', token);
      if (token) {
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      setInvalidLogin(true);
    }
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidPassword = formData.password.length >= 6;

  const emailErrorText = !isValidEmail && formData.email ? 'Digite um email válido' : '';
  const passwordErrorText = !isValidPassword && formData.password ? 'A senha deve ter pelo menos 6 caracteres' : '';

  const isFormValid = isValidEmail && isValidPassword;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <Typography variant="h1" gutterBottom>
          Sign In
        </Typography>
        <TextField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          label="Email:"
          variant="outlined"
          fullWidth
          error={!!emailErrorText}
          helperText={emailErrorText}
        />
      </div>
      <div>
        <TextField
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          label="Senha:"
          autoComplete="current-password"
          fullWidth
          error={!!passwordErrorText}
          helperText={passwordErrorText} 
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
      </div>
      <Button variant="outlined" type="submit" disabled={!isFormValid}>
        Entrar
      </Button>
      {invalidLogin && <p>Email ou senha inválidos!</p>}
      <p>
        Não possui uma conta? <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </FormContainer>
  );
}

export default LoginForm;
