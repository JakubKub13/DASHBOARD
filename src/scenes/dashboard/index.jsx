import Header from "../../components/Header";
import { Box } from "@mui/material";

const Dashboard = () => {
    return <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to the Dashboard" />
        </Box>
    </Box>
}

export default Dashboard;