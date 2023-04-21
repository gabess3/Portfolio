import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ArrowCircleUpTwoToneIcon from '@mui/icons-material/ArrowCircleUpTwoTone';

export default function Footer() {
	return (
		<>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', p: 2.5, backgroundColor: 'black'}}>
				<div className='contact'>
					<Link href='https://github.com/gabess3' target="_blank" sx={{ mr: 5 }}>
							<GitHubIcon fontSize='large' sx={{ color: "white"}}/>
					</Link>
					<Link href='https://www.linkedin.com/in/gabriel-ess/' target="_blank" sx={{ mr: 5 }}>
							<LinkedInIcon fontSize='large' sx={{ color: "white"}}/>
					</Link>
					<Link href='https://www.facebook.com/profile.php?id=100073633111599' target="_blank" sx={{ mr: 5 }}>
							<FacebookIcon fontSize='large' sx={{ color: "white"}} />
					</Link>
				</div>
				<Link href='#'>
						<ArrowCircleUpTwoToneIcon sx={{ fontSize: 50, position: 'relative', left: 100 }}/>
				</Link>	
			</Box>
		</>
	)
}