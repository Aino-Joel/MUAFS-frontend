import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const HostelDetails = () => {
    const { id } = useParams();
    const { data:hostel, error, isLoading } = useFetch('http://localhost:8000/hostels/'+id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/hostels/'+ hostel.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className="hostel-details">
            { isLoading && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { hostel && (
                <article>
                    <h2>{ hostel.name }</h2>
                    <p>Owned By: { hostel.custodian }</p>
                    <div>Number of Rooms: { hostel.rooms }</div>
                </article>
            )}
        </div>
     );
}
 
export default HostelDetails;