function Portfolio() {
    return (
        <main className="container-fluid">
            <h1>Portfolio</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center pt-4 pb-4">
                <div className="col">
                    <a href="https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/" target="_blank" className="card mx-auto">
                        <img src="./images/musik.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Musik</h5>
                            <p className="card-text">Musik is an app to connect users who will be able to share songs and posts with each other. We want to create a community of music lovers who have similar interests. As fellow music lovers we want to have create a place just for music. This project was built to have like minded individuals to come together and create a community. Musik brings users to meet and post about music others are listening to. We learned how to make a social media hub for only music lovers.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://kev-castro.github.io/prepAir/" target="_blank" className="card mx-auto">
                        <img src="./images/prepAir.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">prepAir</h5>
                            <p className="card-text">prepAir arms consumers with travel-related insight ahead of time ultimately allowing you to sit back, relax, and flip that out of office switch. You'll know before you go from weather statistics to surrounding towns, landmarks, and local hot spots via our interactive map.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://kev-castro.github.io/weather_dashboard_challenge/" target="_blank" className="card mx-auto">
                        <img src="./images/Weather_Dash.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">This Webpage allows those who visit the chance to look up a City and get the current weather and also the 5 day weather forecast, it will also save your recent searches and populate them as button to go back to if need be.</p>
                        </div>
                    </a>
                </div>
            </div>

        </main >
    )
}

export default Portfolio