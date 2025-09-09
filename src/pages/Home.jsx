import NavBar from '../components/NavBar'
import ProductCard from '../components/ProductCard'

const Home = ({greeting}) => {
    return (
        <div>
            <h2>{greeting}</h2>
            <ProductCard />
        </div>
        
    )
}

export default Home;