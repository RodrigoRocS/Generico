import { Paper, styled } from "@mui/material";

export const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  
  '@media (max-width: 600px)': {
    width: '100%',
  }
});

export const CustomPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '25rem',
  height: '35rem',
  gap: '2rem',
  padding: '2rem',
  justifyContent: 'center',
  borderRadius: '1rem',
  
  '@media (max-width: 600px)': {
    width: '100%',
  }
});
