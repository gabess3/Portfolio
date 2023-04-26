import "../fonts/FiraMono-Regular.ttf";

export default function Header() {
  return (
    <>
      <header className="App-header">
        <div id="about" className="container">
          {/* <img src={profile} alt='profile pic' ></img> */}
          <div className="about container">
            <h1>GABRIEL ESS</h1>
            <h3>FULL STACK DEVELOPER</h3>
            <p>
              Hello! My name is Gabriel Ess, and I'm a Dallas-based Full Stack
              developer. I have a background in Tech Support, Music Education,
              and Philosophy, all of which lend their own unique qualities in my
              approach and perspective when developing web applications, such
              as: an attention to detail, research, technical communication,
              creativity, and collaboration. I have a life-long passion for
              continued learning, and bettering myself in every way. Let's work
              together!
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
