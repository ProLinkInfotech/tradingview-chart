import React, { useEffect, useState } from 'react'
import t1 from '../Asset/Images/t1.jpg'
import t2 from '../Asset/Images/t2.jpg'
import t3 from '../Asset/Images/t3.jpg'
import t4 from '../Asset/Images/t4.jpg'
import dot1 from '../Asset/Images/dot1.png'
import dot2 from '../Asset/Images/dot2.png'
import boxbg from '../Asset/Images/testimonial-small.png'

export default function Testimonial() {
    const [sliderCount, setSliderCount] = useState([
        {
            image1: t1,
            content1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius neque  recusandae ut perspiciatis, nam quaerat qui illum",
            name1: "Robort C. Simmon",
            position1: "Student",
            image2: t2,
            content2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
            name2: "Arya Mekdy",
            position2: "Project Manager",
        },
        {
            image1: t3,
            content1: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            name1: "Fatimma Mahamoud",
            position1: "Project Manager",
            image2: t4,
            content2: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point  form",
            name2: "Chris L. Wegner",
            position2: "Manager",
        }])
    const [currentSlide, setCurrentSlide] = useState(0)
    setInterval(() => {
        if (currentSlide == sliderCount.length - 1) {
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }
    }, 5000)


    return (
        <div className='testimonial'>
            <div class="container py-5">
                <div class="company-title pt-5  text-center">
                    <p style={{ color: "#909090" }} className='fs-6'>NOTHING IS IMPOSSIBLE, THE WORD ITSELF SAYS 'I'M POSSIBLE'!</p>
                    <h2 className='fs-2'>Testimonials are enough to<br /> <span style={{ color: "#2658ce" }}>convince</span> people for now.</h2>
                </div>
                {
                    sliderCount.map((slide, i) =>
                        <div class="row" style={{ display: currentSlide == i ? "inline-flex" : "none", }}>
                            <div class="col-md-6">
                                <div class="company-content d-flex align-items-start position-relative">
                                    <img src={boxbg} width='100px' className='box-bg' />
                                    <div>
                                        <img src={slide.image1} width='100px' style={{ borderRadius: "50%", marginRight: "15px" }} />
                                    </div>
                                    <div>
                                        <p className='fs-6 lh-base'>{slide.content1}</p>

                                        <div class="company-customer  d-flex">
                                            <div class="company-img">
                                                <img src="images/about-company.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: "#2aaa94", marginBottom: "0" }} className='fs-6 fw-bold'>{slide.name1}</p>
                                                <p style={{ color: "#909090" }} > student</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-6">
                                <div class="company-content d-flex align-items-start position-relative">
                                    <img src={boxbg} width='100px' className='box-bg' />
                                    <div>
                                        <img src={slide.image2} width='100px' style={{ borderRadius: "50%", marginRight: "15px" }} />
                                    </div>
                                    <div>
                                        <p className='fs-6 lh-base'>{slide.content2}</p>

                                        <div class="company-customer  d-flex">
                                            <div class="company-img">
                                                <img src="images/about-company.jpg" alt="" />
                                            </div>
                                            <div>
                                                <p style={{ color: "#2aaa94", marginBottom: "0" }} className='fs-6 fw-bold'>{slide.name2}</p>
                                                <p style={{ color: "#909090" }} > Project Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }
                {
                    sliderCount.map((slide, i) =>
                        <img src={i == currentSlide ? dot1 : dot2} width='20px' style={{ margin: "0 5px" }} />
                    )
                }
            </div>
        </div>
    )
}
