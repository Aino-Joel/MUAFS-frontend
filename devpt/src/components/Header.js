import { Link } from "react-router-dom";

function Header() {
  return (
    
    <div className='Header'>
        
      <Link to={'/'}>Home</Link>
      <Link to={'/hostels'}>Hostels</Link>
      <Link to={'/ratings'}>Ratings And Reviews</Link>
      <Link to={'/services'}>Sign Up</Link>
     
    </div>
  );
}

export default Header;
