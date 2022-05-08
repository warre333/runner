import React from 'react'

const styles = {
    height50vh: {
        height: "50vh",
    }
}

function About() {
  return (
    <div id="about" className="carousel slide" data-bs-ride="carousel" style={styles.height50vh}>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#about" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
            <button type="button" data-bs-target="#about" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
            <button type="button" data-bs-target="#about" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>

        <div className="carousel-inner" style={styles.height50vh}>
            <div className="carousel-item active" style={styles.height50vh}>
                <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

                <div className="container">
                    <div className="carousel-caption">
                        <h1>Example headline.</h1>
                        <p>Some representative placeholder content for the first slide of the carousel, with an image on the background.</p>
                        <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                    </div>
                </div>
            </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#about" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#about" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default About