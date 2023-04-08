import React, { useEffect, useState } from 'react'

export default function Table() {
    const [liveData, setLiveData] = useState([])
    const [Eur, setEur] = useState({price: 0, level: 'UP'})
    const [Jpy, setJpy] = useState({price: 0, level: 'UP'})
    const [Gbp, setGbp] = useState({price: 0, level: 'UP'})
    const [Chf, setChf] = useState({price: 0, level: 'UP'})
    const [Cad, setCad] = useState({price: 0, level: 'UP'})
    const [AudChf, setAudChf] = useState({price: 0, level: 'UP'})
    const [Cnh, setCnh] = useState({price: 0, level: 'UP'})
    const [Czk, setCzk] = useState({price: 0, level: 'UP'})
    let lastEur = 0
    let lastJpy = 0
    let lastGbp = 0
    let lastChf = 0
    let lastCad = 0
    let lastAudChf = 0
    let lastCnh = 0
    let lastCzk = 0
    useEffect(() => {
        const ws = new WebSocket(
            "wss://ws.finnhub.io?token=cgnuhdhr01qvubp37aigcgnuhdhr01qvubp37aj0"
        );
        ws.addEventListener('open', function (event) {
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:EUR_USD' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_JPY' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:GBP_USD' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:USD_CHF' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CAD' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CHF' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CNH' }))
            ws.send(JSON.stringify({ 'type': 'subscribe', 'symbol': 'OANDA:AUD_CZK' }))
        });

        // Listen for messages
        ws.addEventListener('message', function (event) {
            setLiveData(JSON.parse(event.data).data)
            console.log('Message from server ', JSON.parse(event.data).data);
            const allEventData = JSON.parse(event.data).data
            // allEventData && allEventData.length > 0 && allEventData.map((mainVal) =>{
            //     allData.map((val)=>{
            //         if(val.name == mainVal.s){
            //             val.price = mainVal.s
            //         }
            //         dataVal.push(val)
            //     })
            // })
             allEventData && allEventData.length > 0 && allEventData.map((mainVal)=> {
                const {s,p} = mainVal
                if(s == 'OANDA:EUR_USD'){
                    setEur({price: p, level: lastEur > p ? 'UP' : 'DOWN'})
                    lastEur = p

                }
                if(s == 'OANDA:USD_JPY'){
                    lastJpy = p
                    setJpy({price: p, level: lastJpy > p ? 'DOWN' : 'UP'})
                }
                if(s == 'OANDA:GBP_USD'){
                    lastGbp = p

                    setGbp({price: p, level: lastGbp > p ? 'DOWN' : 'UP'})
                }
                if(s == 'OANDA:USD_CHF'){
                    lastChf = p

                    setChf({price: p, level: lastChf > p ? 'DOWN' : 'UP'})
                }
                if(s == 'OANDA:AUD_CAD'){
                    setCad({price: p, level: lastCad > p ? 'DOWN' : 'UP'})
                }
                if(s == 'OANDA:AUD_CHF'){
                    setAudChf({price: p, level: lastAudChf > p ? 'DOWN' : 'UP'})
                }
                if(s == 'OANDA:AUD_CNH'){
                    setCnh({price: p, level: lastCnh > p ? 'DOWN' : 'UP'})
                }
                if(s == 'OANDA:AUD_CZK'){
                    setCzk({price: p, level: lastCzk > p ? 'DOWN' : 'UP'})
                }
        })
            // setallData(
            //     allData.map((defaultData)=>{
            //        const eventData = JSON.parse(event.data).data
            //         const newVal = eventData && eventData.length > 0 && eventData.find(({s})=> s.split(':')[1] == defaultData.name)
            //         if (newVal) {
            //            if (defaultDlastata > newVal.p) {
            //             return {...defaultData, price: newVal.p, level: 'DOWN'}
            //            } else{
            //             return {...defaultData, price: newVal.p, level: 'UP'}
            //            }
            //         }
            //         else{
            //             return {...defaultData}
            //         }
            //     })
            // )
        });

        // Unsubscribe
        var unsubscribe = function (symbol) {
            ws.send(JSON.stringify({ 'type': 'unsubscribe', 'symbol': symbol }))
        }

    }, []);


    return (

        <div className='container py-5'>
            <div style={{ padding: '50px 0px' }}>
                <div className='text-center'>
                    <h3 style={{
                        fontWeight: "600",
                        fontSize: '50px'
                    }}>
                        Market Trend
                    </h3>
                    <h6 style={{
                        marginBottom: '40px',
                        fontSize: "18px"
                    }}>
                        Check coin trends in real time.
                    </h6>
                </div>

                <table class="table table-striped">
                    <thead style={{ backgroundColor: "#2aaa94", color: 'white', textAlign: 'left' }}>
                        <tr>
                            <th scope="col" className='py-3'>Name</th>
                            <th scope="col" className='py-3'>Last Price</th>
                            <th scope="col" className='py-3'>Name</th>
                            <th scope="col" className='py-3'>Last Price</th>
                            {/* <th scope="col" className='py-3'>24h Change</th>
                            <th scope="col" className='py-3'>Market Cap</th> */}
                        </tr>
                    </thead>
                    <tbody>
        
                        {/* {allData && allData.map((item,i)=>( */}
                        <tr>
                            {/* <td >{item.s}</td>
                            <td>{item.p}</td>
                            <td>{item.t}</td>
                            <td>{item.v}</td> */}
                            <td>EUR_USD</td>
                            <td>{Eur.price}</td>
                            <td>AUD_CAD</td>
                            <td>{Cad.price}</td>
                            {/* <td>{lastEur > Eur.price ? 'DOWN' : 'UP'}</td> */}
                            
                        </tr>
                        <tr>
                            <td>USD_JPY</td>
                            <td>{Jpy.price}</td>
                            <td>AUD_CHF</td>
                            <td>{AudChf.price}</td>
                            {/* <td>{Jpy.level}</td> */}
                            {/* <td>{lastJpy > Jpy.price ? 'DOWN' : 'UP'}</td> */}

                        </tr>
                        <tr>
                            <td>GBP_USD</td>
                            <td>{Gbp.price}</td>
                            <td>AUD_CNH</td>
                            <td>{Cnh.price}</td>
                            {/* <td>{Gbp.level}</td> */}
                        </tr>
                        <tr>
                            <td>USD_CHF</td>
                            <td>{Chf.price}</td>
                            <td>AUD_CZK</td>
                            <td>{Czk.price}</td>
                            {/* <td>{Chf.level}</td> */}
                        </tr>
                       
                        {/* )) */}

                        {/* } */}
          


                        {/* <tr>
                            <td className='py-3'>XRPUSDT</td>
                            <td className='py-3'>0.51</td>
                            <td className='py-3'>1.97%</td>
                            <td className='py-3'>1.97%</td>
                        </tr>
                        <tr>
                            <td className='py-3'>BTCUSDT</td>
                            <td className='py-3'>28549.03</td>
                            <td className='py-3'>0.81%</td>
                            <td className='py-3'>1.48B</td>
                        </tr>
                        <tr>
                            <td className='py-3'>ETHUSDT</td>
                            <td className='py-3'>1922.16</td>
                            <td className='py-3'>2.47%</td>
                            <td className='py-3'>988.82M</td>
                        </tr>
                        <tr>
                            <td className='py-3'>BTCUSDT</td>
                            <td className='py-3'>28549.03</td>
                            <td className='py-3'>0.81%</td>
                            <td className='py-3'>1.48B</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
