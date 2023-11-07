import { useParams } from "react-router-dom";
import Photo from "./Photo.jsx";
import PropTypes from "prop-types"
import Loading from "./Loading.jsx"

const PhotoList = ({ photos, title, isLoading }) => {
    const { query } = useParams();
    if (isLoading) {
        return (<Loading />)
    } else {
        if (photos.length === 0 && query) {
            return (
                <div className="photo-container">
                    <li className="not-found">
                        <h3>No Results Found</h3>
                        <p>You search did not return any results. Please try again.</p>
                    </li>
                </div>
            );
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
            console.log(query)
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
}


PhotoList.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    isLoading: PropTypes.bool
}
export default PhotoList;