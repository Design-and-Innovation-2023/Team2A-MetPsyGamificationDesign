import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-photo-view/dist/react-photo-view.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Proud } from "./pages/Proud";
import { Home } from "./pages/Home";
import { ProblemExplanation } from "./pages/ProblemExplanation";
import { IdeaExploration } from "./pages/IdeaExploration";
import { ChosenIdea } from "./pages/ChosenIdea";
import { PitchVideos } from "./pages/PitchVideos";
import { TeamBriefs } from "./pages/TeamBriefs";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
    return (
        <Router basename="/Team2A-MetPsyGamificationDesign">
            <ScrollToTop>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="proud" element={<Proud />} />
                        <Route
                            path="ProblemExplanation"
                            element={<ProblemExplanation />}
                        />
                        <Route
                            path="IdeaEvolution"
                            element={<IdeaExploration />}
                        />
                        <Route path="FinalDesign" element={<ChosenIdea />} />
                        <Route path="pitchvideos" element={<PitchVideos />} />
                        <Route path="teambriefs" element={<TeamBriefs />} />
                    </Routes>
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
