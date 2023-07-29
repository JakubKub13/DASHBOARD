import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChar from "../../components/LineChar";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChar />
            </Box>
        </Box>
    )

};

export default Pie;