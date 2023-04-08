import React, { useState } from 'react'
import Header from '../LandingPage/Header';
import Footer from '../LandingPage/Footer';
import downArrow from '../Asset/Images/downArrow.png';
import upArrow from '../Asset/Images/upArrow.png';
import youtube from '../Asset/Images/youtube.png';


const step = [
    {
        courseName: "Introductory Forex Course",
        data: [
            {
                lessonName: "1. Spot market trends and how to profit from them",
                time: '18min'
            },
            {
                lessonName: "2. Understand what it takes to become a successful trader.",
                time: '18min'
            },
            {
                lessonName: "3. Use the fundamental tools our asset management company uses",
                time: '13min'
            },
        ]
    },
    {
        courseName: "Forex Trading For Beginners",
        data: [
            {
                lessonName: "1. Understand how to trade The Forex market",
                time: '10min'
            },
            {
                lessonName: "2. Learn how to place a trade on the Forex market",
                time: '15min'
            },
            {
                lessonName: "3. Learn how you can earn money trading Forex",
                time: '14min'
            },
            {
                lessonName: "4. Understand the significance of trend lines",
                time: '15min'
            },
        ]
    },
    {
        courseName: "The complete forex course from scratch to professional",
        data: [
            {
                lessonName: "1. Have a full understanding of how the Forex Market operates",
                time: '11min'
            },
            {
                lessonName: "2. Understand what pip is and how to calculate it",
                time: '12min'
            },
            {
                lessonName: "3. Understand what short selling and long buying",
                time: '12min'
            },
            {
                lessonName: "4. You will learn how to Select a Forex Broker for your account",
                time: '12min'
            },
            {
                lessonName: "5.You will see live trading by the strategy with real money",
                time: '12min'
            },
        ]
    },

]

const Course = () => {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = React.useState(0);

    // const handleClick = () => {
    //     setOpen(!open);
    // };

    return (
        <div>
            <Header />
            <div className=' p-5' style={{ display: 'flex', alignItems: 'center' }}>
                <div className='row'>
                    <div className='col-md-8'>
                        {isActive == 0 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/927328362/video/businessman-with-forex-investment.mp4?s=mp4-640x640-is&k=20&c=QaZFDUYHbH2PqO9o3nK3WKhQqPTPXmkXlIMBhEQOveg=" width='900px' height='600px'  ></video> */}
                                <iframe width='900px' height='600px' src="https://www.youtube.com/embed/FoXdLC-g7hM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                                </h6>
                            </div>
                            : ''}
                        {isActive == 1 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/1363030919/video/people-working-at-stock-exchange.mp4?s=mp4-640x640-is&k=20&c=eRBOjK1QGK0WVrpshDQbZlZaZC__txVp-IwBb6HDtD8=" width='900px' height='600px'  ></video> */}
                                <iframe width='900px' height='600px' src="https://www.youtube.com/embed/_o5Igv2QtHA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                </h6>
                            </div>
                            : ''
                        }
                        {isActive == 2 ?
                            <div style={{ marginLeft: "h6" }}>
                                {/* <video controls loop src="https://media.istockphoto.com/id/1294396594/video/businesssman-using-chart-and-graph-to-trading-in-stock-and-cryptocurrency-after-blobal.mp4?s=mp4-640x640-is&k=20&c=E0_lczgGPshOBHhuSzK6u0n0ql8IuPWR6Gbg-L4afXk=" width='900px' height='600px'  ></video> */}
                                <iframe width='900px' height='600px' src="https://www.youtube.com/embed/iXN9FqGOQWM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                                </h6>
                            </div>
                            : ''
                        }
                        {isActive == 3 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/896267334/video/stock-market-concept.mp4?s=mp4-640x640-is&k=20&c=JHRY8BMevpxjGuE4ny46cChYn24ht8GwPPdPFM6RooA=" width='900px' height='600px'  ></video> */}
                                <iframe width='900px' height='600px' src="https://www.youtube.com/embed/e9_B11RS_gc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </h6>
                            </div>
                            : ''
                        }
                        {isActive == 4 ?
                            <div>
                                {/* <video controls loop src="https://media.istockphoto.com/id/1316521847/video/trading-on-stock-exchange.mp4?s=mp4-640x640-is&k=20&c=PZOkyfMgNIOAw9j1_3hXV1i25hyRI1z2dGkO20lRWZg=" width='900px' height='600px'  ></video> */}
                                <iframe width='900px' height='600px' src="https://www.youtube.com/embed/hZUMOKzeq8U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <h6 className='pt-4 lh-lg'>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </h6>
                            </div>
                            : ''
                        }
                    </div>
                    <div className='col-md-4'>
                        <div className='border h-100'>
                            {step.map((item, i) => (
                                <div key={i} className='px-3 py-2'>
                                    <h5 className='border-bottom d-flex justify-content-between' onClick={() => setOpen(i)}>
                                        <p style={{ cursor: "pointer" }}>{item.courseName}  </p>
                                        <p>{open == i ? <img src={upArrow} width='25px' /> : <img src={downArrow} width='25px' />}</p>
                                    </h5>
                                    {open == i &&
                                        <div >
                                            {item.data.map((dataitem, index) =>
                                            (
                                                <div key={i} >
                                                    <div onClick={() => setIsActive(index)}>
                                                        <p style={{ cursor: "pointer" }}>{dataitem.lessonName}</p>
                                                        <p><img src={youtube} width='25px' />  {dataitem.time}</p>
                                                    </div>
                                                </div>
                                            )
                                            )}
                                        </div>
                                    }
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

