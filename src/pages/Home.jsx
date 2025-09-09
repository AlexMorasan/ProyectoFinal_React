import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'

const Home = ({greeting}) => {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemListContainer />
        </div>
        
    )
}

export default Home;