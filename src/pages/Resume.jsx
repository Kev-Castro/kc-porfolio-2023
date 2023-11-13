function Resume() {
    return (
        <main className="container-fluid">
            <div className="cardResume mx-auto my-auto">
                <div className="card-body">
                    <h5 className="card-title mt-4">My Resume</h5>

                    <p className="card-text">I look forward to working alongside with you all!</p>
                    <hr className="my-4"></hr>

                    <p className="card-text">You can download my resume down below by clicking the button.</p>
                    <a href="./images/KevinCastro.pdf" download="KevinCastro.pdf" className="btn btn-primary">Download Resume</a>

                </div>
                <img src="./images/KC_resume_23-1.png" className="card-img-top img-fluid" alt="resume"></img>
            </div>



        </main>
    )
}

export default Resume