import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  InputAdornment,
  IconButton
} from '@mui/material';
import { FaPen } from 'react-icons/fa';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function ShortenURLs() {
  const [expiryDate, setExpiryDate] = useState(null);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 500,
            fontFamily: 'sans-serif',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Shorten Your URL Here
        </Typography>

        <Stack spacing={3}>
          <TextField
            required
            label="Original URL"
            placeholder="Paste Original URL"
            fullWidth
          />

          <TextField
            label="Customize your link ( Optional )"
            placeholder="Customize your link"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <FaPen />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Title ( Optional )"
            placeholder="Title of URL"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <FaPen />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Expiry ( Optional )"
              value={expiryDate}
              onChange={(newValue) => setExpiryDate(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="dd-mm-yyyy"
                  fullWidth
                />
              )}
            />
          </LocalizationProvider>

          <Button
            variant="contained"
            disabled
            fullWidth
            sx={{
              backgroundColor: '#ccc',
              color: '#444',
              paddingY: 1.2,
              fontWeight: 'bold',
            }}
          >
            Generate And Shorten URL
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
