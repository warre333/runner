import React from 'react'

const styles = {
    form: {
        marginTop: "5vh",
    },

    topMargin: {
        marginTop: "1vh",
    },
}

function LoginForm() {
  return (
    <div className="w-50 container">
        <form style={styles.form}>
            <h1 className="h3 mb-3 fw-normal text-center">Register</h1>

            <div className="form-floating" style={styles.topMargin}>
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating" style={styles.topMargin}>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating" style={styles.topMargin}>
                <input type="confirmpassword" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
                <label htmlFor="floatingConfirmPassword">Confirm Password</label>
            </div>

            {/* <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div> */}

            <button className="w-100 btn btn-lg btn-primary" type="submit" style={styles.topMargin}>Register</button>
            <h4 className="h5 fw-normal text-center" style={styles.topMargin}>Or login <a href="./login">here</a></h4>
        </form>
    </div>
  )
}

export default LoginForm