import React from 'react'

const styles = {
    feature_icon: {
        marginRight: "10px",
        fontSize: 50,
    }, 

    bg: {
        backgroundColor: "#F2F2F2",
    },
}

function Features() {
  return (
    <div className="">
        <div className="" style={styles.bg}>
            <div className="container px-4 py-5" id="features">
                <h2 className="pb-2 border-bottom text-center">Features</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-key-fill" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-cpu-fill" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-calendar3-fill" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-shield-x" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-speedometer2" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-toggles2" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-geo-fill" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <i className="bi bi-tools" style={styles.feature_icon}></i>
                        <div>
                        <h4 className="fw-bold mb-0">Featured title</h4>
                        <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div style={{height: "150px", overflow: "hidden"}}>
            <svg viewBox="0 0 500 200" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                <path d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z" style={{stroke: "none", fill: "#F2F2F2"}}></path>
            </svg>
        </div>
    </div>
    
  )
}

export default Features