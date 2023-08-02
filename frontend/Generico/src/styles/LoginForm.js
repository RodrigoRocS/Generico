import { styled } from "@mui/material";

export const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  width: '90%', 
  maxWidth: '400px',
  gap: '10px',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#ffffff',
  
  
  '@media (max-width: 600px)': {
    width: '100%',
  }
});

