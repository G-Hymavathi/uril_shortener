import React, { useState } from 'react';
import {
  Container,
  Paper, 
} from '@mui/material';
import { Button } from '@mantine/core';

import { TextInput } from '@mantine/core';
import Service from '../utils/http';
import { Center, Box } from '@mantine/core';
import Response from '../Components/Response';



const service = new Service();

export default function ShortenURLs() {
     const generateShortUrl = async () => {
       console.log(input?.originalUrl);
       try {
           const data = await service.post("s", input);
           setResponse(data);
           console.log(data);
       } catch (error) {
           console.error("Error generating short URL:", error);
       }
   }


   const [input, setInput] = useState({
       originalUrl: "",
       customUrl: "",
       expiresAt: "",
       title: ""
   });
      const [response, setResponse] = useState(null);


  return (
    <Container maxWidth="sm">
       {!response?
      <>
      <Paper elevation={3} sx={{ padding: 4, marginTop: 6 }}>
          <TextInput
          size="lg"
          label="Original Url "
          withAsterisk
          placeholder="Enter URL"
          onChange={(e) => { setInput({ ...input, originalUrl: e.target.value }) }}
        />
        <TextInput
          size="lg"
          label="Custom Url "
          placeholder="Enter custome URL"
          onChange={(e) => { setInput({ ...input, customUrl: e.target.value }) }}
        />
        <TextInput
          size="lg"
          label="Title "
          placeholder="Enter title"
          onChange={(e) => { setInput({ ...input, title: e.target.value }) }}
        />
        <TextInput
          size="lg"
          type = 'date'
          label="Date "
          placeholder="Enter date"
          onChange={(e) => { setInput({ ...input, date: e.target.value }) }}
        />
      <Center>
        <Button onClick={generateShortUrl}
          variant="filled" size="lg" radius="xl">Button</Button>
      </Center>

      </Paper>
      </>
      :
       <Response response={response} setResponse={setResponse}/>

       }
    </Container>
  );
}
