import HostelList from './HostelList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data:hostels, isLoading, error } = useFetch('http://localhost:8000/hostels');

    return ( 
        <div className="home">
          {error && <div>{error}</div>}
          {isLoading && <div>Loading...</div>}
          {hostels && <HostelList hostels ={hostels} title="All hostels!" />}
        </div>
     );
}
 
export default Home;