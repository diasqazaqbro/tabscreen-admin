import Sidebar from "@/lol/Sidebar";
import TabsFilter from "@/lol/TabsFilter";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { blue, deepOrange } from "@mui/material/colors";
import React from "react";

const page = () => {
  return (
    <Sidebar>
      <section className="index">
        <div className="welcome sm:py-40 bg-no-repeat">
          <div className="mx-auto flex flex-col items-center">
            <TabsFilter />
          </div>
        </div>
        <div className="what-trust-travel shadow-md sm:px-24 px-10 py-6">
          <h1 className="text-2xl mb-2 font-semibold">
            What TrustTravel brings to the table.
          </h1>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: blue[500] }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Big names, great deals"
                secondary={
                  <React.Fragment>
                    {" Search 100s of travel sites to compare prices"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: blue[500] }}
                  alt="Travis Howard"
                  src="/static/images/avatar/2.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Filter for what you want"
                secondary={
                  <React.Fragment>
                    {
                      "Free Wi-Fi? Early arrival? Instantly customize your results."
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: blue[500] }}
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Track prices"
                secondary={
                  <React.Fragment>
                    {"Not ready to book? Set alerts for when prices drop"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ bgcolor: blue[500] }}
                  alt="Cindy Baker"
                  src="/static/images/avatar/3.jpg"
                />
              </ListItemAvatar>
              <ListItemText
                primary="More than flights"
                secondary={
                  <React.Fragment>
                    {
                      " Find deals for your entire trip from hotels to rental cars"
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
        <div className="sm:px-24 px-10 py-10">
          <div className="flex ">
            <div className="w-[50%]">
              <div className="w-[100%] h-[100%] bg-primary"></div>
            </div>
            <div className="w-[50%] p-4 px-5">
              <h1 className="text-2xl mb-2 font-semibold">TrussTravel AI</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, voluptates?
              </p>
              <Button className="mt-5" variant="outlined">
                Try it
              </Button>
            </div>
          </div>
        </div>
        <div className="sm:px-24 px-10 py-10">
          <h1 className="text-2xl mb-1 font-semibold">
            What TrustTravel brings to the table.
          </h1>
          <h2 className="text-gray text-sm">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente, facilis.
          </h2>
          <div className="my-5 flex justify-between">
            <Card sx={{ maxWidth: '48%', borderRadius: '20px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://www.kayak.com/rimg/dimg/dynamic/376-1701661503-fd-planning-explore.jpeg?crop=true&height=624"
                  alt="green iguana"
                />
                <CardContent>
                  <div className="font-semibold">
                    Lizard
                  </div>
                  <div className="text-gray text-sm">
                    Lizards are a widespread group
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
            <Card sx={{ maxWidth: '48%', borderRadius: '20px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://www.kayak.com/rimg/dimg/dynamic/376-1701661503-fd-planning-explore.jpeg?crop=true&height=624"
                  alt="green iguana"
                />
                <CardContent>
                  <div className="font-semibold">
                    Lizard
                  </div>
                  <div className="text-gray text-sm">
                    Lizards are a widespread group
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </section>
    </Sidebar>
  );
};

export default page;
