import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChar from "../../components/PieChar";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Bar Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChar />
            </Box>
        </Box>
    )

};

export default Pie;