import resume from '../../images/Kevin_Castro_Resume.png'

function Resume() {
    return (
        <main className="container-fluid">
            <div className="cardResume mx-auto my-auto">
                <div className="card-body mb-3">
                    <h3 className="card-title mt-4">My Resume</h3>
                    <hr className="my-5"></hr>
                    <p className="card-text mt-3">I look forward to working alongside you all!</p>

                    <p className="card-text">You can download my resume down below by clicking the button.</p>
                    <a href="./images/KevinCastro.pdf" download="KevinCastro.pdf" className="btn btn-dark">Download Resume</a>

                </div>
                <img src={resume} className="card-img-top img-fluid" alt="resume"></img>
            </div>



        </main>
    )
}

export default Resume