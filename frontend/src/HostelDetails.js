import useFetch from "./useFetch";

const HostelDetails = () => {
    const { data:hostel, error, isLoading } = useFetch('http://localhost:8000/hostels/'+id);

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