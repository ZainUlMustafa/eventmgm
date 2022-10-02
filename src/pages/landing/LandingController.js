import LandingEventCard from "./LandingEventCard";
import { Link } from "react-router-dom";
import * as ROUTES from '../../constants/routes';

function LandingController() {
    return (
        <>
            <div className="large-sc-container p-5">
                <div className="container">
                    <div className="d-flex align-items-center flex-column">
                        <p className="title">Imagine if</p>
                        <p className="title-grad">Snapchat</p>
                        <p className="title">had events.</p>
                        <p className="desc">Easily host and share events with your friends across any social media.</p>


                        <LandingEventCard />
                        <br />
                        <Link style={{ textDecoration: 'none' }} to={ROUTES.CREATE}>
                            <button className="btn-dark-blue">
                                <span className="btn-text">🎉 Create my event</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="not-large-sc-container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <LandingEventCard />
                        </div>
                        <div className="col">
                            <div style={{ margin: 170 }}></div>
                            <div className="d-flex align-items-end flex-column">
                                <p className="title">Imagine if</p>
                                <p className="title-grad">Snapchat</p>
                                <p className="title">had events.</p>
                                <p className="desc-align-end">Easily host and share events with your friends across any social media.</p>

                                <br />
                                <Link style={{ textDecoration: 'none' }} to={ROUTES.CREATE}>
                                    <button className="btn-dark-blue">
                                        <span className="btn-text">🎉 Create my event</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingController;