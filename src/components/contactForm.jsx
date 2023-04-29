import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { validateEmail } from '../utils/emailValidator';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = (event) => {
    const emailInput = document.getElementById('email');
    setEmail(emailInput.value);
    const emailWarning = document.getElementById('emailRequired');
    if (validateEmail(email)) {
      console.log('yay email');
      emailWarning.textContent = '';
    } else {
      console.log('bad email');
      emailWarning.setAttribute('class', 'contactAlert');
      emailWarning.textContent = '*This is a required field. Please enter a valid email address.';
    }
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleName = () => {
    const nameInput = document.getElementById('name');
    setName(nameInput.value);
    const nameWarning = document.getElementById('nameRequired');
    if (name.length > 0) {
      console.log('yay name');
      nameWarning.textContent = '';
    } else if (name.length === 0) {
      console.log('bad name');
      nameWarning.setAttribute('class', 'contactAlert');
      nameWarning.textContent = '*This is a required field. Please enter your name.';
    }
  };

  const changeName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const handleMessage = () => {
    const messageInput = document.getElementById('standard-multiline-flexible');
    setMessage(messageInput.value);
    const messageWarning = document.getElementById('messageRequired');
    if (message.length > 0) {
      console.log('yay message');
      messageWarning.textContent = '';
    } else if (message.length === 0) {
      console.log('bad message');
      messageWarning.setAttribute('class', 'contactAlert');
      messageWarning.textContent = '*This is a required field. Please enter a message to send in your email.';
    }
  };

  const changeMessage = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };

  const submitHandler = () => {
    handleEmail();
    handleName();
    handleMessage();
  };

  return (
    <div id="contact" className="contactForm">
      <h3>Contact</h3>
      <FormControl sx={{ width: 300, m: 5 }}>
        <InputLabel htmlFor="name" required={true}>
          Name
        </InputLabel>
        <Input id="name" aria-describedby="my-helper-name" value={name} onChange={changeName} />
        <p id="nameRequired"></p>
      </FormControl>
      <FormControl sx={{ width: 300, m: 5 }}>
        <InputLabel htmlFor="my-input" required={true}>
          Email address
        </InputLabel>
        <Input id="email" aria-describedby="my-helper-text" value={email} onChange={changeEmail} />
        <p id="emailRequired"></p>
      </FormControl>
      <TextField
        sx={{ width: 300, m: 5 }}
        id="standard-multiline-flexible"
        label="Message content"
        multiline
        variant="filled"
        minRows={5}
        required={true}
        value={message}
        onChange={changeMessage}
      />
      <p id="messageRequired"></p>
      <Grid align="right">
        <Button id="submit" variant="contained" color="primary" onClick={submitHandler}>
          Submit
        </Button>
      </Grid>
    </div>
  );
}
