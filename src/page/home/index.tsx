import { Box } from "@mui/material";
import Footer from "../../components/home/footer";
import Header from "../../components/home/header";
import { StyleContainer } from "./style-mui";
import { useLocation } from "react-router-dom";
import HomePage from "../../components/home/page/home";
import About from "../../components/home/page/about";
import Services from "../../components/home/page/services";
import Contact from "../../components/home/page/contact";

export default function Home() {
    const location = useLocation();
    const path = location.pathname.split('/')[1];
    return (
        <StyleContainer>
            <Header />
            <Box sx={{ width: '-webkit-fill-available', padding: '0 10%', }}>
                {path == "" && <HomePage />}
                {path == "about" && <About />}
                {path == "services" && <Services />}
                {path == "contact" && <Contact />}
            </Box>
            <Footer />
        </StyleContainer>
    );
}