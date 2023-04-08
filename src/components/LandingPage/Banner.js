import React from 'react'
import banner1 from "../Asset/Images/banner1.png"
import banner2 from "../Asset/Images/banner2.png"
import bannersmallimg from "../Asset/Images/banner-small-img.png"

export default function Banner() {
    return (
        <div>
            <div className='banner'>
                <div className='container d-flex align-items-center pt-5'>
                    <div className='mt-5'>
                        <h5 className='text-light' style={{ letterSpacing: "3px" }}>Successful coaches are visionaries </h5>
                        <h2 className='display-3 fw-bold text-light py-3'>Good
                            <span style={{ color: "#2aaa94" }}>coaching</span>
                            <br />
                            is good teaching
                            <br />
                            & nothing else.
                        </h2>
                        <p className='text-light fs-5 ps-3 ' style={{ borderLeft: "3px solid #2aaa94" }}>In a coaching role, you ask the questions and rely<br /> more on your staff, who become the experts, to<br /> provide the information. </p>
                        <div className='d-flex justify-content-between pt-4'>
                            <button className='banner-btn '>View Courses </button>
                            <a className='banner-link text-decoration-none text-light p-0'>Get Free Consultation</a>
                        </div>
                    </div>
                    <div className='position-relative '>
                        <div className='banner-girl-img'>
                            <img src={banner1 } />
                        </div>
                        <div className='banner-right-img'>
                            <img src={banner2 } />
                        </div>
                        <div className='banner-small-img'>
                            <img src={bannersmallimg } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
