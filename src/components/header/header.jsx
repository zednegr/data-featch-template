import { useState, useEffect } from "react"
import './header.scss'

function Header() {

    const [getData, setgetData] = useState()

    useEffect(() => {
        fetch('https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films')
            .then((data) => {
                return data.json()
            })
            .then((dataJson) => {
                console.log(dataJson);
            })
    }, [])


    return (

        <>
            <div className="section">
                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <div className="card-top">
                                <div className="card-avatar">
                                    <img className='card-avatar-img' src="https://uzbeklar.biz/uploads/posts/2023-07/1689738384_1689738317.jpg" alt="" />
                                </div>
                            </div>
                            <div className="card-middle">
                                <div className="card-middle-desc">
                                    <h4 className='card-middle-movie-name-h4'>Movie Name: <span>Criminal Shaxar 3</span></h4>
                                </div>
                            </div>
                            <div className="card-bottom">
                                <div className="card-bottom-quality">
                                    <h5 className='card-bottom-quality-h5'>FHD</h5>
                                </div>
                                <div className="card-bottom-time">
                                    <h5 className='card-bottom-time-h5'>1h</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header