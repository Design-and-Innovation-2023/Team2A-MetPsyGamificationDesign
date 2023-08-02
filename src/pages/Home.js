import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Team } from "../components/Team";
import { Project } from "../components/Project";
import { ReflectionSection } from "../components/ReflectionSection";
import { Footer } from "../components/Footer";
import { Poster } from "../components/Poster"
export const Home = () => {
    return (
        <>
            <div className="home-div-wrapper">
                <NavBar />
                <Banner />
                <Project />
                <Poster />
                <ReflectionSection />
                <Team />
                <Footer />
            </div>
        </>
    );
};
