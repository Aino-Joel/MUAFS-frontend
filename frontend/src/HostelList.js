import { Link } from "react-router-dom";

const HostelList = ({ hostels, title}) => {
    return ( 
        <div className="hostel-list">
             <h2>{title}</h2>
             {hostels.map((hostel) => (
                <div className="hostel-preview" key={hostel.id}>
                    <Link to = {`/hostels/${hostel.id}`}>
                        <h2>{hostel.name}</h2>
                        <p>Owned By {hostel.custodianr}</p>
                    </Link>
                </div>
                ))}
        </div>
     );
}
 
export default HostelList;