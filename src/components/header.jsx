import Navigation from './navigation';
import '../fonts/FiraMono-Regular.ttf'

export default function Header() {
	return (
			<>
					<Navigation />
					<header className="App-header">
							<div id='about' className='container'>
								{/* <img src={profile} alt='profile pic' ></img> */}
									<div className='about'>
										<h1 style={{ fontFamily: "Poppins", letterSpacing: '.1rem' }}>GABRIEL ESS</h1>
										<h3 style={{ fontFamily: "FiraMono" }}>FULL STACK DEVELOPER</h3>
										<p style={{ fontFamily: "FiraMono", fontSize: 'medium', textAlign: 'center'}}>Some text briefly about me and some whys. I might say a few things about me, music, and perhaps philosophy and my background in tech, but mostly it'll be relevant to being a developer. Now I'm just going to fill the space with as much text as possible so I can see what it'll look like with a more fleshed out bio sitting there. I don't know, maybe we'll talk about farm animals, the gas prices, or the weather. Maybe Hamlet. Poor Yorick? Did anyone actually know him? I doubt it.</p>
									</div>
							</div>
					</header>
			</>
	)
}