import musik from '../../images/musik.png'
import prepAir from '../../images/prepAir.png'
import yokai from '../../images/logo.png'
import CS from '../../images/coming_soon.gif'

function Portfolio() {
    return (
        // NEED TO ADD 3 MORE PROJECTS (COULD BE FAKE)
        <main className="container-fluid">
            <h1>Portfolio</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-center pt-4 pb-4">
                <div className="col">
                    <a href="https://arcane-refuge-32686-92d3868f1b08.herokuapp.com/" target="_blank" className="card mx-auto">
                        <img src={musik} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Musik</h5>
                            <p className="card-text">Musik is an app designed to bring together all music lovers through one social media hub. Allows users to sample and share songs that pique their interest with fellow music enthusiasts through their profile. All choices are automatically pinned to their account and home page.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://kev-castro.github.io/prepAir/" target="_blank" className="card mx-auto">
                        <img src={prepAir} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">prepAir</h5>
                            <p className="card-text">prepAir arms consumers with travel-related insight ahead of time ultimately allowing you to sit back, relax, and flip that out of office switch. Know before you go from weather statistics to surrounding towns, landmarks, and local hot spots via our interactive map.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://nameless-mesa-64050-dec54f78b1de.herokuapp.com/" target="_blank" className="card mx-auto">
                        <img src={yokai} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Yokai</h5>
                            <p className="card-text">Yokai gives consumers an easy to access wishlists of other uses and also products to add to their very own! You'll easily navigate throught Yokai to make an account for yourself and begin making those easy to access lists you can always come back to.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/Kev-Castro" target="_blank" className="card mx-auto">
                        <img src={CS} className="card-img-top CS" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">In Progress!</h5>
                            <p className="card-text">This App is in development and will be updated once completed.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/Kev-Castro" target="_blank" className="card mx-auto">
                        <img src={CS} className="card-img-top CS" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">In Progress!</h5>
                            <p className="card-text">This App is in development and will be updated once completed.</p>
                        </div>
                    </a>
                </div>
                <div className="col">
                    <a href="https://github.com/Kev-Castro" target="_blank" className="card mx-auto">
                        <img src={CS} className="card-img-top CS" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">In Progress!</h5>
                            <p className="card-text">This App is in development and will be updated once completed.</p>
                        </div>
                    </a>
                </div>
            </div>


        </main >
    )
}

export default Portfolio