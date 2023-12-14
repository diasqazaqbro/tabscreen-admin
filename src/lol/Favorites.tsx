import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Button, IconButton } from "@mui/material";

type Anchor = "top" | "left" | "bottom" | "right";

export default function Favorites() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <div className="mt-[280px] p-5">
      <h3 className="text-center text-2xl font-semibold my-2">Start planning your Trip</h3>
      <h4 className="text-center text-sm mb-3">
        Save flights, hotels and more so you can easily jump back in to Trips.
      </h4>
      <Button className="flex mx-auto" variant="outlined">Find a destination</Button>
      </div>
    </Box>
  );

  return (
    <div>
      <IconButton className="mr-2" onClick={toggleDrawer("right", true)}>
        <FavoriteSharpIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}
