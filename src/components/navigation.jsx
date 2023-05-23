import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link,
} from "@mui/material";
import Terminal from "@mui/icons-material/Terminal";
import MenuIcon from "@mui/icons-material/Menu";
import resume from "../images/Resumé.pdf";

const tabs = [
  {
    name: "About",
    link: "#about",
    target: "_self",
  },
  {
    name: "Projects",
    link: "#projects",
    target: "_self",
  },
  {
    name: "Resumé",
    link: resume,
    target: "_blank",
  },
  {
    name: "Contact",
    link: "#contact",
    target: "_self",
  },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ backgroundColor: "black" }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Terminal
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 50 }}
          />
          <Typography
            noWrap
            component="a"
            href="/Portfolio"
            sx={{
              m: 1,
              p: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Monaco",
              fontWeight: 600,
              fontSize: 22,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ./root<span className="terminal">_</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Creates nav items on xs displays */}

              {tabs.map((tab) => (
                <MenuItem key={tab} onClick={handleCloseNavMenu}>
                  <Link
                    href={tab.link}
                    target={tab.target}
                    sx={{ textDecoration: "none", color: "white" }}
                  >
                    <Typography
                      sx={{
                        p: 10,
                        color: "white",
                        textDecoration: "none",
                        fontFamily: "FiraMono",
                        textTransform: "lowercase",
                      }}
                      textAlign="center"
                    >
                      /{tab.name}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
            <Typography
              noWrap
              component="a"
              href="/Portfolio"
              sx={{
                m: 1,
                p: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "Monaco",
                fontWeight: 600,
                fontSize: 22,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ./root<span className="terminal">_</span>
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {/* Creates nav items on medium displays */}

            {tabs.map((tab) => (
              <Button
                key={tab.name}
                onClick={handleCloseNavMenu}
                className="navigation"
                sx={{
                  m: 2,
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                  fontFamily: "FiraMono",
                  fontSize: 17,
                  textTransform: "lowercase",
                }}
                href={tab.link}
                target={tab.target}
              >
                /{tab.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
