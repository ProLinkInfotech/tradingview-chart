
import React from 'react';
import logo from '../Asset/Images/logo.png'
import search from '../Asset/Images/search.png'
import shoppingcart from '../Asset/Images/shopping-cart.png'
import user from '../Asset/Images/user.png'


const Header = () => {

    return (
        <div>
            <div className="container">
                <nav>
                    <div className="menu d-flex justify-content-between align-items-center py-3">
                        <img src={logo} width="120px" className='logo' />
                        <ul className="d-flex list-unstyled">
                            <li><a href="#" className="text-decoration-none">Home</a></li>
                            <li><a href="/dashboard" className="text-decoration-none">Chart</a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="text-decoration-none">Course</a>
                                <div className="dropdown-menu">
                                    <ul className='list-unstyled'>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Courses List</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Courses Grid</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Courses Filter</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Course Single</a></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="dropdown">
                                <a href="#" className="text-decoration-none">Blog</a>
                                <div className="dropdown-menu ">
                                    <ul className='list-unstyled'>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Blog Grid</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Blog List</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Blog Mesonary</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Blog Minimal</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Blog Singla</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="text-decoration-none">Shop</a>
                                <div className="dropdown-menu ">
                                    <ul className='list-unstyled'>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Our Product</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Card </a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled"> WishList</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Check Out</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Product Details</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="text-decoration-none">Page</a>
                                <div className="dropdown-menu ">
                                    <ul className='list-unstyled'>
                                        <li><a href="#" className="text-decoration-none  list-unstyled">Zoom Meeting</a></li>
                                        <li><a href="#" className="text-decoration-none  list-unstyled">About</a></li>
                                        <li><a href="#" className="text-decoration-none  list-unstyled">Contect</a></li>
                                        <li><a href="#" className="text-decoration-none  list-unstyled">FAQ</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="text-decoration-none">Events</a>
                                <div className="dropdown-menu ">
                                    <ul className='list-unstyled'>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Events Grid</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Events List</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Events Mesonary</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Events Minimal</a></li>
                                        <li><a href="#" className="text-decoration-none list-unstyled">Events Singla</a></li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                        <div className="cart d-flex" >
                            <span className="call">
                                <a href='/'><img src={shoppingcart} width="30px" className='me-3'/></a>
                                <a href='/'><img src={user} width="30px" className='me-3'/></a>
                                <a href='/'><img src={search} width="30px" className='me-3'/></a>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
}
export default Header