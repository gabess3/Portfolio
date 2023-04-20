import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { validateEmail } from '../utils/emailValidator';


export default function contactForm() {

  const handleEmail = (event) => {
    const email = event.target.value;
    const emailWarning = document.getElementById('emailRequired');
    if(validateEmail(email)) {
      emailWarning.innerHTML = '';
    } else 
      emailWarning.innerHTML = "This is a required field. Please enter a valid email address.";
    };

  const handleName = (event) => {
    const name = event.target.value;
    const nameWarning = document.getElementById('nameRequired')
    if (name) {
      nameWarning.innerHTML = '';
    } else if (!name)
    nameWarning.innerHTML = "This is a required field. Please enter your name."
  }

  const handleMessage = (event) => {
    const message = event.target.value;
    const messageWarning = document.getElementById('messageRequired')
    if (message) {
      messageWarning.innerHTML = '';
    } else if (!message)
    messageWarning.innerHTML = "This is a required field. Please enter a message to send in your email."
  }
  




  return (
    <div id='contact' className='contactForm'>
      <h3>Contact Me!</h3>
      <FormControl sx={{ width: 300, m:5 }}>
        <InputLabel htmlFor="my-input2" required='true'>Name</InputLabel>
        <Input id="my-input2" aria-describedby="my-helper-name"/>
        <p id="nameRequired"></p>
      </FormControl>
      <FormControl sx={{ width: 300, m:5 }}>
        <InputLabel htmlFor="my-input" required='true'>Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <p id='emailRequired'></p>
      </FormControl>
      <TextField
          sx={{ width: 500, m: 5 }}
          id="standard-multiline-flexible"
          label="Message content"
          multiline
          variant="filled"
          minRows={5}
          required='true'
        />
        <p id='messageRequired'></p>
      <Grid sm={1} align="right">                    
        <Button variant="contained"  color="primary">                             
          Submit
        </Button>                                       
      </Grid>
    </div>
  )
}