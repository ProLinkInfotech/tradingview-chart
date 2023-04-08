import React from 'react'
import news1 from '../Asset/Images/n1.jpg'
import news2 from '../Asset/Images/n2.jpg'
import news3 from '../Asset/Images/n3.jpg'
import play from '../Asset/Images/play.png'

export default function News() {
    return (
        <div>
            <div className="news text-center py-5">
                <div className="container">
                    <div className="news-title text-align-center py-3 pb-5">
                        <h6 style={{ color: "#909090" }} className='fs-6'> New is a concept </h6>
                        <h3> Ring and bring a good <span style={{ color: "#2658ce" }}>News</span>.</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="news-content text-center ">
                                <div className="news-img">
                                    <img src={news1} />
                                    <div className="text-light news-content-layer flex-column">
                                        <a href='/' className='text-decoration-none text-light fs-5'>Project Management</a>
                                        <h4>How to Formulate a Successful Business Strategy</h4>
                                        <p className='fs-5'> Continue reading </p>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <span>
                                        <a href="#" style={{ color: "#2aaa94" }} className='text-decoration-none fe-bolder'>DIGITAL MARKETING</a>
                                    </span>
                                    <h4>How to formute succsessful stretargy</h4>
                                    <span className="d-flex user justify-content-center">
                                        <p style={{ borderRight: "1px solid grey", paddingRight: "10px" }}>27 july 2022</p>
                                        <p>COMMENT (1)</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="news-content">
                                <div className="news-img">
                                    <img src={news2} />
                                    <div className="text-light news-content-layer flex-column">
                                        <a href='/' className='text-decoration-none text-light fs-5'>Project Management</a>
                                        <h4>How to Formulate a Successful Business Strategy</h4>
                                        <p className='fs-5'> Continue reading </p>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <span>
                                        <a href="#" style={{ color: "#2aaa94" }} className='text-decoration-none fe-bolder'>DIGITAL MARKETING</a>
                                    </span>
                                    <h4>How to formute succsessful stretargy</h4>
                                    <span className="d-flex user justify-content-center">
                                        <p style={{ borderRight: "1px solid grey", paddingRight: "10px" }}>27 july 2022</p>
                                        <p>COMMENT (1)</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="news-content">
                                <div className="news-img">
                                    <img src={news3} />
                                    <div className="text-light news-content-layer flex-column">
                                        <a href='/' className='text-decoration-none text-light fs-5'>Project Management</a>
                                        <h4>How to Formulate a Successful Business Strategy</h4>
                                        <p className='fs-5'> Continue reading </p>
                                    </div>
                                </div>
                                <div className="news-item">
                                    <span>
                                        <a href="#" style={{ color: "#2aaa94" }} className='text-decoration-none fe-bolder'>DIGITAL MARKETING</a>
                                    </span>
                                    <h4>How to formute succsessful stretargy</h4>
                                    <span className="d-flex user justify-content-center">
                                        <p style={{ borderRight: "1px solid grey", paddingRight: "10px" }}>27 july 2022</p>
                                        <p>COMMENT (1)</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </div >

        </div>
    )
}
