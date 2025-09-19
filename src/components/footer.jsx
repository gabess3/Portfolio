import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Link } from '@mui/material/';

export default function Footer() {
	return (
		<>
			<Box className='footer'>
				<Link href='https://github.com/gabess3' target='_blank' sx={{ mx: 3 }}>
					<GitHubIcon className='footerIcon' fontSize='large' />
				</Link>
				<Link href='https://www.linkedin.com/in/gabriel-ess/' target='_blank'>
					<LinkedInIcon
						className='footerIcon'
						fontSize='large'
						sx={{ mx: 3 }}
					/>
				</Link>
				<Link
					href='https://www.facebook.com/profile.php?id=100073633111599'
					target='_blank'
				>
					<FacebookIcon
						className='footerIcon'
						fontSize='large'
						sx={{ mx: 3 }}
					/>
				</Link>
			</Box>
		</>
	);
}
