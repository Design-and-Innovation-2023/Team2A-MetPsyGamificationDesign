import poster from "../assets/img/Group2A_Poster.png";
import "animate.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

export const Poster = () => {
    return (
        <section className="poster" id="poster">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <PhotoProvider>
                            <PhotoView src={poster}>
                                <img
                                    src={poster}
                                    className="d-block mx-lg-auto img-fluid poster-img"
                                    alt="Team 2A Poster"
                                    width="700"
                                    height="500"
                                    loading="lazy"
                                />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">
                            Team 2A Poster
                        </h1>
                        <p className="lead">
                            Check out our poster showcasing the designs we came
                            up with!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
