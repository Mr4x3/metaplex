import React from "react";
import {
  Link,
} from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

import { Settings } from "../Settings";

export const Header = ({ narrow } : { narrow : boolean }) => {
  const navs = [
    {
      href: ``,
      innerNarrow: "Home",
      inner: <HomeIcon />,
    },
    // {
    //   href: `/gumdrop/create`,
    //   inner: "Create",
    // },
    // {
    //   href: `/gumdrop/claim`,
    //   inner: "Claim",
    // },
    // {
    //   href: `/gumdrop/close`,
    //   inner: "Close",
    // },
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open:any) => (event:any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <Box
      sx={{
        height: "52px",
        display: "flex",
        bgcolor: "action.disabledBackground",
        overflow: "auto",
      }}
    >
      {narrow
        ? (
          <React.Fragment>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon />
            </Button>
            <Drawer
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItem>
                    <ListItemText
                      primary="NervChain"
                      primaryTypographyProps={{
                        fontSize: "1.2rem",
                        fontWeight: 'medium',
                        letterSpacing: 0,
                      }}
                    />
                  </ListItem>
                  <Divider />
                  {navs.map((nav, idx) => {
                    return (
                      <Link to={nav.href} key={idx} style={{color: "#46ffd7 !important"}}>
                        <ListItemButton>
                          {nav.innerNarrow || nav.inner}
                        </ListItemButton>
                      </Link>
                    );
                  })}
                </List>
              </Box>
            </Drawer>
          </React.Fragment>
        )
        : (
          <Stack
            direction="row"
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginLeft: "36px",
            }}
          >
            {navs.map((nav, idx) => {
              return (
                <Link to={nav.href} key={idx}>
                  <Button variant="outlined" style={{minWidth:0}}>
                    {nav.inner}
                  </Button>
                </Link>
              );
            })}
          </Stack>
        )
      }
      <Box sx={{flexGrow: 1, minWidth: "36px"}}></Box>
      <Settings narrow={narrow}/>
    </Box>
  );
};
