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
    const emailInput = document.getElementById('my-input');
    if(validateEmail(email)) {
      console.log("yay");
    } else console.log("nay!");
    };




  return (
    <div id='contact' className='contactForm'>
      <h3>Contact Me!</h3>
      <FormControl sx={{ width: 300, m:5 }}>
        <InputLabel htmlFor="my-input2">Name</InputLabel>
        <Input id="my-input2" aria-describedby="my-helper-name" />
      </FormControl>
      <FormControl sx={{ width: 300, m:5 }}>
        <InputLabel htmlFor="my-input" required='true'>Email address</InputLabel>
        <Input color='warning'  id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <TextField
          sx={{ width: 500, m: 5 }}
          id="standard-multiline-flexible"
          label="Message content"
          multiline
          variant="filled"
          minRows={5}
        />
      <Grid sm={1} align="right">                    
        <Button variant="contained"  color="primary">                             
          Submit
        </Button>                                       
      </Grid>
    </div>
  )
}