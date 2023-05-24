import * as React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import NoShelfControl from "../images/NoShelfControl.png";
import socialNetwork from "../images/socialNetwork.png";
import fish from "../images/fish.png";
import FadeInSection from "./fadeIn";

export default function Project() {
  const projects = [
    {
      name: "FISH TRACKER",
      link: "https://github.com/NTumminaro/ACGC-Golden-Rod-Pro",
      image: fish,
      description:
        "This is a project that tracks the location of Fish in the GameCube game Animal Crossing. This information is used for Speedrunners in the gaming community. This was created with React / Vite.",
    },
    {
      name: "SOCIAL NETWORK API",
      link: "https://github.com/gabess3/Social-Network-API",
      image: socialNetwork,
      description:
        "This is an API CRUD application made with MongoDB that retrieves information used on a social network such as user information, thoughts, reactions, etc.",
    },
    {
      name: "NO SHELF CONTROL",
      link: "https://github.com/Nick-likes-Rust-and-Next/No-Shelf-Control",
      image: NoShelfControl,
      description:
        "This is a MERN stack application that used Apollo/GraphQL and Material UI.",
    },
  ];

  return (
    <div className="projectContainer">
      <div id="projects">
        <FadeInSection>
          <h2 style={{ fontFamily: "Poppins", fontSize: 40, marginTop: 100 }}>
            /projects
          </h2>
        </FadeInSection>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <FadeInSection key={project.name}>
            <Card
              key={project.name}
              sx={{ maxWidth: 345, maxHeight: 420, m: 8 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.name}
                />
                <CardContent>
                  <Typography
                    sx={{ fontFamily: "Poppins", textAlign: "center" }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {project.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      textAlign: "center",
                      fontSize: 12,
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="buttonCenter">
                <Button
                  href={project.link}
                  target="_blank"
                  size="small"
                  color="primary"
                >
                  Open in GitHub
                </Button>
              </CardActions>
            </Card>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
}
