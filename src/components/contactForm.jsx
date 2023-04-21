import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { validateEmail } from '../utils/emailValidator';



export default function contactForm() {

  const handleEmail = () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const emailWarning = document.getElementById('emailRequired');
    if(validateEmail(email)) {
      console.log('yay')
      emailWarning.textContent = '';
    } else 
      emailWarning.setAttribute('class', 'contactAlert')
      emailWarning.textContent = "*This is a required field. Please enter a valid email address.";
    };

  const handleName = () => {
    const nameInput = document.getElementById('name');
    const name = nameInput.value;
    const nameWarning = document.getElementById('nameRequired')
    if (name.length>0) {
      nameWarning.textContent = '';
    } else if (name.length===0)
    nameWarning.setAttribute('class', 'contactAlert')
    nameWarning.textContent = "*This is a required field. Please enter your name."
  };

  const handleMessage = () => {
    const messageInput = document.getElementById('standard-multiline-flexible')
    const message = messageInput.value;
    const messageWarning = document.getElementById('messageRequired')
    if (message.length > 0) {
      messageWarning.textContent = '';
    } else if (message.length===0)
      messageWarning.setAttribute('class', 'contactAlert')
      messageWarning.textContent = "*This is a required field. Please enter a message to send in your email."
  };

  const submitHandler = () => {
    handleEmail();
    handleName();
    handleMessage();
  };



  return (
    <div id='contact' className='contactForm'>
      <h3>Let's Work Together!</h3>
      <FormControl sx={{ width: 300, m:5 }}>
        <InputLabel htmlFor="name" required={true}>Name</InputLabel>
        <Input id="name" aria-describedby="my-helper-name"/>
        <div id="nameRequired"></div>
      </FormControl>
      <FormControl sx={{ width: 300, m:5 }}>
        <InputLabel htmlFor="my-input" required={true}>Email address</InputLabel>
        <Input id="email" aria-describedby="my-helper-text" onChange={handleEmail} />
        <p id='emailRequired'></p>
      </FormControl>
      <TextField
          sx={{ width: 500, m: 5 }}
          id="standard-multiline-flexible"
          label="Message content"
          multiline
          variant="filled"
          minRows={5}
          required={true}
        />
        <p id='messageRequired'></p>
      <Grid align="right">                    
        <Button id='submit' variant="contained"  color="primary" onClick={submitHandler}>                             
          Submit
        </Button>                                       
      </Grid>
    </div>
  )
}