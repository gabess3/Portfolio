import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import resume from "../images/Resumé.pdf";
import Link from "@mui/material/Link";
import TerminalIcon from "@mui/icons-material/Terminal";

const pages = ["About", "Projects", "Resumé", "Contact"];

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
          <TerminalIcon
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

              {pages.map((page) =>
                page === "Resumé" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      href={resume}
                      target="_blank"
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
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ) : page === "About" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      href="#about"
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
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ) : page === "Projects" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      href="#projects"
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
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ) : page === "Contact" ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link
                      href="#contact"
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
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography sx={{ p: 10 }} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <TerminalIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, scale: 1.5 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Gabriel Ess
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {/* Creates nav items on medium displays */}

            {pages.map((page) =>
              page === "Resumé" ? (
                <Button
                  key={page}
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
                  href={resume}
                  target="_blank"
                >
                  03/ {page}
                </Button>
              ) : page === "Projects" ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                    fontFamily: "FiraMono",
                    fontSize: 17,
                    textTransform: "lowercase",
                  }}
                  href="#projects"
                >
                  02/ {page}
                </Button>
              ) : page === "About" ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                    fontFamily: "FiraMono",
                    fontSize: 17,
                    textTransform: "lowercase",
                  }}
                  href="#about"
                >
                  01/ {page}
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    m: 2,
                    color: "white",
                    display: "block",
                    textDecoration: "none",
                    fontFamily: "FiraMono",
                    fontSize: 17,
                    textTransform: "lowercase",
                  }}
                  href="#contact"
                >
                  04/ {page}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
