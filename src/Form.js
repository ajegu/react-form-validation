import React from 'react'

const Form = ({onChange, email, password, formValid}) => {
    return (
        <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>
                <label htmlFor="inputEmail" className="sr-only ">Email address</label>
                <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" required
                       autoFocus value={email}
                       onChange={ onChange }
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required
                       value={password}
                       onChange={ onChange }
                />
                <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={!formValid}>Sign in</button>
            </form>
        </div>
    )
}

export default Form