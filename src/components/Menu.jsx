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
        <nav>
            <div>
                <Logo />
            </div>
            <div>
                <div>
                    <form>
                        <input type="text" list="allItems" />
                        <datalist id="allItems">
                            {props.allItems.map(i => <option key={i.id} value={i.title} />)}
                        </datalist>
                    </form>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    allItems: state.allItems,
});

export default connect(mapStateToProps)(Menu)
