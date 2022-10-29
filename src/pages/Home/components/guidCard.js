import React from 'react'
import img1 from '../../../assets/images/city/tokyo.jpg'
import img2 from '../../../assets/images/city/barca.jpg'
import img3 from '../../../assets/images/city/newyork.jpg'
import img4 from '../../../assets/images/city/paris.jpg'
import img5 from '../../../assets/images/city/amsterdam.jpg'
import img6 from '../../../assets/images/city/singapo.jpg'
import img7 from '../../../assets/images/city/sydney.jpg'
import img8 from '../../../assets/images/city/angeles.jpg'

const GuidCard = () => {
    let arr = [
        {img: img1, city: 'Japan', city_capital:'Tokyo', city_no: 80},
        {img: img2, city: 'Spain', city_capital:'Barca', city_no: 92},
        {img: img3, city: 'United States', city_capital:'New york', city_no: 64},
        {img: img4, city: 'France', city_capital:'Paris', city_no: 23},
        {img: img5, city: 'NETHERLANDS', city_capital:'Amsterdam', city_no: 44},
        {img: img6, city: 'SINGAPO', city_capital:'Singapo', city_no: 60},
        {img: img7, city: 'AUSTRALIA', city_capital:'Sydney', city_no: 36},
        {img: img8, city: 'UNITED STATES', city_capital:'Angeles', city_no: 44}
    ]

  return (
    <>
        {
            arr.map((item, index)=>(
                <div className="col-lg-3 col-sm-6" key={index}>
                    <div className="cities__item hover__box">
                        <div className="cities__thumb hover__box__thumb">
                            <a title="London" href="city-details-3.html">
                                <img src={item.img} alt={item.city_capital} />
                            </a>
                        </div>
                        <h4 className="cities__name">{item.city}</h4>
                        <div className="cities__info">
                            <h3 className="cities__capital">{item.city_capital}</h3>
                            <p className="cities__number">{item.city_no} places</p>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default GuidCard