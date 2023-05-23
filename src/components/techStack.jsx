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
      {/* <FadeInSection>
        <div className="icons">
          <img src={HtmlIcon} alt="html icon" width="40px" height="40px"></img>
          <img src={CssIcon} alt="css icon" width="40px" height="40px"></img>
          <img
            src={JavascriptIcon}
            alt="javascript icon"
            width="40px"
            height="40px"
          ></img>
          <img
            src={reactIcon}
            alt="react icon"
            width="40px"
            height="40px"
          ></img>

          <img src={nodeIcon} alt="html icon" width="40px" height="40px"></img>
          <img
            src={expressIcon}
            alt="javascript icon"
            width="40px"
            height="40px"
            style={{ backgroundColor: "white" }}
          ></img>
          <img
            src={mysqlIcon}
            alt="javascript icon"
            width="40px"
            height="40px"
          ></img>
          <img
            src={mongodbIcon}
            alt="css icon"
            width="40px"
            height="40px"
          ></img>
        </div>
      </FadeInSection> */}
    </>
  );
}
