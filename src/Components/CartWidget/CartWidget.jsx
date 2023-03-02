import React from 'react'

const CartWidget = () => {
    return (
        <li>
            <a className="linkCarrito botonMenu" href="#">
                <i className="bi bi-cart-fill"></i><span id="numeroCarritoIndex"
                    className="numeroEnCarrito">7</span>
            </a>
        </li>
    )
}

export default CartWidget