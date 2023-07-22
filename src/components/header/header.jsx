import { useState, useEffect } from "react"
import './header.scss'

function Header() {

    const [getData, setgetData] = useState()
    const [Loading, setLoading] = useState(true)
    const [Error, setError] = useState(false)

    useEffect(() => {
        fetch('https://64b8278821b9aa6eb0799f1f.mockapi.io/movie/films')
            .then((res) => res.json())
            .then((data) => setgetData(data))
            .finally(() => {
                setLoading(false)
            })
            .catch(() => {
                setError(true)
            })
    }, [])

    if (Loading) {
        return <h1>Loading...</h1>
    }

    if (Error) {
        return <h2>ERROR !</h2>
    }


    return (

        <>
            <div className="section">
                <div className="container">
                    <div className="cards">
                        {
                            getData?.map((item, index) => {
                                return (

                                    <div className="card">
                                        <div className="card-top">
                                            <div className="card-avatar">
                                                <img className='card-avatar-img' src={item?.img} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-middle">
                                            <div className="card-middle-desc">
                                                <h4 className='card-middle-movie-name-h4'>{item?.name}</h4>
                                            </div>
                                        </div>
                                        <div className="card-bottom">
                                            <div className="card-bottom-quality">
                                                <h5 className='card-bottom-quality-h5'>{item?.quality}</h5>
                                            </div>
                                            <div className="card-bottom-time">
                                                <h5 className='card-bottom-time-h5'>{item?.time}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header