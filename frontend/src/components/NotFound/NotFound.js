import { Link } from 'react-router-dom';
import notFoundImage from "../../images/cat_404_link.png";

function NotFound() {
    return (
        <div className="not-found">
            <h1 className="not-found__error-type">404</h1>
            <p className="not-found__error-message">I'm really sorry, but you can't get this page. Maybe you haven't registered yet or such page does not exist!</p>
            <Link to="/" className="not-found__image-link">
                <img className="not-found__image" src={notFoundImage} alt="cat with tangle"></img>
            </Link>
        </div>
    )
}

export default NotFound;