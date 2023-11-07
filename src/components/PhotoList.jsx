import { useParams } from "react-router-dom";
import NoResults from "./NoResults.jsx";
import Photo from "./Photo.jsx";
import PropTypes from "prop-types"

const PhotoList = ({ photos, title }) => {
    const { query } = useParams();
    if (photos.length === 0 && query) {
        return (<NoResults />);
    } else if (!query) {
        return (
            <div className="photo-container">
                <h2>{title}</h2>
                <ul>
                    {photos.map(photo => <Photo key={photo.id} photoData={photo} />)}
                </ul>
            </div>
        );
    } else {
        return (
            <div className="photo-container">
                <h2>{query} Pictures</h2>
                <ul>
                    {photos.map(photo => <Photo key={photo.id} photoData={photo} />)}
                </ul>
            </div>
        );
    }
}


PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    isLoading: PropTypes.bool
}
export default PhotoList;