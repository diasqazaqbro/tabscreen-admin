"use server";
import Sidebar from "@/lol/Sidebar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Help = () => {
  return (
    <Sidebar>
      <section className="help">
        <div className="welcome sm:py-40 py-20">
          <h1 className="text-white sm:mx-24 mx-10 text-4xl font-bold">
            How can we help?
          </h1>
        </div>
        <div className="shadow-md sm:px-24 px-10 py-6">
          <div className="links">
            <h1 className="text-xl font-bold">Quick Links</h1>
            <div className="py-4 flex justify-between">
              <Link href="#">Link</Link>
              <Link href="#">Link</Link>
              <Link href="#">Link</Link>
            </div>
            <div className="py-4 flex justify-between">
              <Link href="#">Link</Link>
              <Link href="#">Link</Link>
              <Link href="#">Link</Link>
            </div>
          </div>
          <h1 className="text-xl font-bold">Frequently Asked Questions</h1>

          <TextField className="w-[100%] my-4" label="Search input" />
          <h1 className="text-xl mt-6 mb-4 font-bold">Tours</h1>
          <div className="faq border mb-6">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
    </Sidebar>
  );
};

export default Help;
