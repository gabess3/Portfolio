import FadeInSection from "./fadeIn";

export default function TechStack() {
  const frontEnd = ["HTML", "CSS", "JavaScript", "React"];

  const backEnd = ["Node", "Express", "MySQL", "MongoDB"];

  return (
    <>
      <div className="tech">
        <div className="techStack">
          <FadeInSection>
            <h2>FRONT END TECHNOLOGIES</h2>
          </FadeInSection>
          <FadeInSection>
            <ul className="list">
              {frontEnd.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </FadeInSection>
        </div>

        <div className="techStack">
          <FadeInSection>
            <h2>BACK END TECHNOLOGIES</h2>
          </FadeInSection>
          <FadeInSection>
            <ul className="list">
              {backEnd.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </div>
    </>
  );
}
