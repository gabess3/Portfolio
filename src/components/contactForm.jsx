import {
	Button,
	Grid,
	TextField,
	Input,
	InputLabel,
	FormControl,
} from '@mui/material';
import { validateEmail } from '../utils/emailValidator';
import { useState } from 'react';

export default function ContactForm() {
	const [name, setName] = useState(' ');
	const [email, setEmail] = useState(' ');
	const [message, setMessage] = useState(' ');

	const handleEmail = (event) => {
		const emailInput = document.getElementById('email');
		setEmail(emailInput.value);
		const emailWarning = document.getElementById('emailRequired');
		if (validateEmail(email)) {
			emailWarning.textContent = '';
		} else {
			emailWarning.setAttribute('class', 'contactAlert');
			emailWarning.textContent =
				'*This is a required field. Please enter a valid email address.';
		}
	};

	const handleName = () => {
		const nameInput = document.getElementById('name');
		setName(nameInput.value);
		const nameWarning = document.getElementById('nameRequired');
		if (name.length > 0) {
			nameWarning.textContent = '';
		} else if (name.length === 0) {
			nameWarning.setAttribute('class', 'contactAlert');
			nameWarning.textContent =
				'*This is a required field. Please enter your name.';
		}
	};

	const handleMessage = () => {
		const messageInput = document.getElementById('standard-multiline-flexible');
		setMessage(messageInput.value);
		const messageWarning = document.getElementById('messageRequired');
		if (message.length > 0) {
			messageWarning.textContent = '';
		} else if (message.length === 0) {
			messageWarning.setAttribute('class', 'contactAlert');
			messageWarning.textContent =
				'*This is a required field. Please enter a message to send in your email.';
		}
	};

	const submitHandler = () => {
		handleEmail();
		handleName();
		handleMessage();
	};

	return (
		<div id='contact' className='contactForm'>
			<h3>/contact</h3>
			<FormControl sx={{ width: 300, m: 5 }}>
				<InputLabel htmlFor='name' required={true}>
					Name
				</InputLabel>
				<Input
					id='name'
					aria-describedby='my-helper-name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<p id='nameRequired'></p>
			</FormControl>
			<FormControl sx={{ width: 300, m: 5 }}>
				<InputLabel htmlFor='email' required={true}>
					Email address
				</InputLabel>
				<Input
					id='email'
					aria-describedby='my-helper-text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<p id='emailRequired'></p>
			</FormControl>
			<TextField
				sx={{ width: 300, m: 5 }}
				id='standard-multiline-flexible'
				label='Message content'
				multiline
				variant='filled'
				minRows={5}
				required={true}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<p id='messageRequired'></p>
			<Grid align='right'>
				<Button
					id='submit'
					variant='contained'
					color='primary'
					onClick={submitHandler}
				>
					Submit
				</Button>
			</Grid>
		</div>
	);
}
