function NotFoundUser() {
    return (
        <div className="not-found-user">
            <h1 className="not-found-user__error-type">404</h1>
            <p className="not-found-user__error-message">
                I'm so sorry, but this user is not found. Use the right link and try again. 
                Or maybe server is not working.
            </p>
        </div>
    )
}

export default NotFoundUser;