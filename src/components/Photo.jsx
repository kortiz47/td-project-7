import PropTypes from "prop-types"

const Photo = ({ photoData }) => {
    const server = photoData.server;
    const secret = photoData.secret;
    const id = photoData.id;
    const alt = photoData.title;

    return (
        <li>
            <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={`${alt}`} />
        </li>
    );
}

Photo.propTypes = {
    photoData: PropTypes.object
}

export default Photo;