import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export default function Footer() {
	return (
		<>
			<Box className="footer">
				<div>
					<Link href='https://github.com/gabess3' target="_blank" sx={{ mr: 5 }}>
							<GitHubIcon className='footerIcon' fontSize='large'/>
					</Link>
					<Link href='https://www.linkedin.com/in/gabriel-ess/' target="_blank" sx={{ mr: 5 }}>
							<LinkedInIcon className='footerIcon' fontSize='large'/>
					</Link>
					<Link href='https://www.facebook.com/profile.php?id=100073633111599' target="_blank" sx={{ mr: 5 }}>
							<FacebookIcon className='footerIcon' fontSize='large'/>
					</Link>
				</div>
			</Box>
		</>
	)
}