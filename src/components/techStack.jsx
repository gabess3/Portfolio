import JavascriptIcon from '../images/javascript.jpg';
import HtmlIcon from '../images/html5.jpg';
import CssIcon from '../images/css3.png';
import reactIcon from '../images/react.jpg';
import nodeIcon from '../images/nodejs.jpg';
import mysqlIcon from '../images/mysql.jpg';
import mongodbIcon from '../images/mongodb.jpg';
import expressIcon from '../images/express-js-icon.png';
import Paper from '@mui/material/Paper';


export default function TechStack() {

  const frontEnd = [
    "HTML",
    "CSS", 
    "JavaScript",
    "React"
  ];


  const backEnd = [
    'Node',
    'Express',
    'MySQL',
    'MongoDB'
  ]

  return (
    <div className='tech'>
      <div className='frontEnd'>
        <h2 style={{ fontFamily: 'FiraMono', fontSize: 35 }}>FRONT END TECHNOLOGIES</h2>
        <ul className='list'>
          {frontEnd.map((tech) =>
            <li key={tech} style={{ fontFamily: 'FiraMono', fontSize: 20  }}>{tech}</li>
          )}
        </ul>
      </div>
      <div className='backEnd'>
        <h2 style={{ fontFamily: 'FiraMono', fontSize: 35  }}>BACK END TECHNOLOGIES</h2>
        <ul className='list'>
          {backEnd.map((tech) =>
            <li key={tech} style={{ fontFamily: 'FiraMono', fontSize: 20 }}>{tech}</li>
          )}
        </ul>
      </div>
      <Paper elevation={8}>
        <div className='icons'>
          <img src={HtmlIcon} alt="html icon" width='40px' height="40px"></img>
          <img src={CssIcon} alt="css icon" width='40px' height="40px"></img>
          <img src={JavascriptIcon} alt="javascript icon" width='40px' height="40px"></img>
          <img src={reactIcon} alt="react icon" width='40px' height="40px"></img>
        </div>
      </Paper>
      <Paper elevation={8}>
        <div className='icons'>
          <img src={nodeIcon} alt="html icon" width='40px' height="40px"></img>
          <img src={expressIcon} alt="javascript icon" width='40px' height="40px" style={{backgroundColor: 'white'}}></img>
          <img src={mysqlIcon} alt="javascript icon" width='40px' height="40px"></img>
          <img src={mongodbIcon} alt="css icon" width='40px' height="40px"></img>
        </div>
      </Paper>
    </div>
  )
}