import PropTypes from "prop-types"

const Photo = ({ photo }) => {
    const server = photo.server;
    const secret = photo.secret;
    const id = photo.id;
    const alt = photo.title;

    return (
        <li>
            <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${alt}`} />
        </li>
    );
}


Photo.propTypes = {
    photo: PropTypes.object
}
export default Photo;