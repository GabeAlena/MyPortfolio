import loadingImage from "../../images/loading.JPG";

function Loading() {
    return (
        <div className="loading">
            <h1 className="loading__error-type">Just wait a second.</h1>
            <p className="loading__error-message">
                I'm working on loading this profile.
            </p>
            <img className="loading__image" src={loadingImage} alt="loading"></img>
        </div>
    )
}

export default Loading;