import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const Largerthan = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontFamily: "inherit",
  fontWeight: "bold",
  color: "#1d2130",
  letterSpacing: "1px",
}));

const I = styled("span")(({ theme }) => ({
  fontSize: "25px",
  fontFamily: "Courgette, cursive",
  marginLeft: "4px",
  color: "#1d2130",
}));

const LinkContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  gap: "32px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HomeLink = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: 500,
  padding: "8px 12px",
  borderRadius: "4px",
  color: "#525560",
  minWidth: "unset",
  "&:hover": {
    background: "#f0f0f0",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  borderRadius: "4px",
  backgroundColor: "#1d2130",
  color: "#fff",
  fontSize: "16px",
  fontWeight: 500,
  padding: "12px 32px",
  textTransform: "none",
  "&:hover": {
    background: "#33374a",
  },
}));

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const onGroupContainerClick = () => {
    // Add your code here
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  // Menu items used both in desktop and mobile
  const menuItems = ["Home", "About us", "What We Do", "Media", "Contact"];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={onGroupContainerClick}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={onGroupContainerClick}>
            <ListItemText primary="Donate" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(30px)",
          backgroundColor: "#fff",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "0 48px",
          height: "72px", // Consistent height
          minHeight: "72px",
          color: "#000",
          boxSizing: "border-box",
          margin: 0, // Ensure no margin
        }}
      >
        <Toolbar
          sx={{
            minHeight: "72px",
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={onGroupContainerClick}
          >
            <Largerthan variant="h6">largerthan</Largerthan>
            <I>i</I>
          </Box>
          <LinkContainer>
            {menuItems.map((item) => (
              <HomeLink key={item} onClick={onGroupContainerClick}>
                {item}
              </HomeLink>
            ))}
          </LinkContainer>
          <NavButton onClick={onGroupContainerClick}>
            <Typography component="span" fontWeight={500}>
              Donate
            </Typography>
          </NavButton>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}
            onClick={handleDrawerToggle}
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
