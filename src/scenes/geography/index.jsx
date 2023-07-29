import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChar from "../../components/GeographyChar";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const GeographyChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Geo Chart" subtitle="Simple Geo Chart" />
            <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="4px">
                <GeographyChar />
            </Box>
        </Box>
    )

};

export default GeographyChart;