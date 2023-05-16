import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from "react-router-dom";


const Products = () => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

useEffect(() => {
    const getProducts = async () => {
        setLoading(true)
        const response = await fetch("https://fakestoreapi.com/products")

        if (componentMounted) {
            setData(await response.clone().json());
            setFilter(await response.json());
            setLoading(false);
            console.log(filter);
        }

    }

    getProducts()

    return () => {
        componentMounted = false
    }

}, [componentMounted]);

const Loading = () => {
    return  <div id="preloader">
    <div id="status"></div>
</div>
}


    const filterProduct = (cate) => {
        const List = data.filter((x) => x.category === cate);
        setFilter(List)
    }




    const ShowProducts = () => {
        return (
            <>
                <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
                    <button className='biz-btn mar-left-10' onClick={() => setFilter(data)} >All</button>
                    <button className='biz-btn mar-left-10' onClick={() => filterProduct("men's clothing")} >Men's Clothing</button>
                    <button className='biz-btn mar-left-10' onClick={() => filterProduct("women's clothing")} >Women's Clothing</button>
                    <button className='biz-btn mar-left-10' onClick={() => filterProduct("jewelery")} >Jewelery</button>
                    <button className='biz-btn mar-left-10' onClick={() => filterProduct("electronics")} >Electronic</button>
                </div>


                {filter.map((product) => {
                    return (
                
                            <div className="col-md-4 col-sm-6 col-xs-12 mar-top-30" key={product.id}>
                                <div className="trend-item"  >
                                    <div className="ribbon ribbon-top-left">
                                        <span>25% OFF</span>
                                    </div>

                                    <div className="trend-image" >
                                        <img src={product.image} alt={product.title} style={{ "width": "400px", "height": "500px", "objectFit": "cover" }} />
                                        <div className="trend-tags">
                                            <a href="#">
                                                <i className="flaticon-like" />
                                            </a>
                                        </div>
                                        <div className="trend-price">
                                            <p className="price">
                                                <span>{product.price}</span> $
                                            </p>
                                        </div>
                                    </div>
                                    <div className="trend-content">
                                        <h4>
                                            <a href="#">{product.title.substring(0, 20)}</a>
                                        </h4>
                                   
                                        <span className="mar-left-5">Category : {product.rating && product.rating.rate}                                                <i className='fa fa-star' >  </i>
</span>
<div className="rating mar-bottom-10">
                                            <NavLink to={`/products/${product.id}`} className="biz-btn mar-left-10">Buy Now</NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    )
                })}
            </>
        )
    }







    return (
        <section className="trending">
            <div className="container">
                <div className="section-title">
                    <p>
                        Lorem Ipsum is simply dummy text the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s,
                    </p>
                </div>
                <div className="trend-box">
                    <div className="row mix tour">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </section>

    )

























}
export default Products;