function Portfolio() {
    return (
        <main className="container-fluid">
            <h1>Portfolio</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 text-center pt-4 pb-4">
                <div class="col">
                    <div class="card mx-auto">
                        <img src="./images/musik.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Musik</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto">
                        <img src="./images/prepAir.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">prepAir</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mx-auto">
                        <img src="./images/Weather_Dash.png" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Weather App</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>

        </main >
    )
}

export default Portfolio