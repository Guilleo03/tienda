import Logo from './Logo'
import { connect } from "react-redux";
import { useEffect } from 'react'


const Menu = (props) => {

    useEffect(() => {
        getAllItems();
    }, [])

    const getAllItems = e => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => props.dispatch({
                type: "GET_ALL_ITEMS",
                payload: json,
            }))
    }

    return (
        <nav className="container">
            <div>
                <Logo />
            </div>
            <div id="navLinks">
                <div id="searchInput">
                    <form>
                        <div>
                            <span class="material-icons-outlined">search</span>
                            <input type="text" list="allItems" />
                        </div>
                        <datalist id="allItems">
                            {props.allItems.map(i => <option key={i.id} value={i.title} />)}
                        </datalist>
                    </form>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Catalogue</li>
                        <li>Contact</li>
                        <li>
                            <span class="material-icons-outlined">shopping_cart</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    allItems: state.allItems,
});

export default connect(mapStateToProps)(Menu)
