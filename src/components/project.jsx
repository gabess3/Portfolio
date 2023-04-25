// Uses Card component from Material UI

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import employeeTracker from '../images/EmployeeTracker.png';
import socialNetwork from '../images/socialNetwork.png';
import fish from '../images/fish.png';
import FadeInSection from './fadeIn';


export default function Project() {

  const projects = ['FISH TRACKER', 'SOCIAL NETWORK API', 'EMPLOYEE TRACKER'];
  const projectLink = ['https://github.com/gabess3/Social-Network-API', 'https://github.com/gabess3/Employee-Tracker']

  return (

    <div className="projectContainer">
      <div id='projects'>
      <FadeInSection>
        <h2 style={{ fontFamily: 'Poppins', fontSize: 50, marginTop: 150 }}>/projects</h2>
      </FadeInSection>
      </div>
        <div className='projects'>
        {projects.map((project) => 
          (project === "FISH TRACKER") ?
          <FadeInSection key={project}>
            <Card key={project} sx={{ maxWidth: 345, maxHeight: 420, m: 8}}>
            <CardActionArea>
              <CardMedia 
                className='fish'
                component="img"
                height="160"
                image={fish}
                alt="Fish Project"
              />
              <CardContent>
                <Typography sx={{ fontFamily: "Poppins", textAlign: "center" }} gutterBottom variant="h5" component="div">
                  {project}
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", textAlign: "center" }} variant="body2" color="text.secondary">
                  Here will be a description of the fish project with various details about it.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="buttonCenter">
              <Button href='#' target="_blank" size="small" color="primary">
                Open in GitHub
              </Button>
            </CardActions>
          </Card>
        </FadeInSection>
        : 
        (project === "SOCIAL NETWORK API") ?
        <FadeInSection key={project}>
          <Card key={project} sx={{ maxWidth: 345, maxHeight: 420, m: 8}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={socialNetwork}
                alt="Social Network API Project"
              />
              <CardContent>
                <Typography sx={{ fontFamily: "Poppins", textAlign: "center" }} gutterBottom variant="h5" component="div">
                  {project}
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", textAlign: "center" }} variant="body2" color="text.secondary">
                This is an API that functions as a CRUD application made with MongoDB for getting information that would be found on a social network, such as user information, thoughts, reactions, etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="buttonCenter">
              <Button href= {projectLink[0]} target="_blank" size="small" color="primary">
                Open in GitHub
              </Button>
            </CardActions>
          </Card>
        </FadeInSection>
        : 
        (project === "EMPLOYEE TRACKER") ?
        <FadeInSection key={project}>
          <Card key={project} sx={{ maxWidth: 345, maxHeight: 420, m: 8}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={employeeTracker}
                alt="Employee Tracker Project"
              />
              <CardContent>
                <Typography sx={{ fontFamily: "Poppins", textAlign: "center" }} gutterBottom variant="h5" component="div">
                  {project}
                </Typography>
                <Typography sx={{ fontFamily: "Poppins", textAlign: "center" }} variant="body2" color="text.secondary">
                This application is used for interacting with a SQL database via the terminal. This was built using nodejs with the inquirer package for user prompts, MySQL to establish a connection with and to query the database, and the console.table package to display query results in the command line.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className='buttonCenter'>
              <Button href={projectLink[1]} target="_blank" size="small" color="primary">
                Open in GitHub
              </Button>
            </CardActions>
          </Card>
        </FadeInSection>
          :
          <Card key={project} sx={{ maxWidth: 380, maxHeight: 360, m: 8}}>
          <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image=""
                alt="Employee Tracker Project"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Here will be a description of my project.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button href="#" target="_blank" size="small" color="primary">
             Open in GitHub
            </Button>
          </CardActions>
        </Card>
      )}
      </div>
    </div>
  );
}