function Portfolio() {
    return (
        // NEED TO ADD 3 MORE PROJECTS (COULD BE FAKE)
        <main className="container-fluid">
            <h1>Portfolio</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-center pt-4 pb-4">
                <div className="col">
                    <a href="https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/" target="_blank" className="card mx-auto">
                        <img src="./images/musik.png" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Musik</h5>
                            <p className="card-text">Musik is an app designed to bring together all music lovers through one social media hub. Allows users to sample and share songs that pique their interest with fellow music enthusiasts through their profile. All choices are automatically pinned to their account and home page.</p>
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
                    <a href="https://github.com/Kev-Castro" target="_blank" className="card mx-auto">
                        <img src="./images/coming_soon.gif" className="card-img-top CS" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">In Progress!</h5>
                            <p className="card-text">This App is in devlopment and will be updated once completed.</p>
                        </div>
                    </a>
                </div>
            </div>

        </main >
    )
}

export default Portfolio