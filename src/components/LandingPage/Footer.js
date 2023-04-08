import React from 'react'
import logo from '../Asset/Images/logo.png'

export default function Footer() {
    return (
        <div className='container'>
            <div className='row align-items-center py-5'>
                <div className='col-md-3'>
                    <p>
                        <span style={{ color: "#2aaa94" }} className='display-1 fw-bolder'>
                            M
                        </span>
                        Well, the way they make shows is, they make one show. That show’s called a pilot. Then they show that show to the people who make
                    </p>
                    <a href='/' className='text-decoration-none text-dark fw-bold'>About Me </a>
                </div>
                <div className='col-md-2'>
                    <ul>
                        <li className='list-unstyled'>
                            <h5>Top Categories</h5>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Project Management </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Web Design </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Digital Marketing </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Business Analysis </h6>
                        </li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul>
                        <li className='list-unstyled'>
                            <h5>Suppost</h5>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Faqs </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'>Contect us</h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'>Use of term </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Privecy policy </h6>
                        </li>
                    </ul>
                </div>
                <div className='col-md-2'>
                    <ul>
                        <li className='list-unstyled'>
                            <h5>Top Categories</h5>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Dribble </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'>Facebook </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> instagram </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> Bihance </h6>
                        </li>
                    </ul>
                </div>
                <div className='col-md-3'>
                  <div className='text-center'>
                  <img src={logo} width='60px' />
                    <ul>
                        <li className='list-unstyled pt-3'>
                            <h6 className='text-secondary'>  Barcelona, Central Park.  </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'> +34 112 233 3776  </h6>
                        </li>
                        <li className='list-unstyled'>
                            <h6 className='text-secondary'>  info@mudrib.org  </h6>
                        </li>

                    </ul>
                  </div>
                </div>
            </div>
        </div>
    )
}
