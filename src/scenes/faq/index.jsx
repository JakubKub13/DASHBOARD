import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions" />

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    How to use blockchain?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    What is the ICO ?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    What is Metamask ?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Can I buy tokens with fiat money ?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    How to use Bitcoin ATM ?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Who regulates Crypto law ?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>

};

export default FAQ;

