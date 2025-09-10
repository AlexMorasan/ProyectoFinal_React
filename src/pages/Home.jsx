import ItemListContainer from '../components/ItemListContainer';
import './pages.css'

const Home = ({greeting}) => {
    return (
        <div className='prueba'>
            <h2>{greeting}</h2>
            <div >
                <ItemListContainer />
            </div>
        </div>
        
    )
}

export default Home;