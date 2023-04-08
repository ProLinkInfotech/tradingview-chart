import React from 'react'
import contect from '../Asset/Images/contect.png'
import contect2 from '../Asset/Images/contect2.png'


export default function Discount() {
    return (
        <div className='discount position-relative py-5'>
            <div className='discount-bg-left'>
                <img src={contect}/>
            </div>
            <div className='container py-5 '>
                <div className='row align-items-center'>
                    <div className='col-md-4'>
                        <h2 className='text-light pe-4'>Keep updated & get unlimited <span style={{ color: "#2aaa94" }}>discount</span></h2>
                    </div>
                    <div className='col-md-8'>
                        <div>
                        <input type='text' width='100%' placeholder='Enter your Email address ' className='discount-textbox position-relative'/>
                        </div>
                        <butoon className=' py-1 discount-btn'>
                            Sign up
                        </butoon>
                    </div>
                </div>
            </div>
            <div className='discount-bg-right'>
                <img src={contect2}/>
            </div>
        </div>
    )
}
