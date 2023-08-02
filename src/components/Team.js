import mz from "../assets/team_img/Mz.jpg";
import ax from "../assets/team_img/ax.png";
import dar from "../assets/team_img/Darren.png";
import ml from "../assets/team_img/Mingle.png";
import ty from "../assets/team_img/tanyi.png";
import cm from "../assets/team_img/CheangMing.jpg";
import "../Model3.css";
import "react-multi-carousel/lib/styles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Team = () => {
    const MirzalinkedInProfileUrl = "https://www.linkedin.com/in/mirza-aljaru/";
    const DarrenlinkedInProfileUrl =
        "https://www.linkedin.com/in/darren-quek-ser-wee-54863a167/";
    const QxlinkedInProfileUrl = "https://www.linkedin.com/in/qxang/";
    const MLlinkedInProfileUrl =
        "https://sg.linkedin.com/in/soh-ming-le-529082153";
    const tylinkedInProfileUrl = "https://www.linkedin.com/in/tanyi47/";
    const CMlinkedInProfileUrl = "https://www.linkedin.com/in/cheo-cheang-ming";

    return (
        <div id="team">
            <h1 className="model-title">Meet the Team</h1>
            <p className="team-p">
                Discover the masterminds crafting digital excellence.
            </p>
            <p className="team-p">Hover over the cards to find out more.</p>
            <div className="divider"></div>
            <div className="members">
                <div className="member">
                    <img width={200} height={200} src={ax} alt="Quan Xing" />
                    <div className="description">
                        <br></br>
                        <h1>Ang Quan Xing</h1>
                        <h2>Project Manager</h2>

                        <div className="social-media">
                            <a
                                href={QxlinkedInProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <img width={200} height={200} src={mz} alt="Mirza" />
                    <div className="description">
                        <br></br>
                        <h1>Mirza Aljaru</h1>
                        <h2>Developer</h2>

                        <div className="social-media">
                            <a
                                href={MirzalinkedInProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <img width={250} height={250} src={dar} alt="Darren" />
                    <div className="description">
                        <br></br>
                        <h1>Darren Quek</h1>
                        <h2>Developer</h2>

                        <div className="social-media">
                            <a
                                href={DarrenlinkedInProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <img width={200} height={200} src={ml} alt="Ming Le" />
                    <div className="description">
                        <br></br>
                        <h1>Ming Le</h1>
                        <h2>Designer</h2>

                        <div className="social-media">
                            <a
                                href={MLlinkedInProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <img width={200} height={200} src={ty} alt="Tan Yi" />
                    <div className="description">
                        <br></br>
                        <h1>Tan Yi</h1>
                        <h2>Developer</h2>

                        <div className="social-media">
                            <a
                                href={tylinkedInProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="member">
                    <img width={200} height={200} src={cm} alt="Cheang Ming" />
                    <div className="description">
                        <br></br>
                        <h1>Cheang Ming</h1>
                        <h2>Designer</h2>

                        <div className="social-media">
                            <a
                                href={CMlinkedInProfileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
