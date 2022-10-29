import React from 'react'
import img1 from '../../../assets/images/blog/thumb-01.jpg';
import img2 from '../../../assets/images/blog/thumb-05.jpg';

const Blog = () => {
    const blogs = [
        {img: img1, title:'The 8 Most Affordable Michelin Restaurants in Paris', city: 'Paris', category: 'Food' },
        {img: img2, title:'The 7 Best Restaurants to Try Kobe Beef in London', city: 'London', category: 'Art &amp; Decor' },
        {img: img1, title:'The 8 Most Affordable Michelin Restaurants in Paris', city: 'Paris', category: 'Food' },
    ]

  return (
    <>
        {
            blogs.map((item, index) =>(
                <div className="col-md-4" key={index}>
                    <article className="post hover__box">
                    <div className="post__thumb hover__box__thumb">
                        <a href="#">
                            <img src={item.img} alt={item.title} />
                        </a>
                    </div>
                    <div className="post__info">
                        <ul className="post__category">
                        <li><a href="#">{item.city}</a></li>
                        <li><a href="#">{item.category}</a></li>
                        </ul>
                        <h3 className="post__title">
                            <a href="#">
                                {item.title}
                            </a>
                        </h3>
                    </div>
                    </article>
                </div>
            ))
        }
    </>
  )
}

export default Blog