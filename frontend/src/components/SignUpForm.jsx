import { useState } from "react";
import axios from "axios";
import {
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomPaper, FormContainer } from "../styles/LoginForm";

function SignUpForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [invalidSignIn, setInvalidSignIn] = useState(false);
  const [successSignIn, setSuccessSignIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      setInvalidSignIn(false);
      const response = await axios.put("http://localhost:3001/user", formData);
      setApiResponse(response.data.message);
      setSuccessSignIn(true)
    } catch (error) {
      console.error(error.response.data);
      setInvalidSignIn(true);
      setApiResponse(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isValidPassword = formData.password.length >= 6;
  const isValidName = formData.userName.length >= 3;

  const emailErrorText =
    !isValidEmail && formData.email ? "Digite um email válido" : "";
  const passwordErrorText =
    !isValidPassword && formData.password
      ? "A senha deve ter pelo menos 6 caracteres"
      : "";
  const nameErrorText =
    !isValidName && formData.userName
      ? "O nome deve ter pelo menos 3 caracteres"
      : "";

  const isFormValid = isValidEmail && isValidPassword && isValidName;

  return (
    <FormContainer onSubmit={handleSubmit}>
      <CustomPaper elevation={7}>
        <Typography
          variant="h1"
          gutterBottom
        >
          Sign Up
        </Typography>
        <TextField
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
          label="Nome:"
          variant="standard"
          fullWidth
          error={!!nameErrorText}
          helperText={nameErrorText}
        />

        <TextField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          label="Email:"
          variant="standard"
          fullWidth
          error={!!emailErrorText}
          helperText={emailErrorText}
        />

        <TextField
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          label="Senha:"
          variant="standard"
          autoComplete="current-password"
          fullWidth
          error={!!passwordErrorText}
          helperText={passwordErrorText}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() =>
                  setShowPassword((prevShowPassword) => !prevShowPassword)
                }
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          disabled={!isFormValid || isLoading}
          fullWidth
        >
          {isLoading ? <CircularProgress size={24} /> : "Cadastrar"}
        </Button>
        {invalidSignIn && <p style={{color: 'red'}}>{apiResponse}</p>}
        {successSignIn && <p style={{color: 'green'}}>{apiResponse}</p>}
      </CustomPaper>
    </FormContainer>
  );
}

export default SignUpForm;
