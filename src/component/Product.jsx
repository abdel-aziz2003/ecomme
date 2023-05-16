import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AjoutCart, SupressionCart } from '../redux/action/index';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
            <div id="preloader">
                <div id="status"></div>
            </div>
        );
    };

    const DetailProduct = () => {
        const dispatch = useDispatch();
        const AjoutProduct = (product) => {
            dispatch(AjoutCart(product));
        };
        const SupressionProduct = (product) => {
            dispatch(SupressionCart(product));
        };

        return (
            <>
                <section className="shop-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 pad-right-30">
                                <div className="shop-detail">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="thumbnail-images">
                                                <div className="slider-store slick-initialized slick-slider">
                                                    <div aria-live="polite" className="slick-list draggable">
                                                        <div
                                                            className="slick-track"
                                                            role="listbox"
                                                            style={{ opacity: 1, width: 1765 }}
                                                        >
                                                            <div className="slick-slide slick-current slick-active">
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.title}
                                                                    style={{ width: '400px', height: '500px', objectFit: 'cover' }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-12 col-xs-12">
                                            <div className="single-content">
                                                <h3>{product.title}</h3>
                                                <div className="shop-price mar-bottom-20">
                                                    <ins>
                                                        Price : <span>{product.price}$</span>
                                                    </ins>
                                                </div>
                                                <div id="store-tab-main" className="mar-top-60">
                                                    <ul className="nav nav-tabs">
                                                        <li className="active">
                                                            <a href="#1" data-toggle="tab" aria-expanded="true">
                                                                Description
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane active" id={1}>
                                                            <p>{product.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button
                                                    className="biz-btn mr-3"
                                                    style={{ marginRight: '2rem' }}
                                                    onClick={() => AjoutProduct(product)}
                                                >
                                                    Ajouter a la carte
                                                </button>
                                                <NavLink to="/shop" className="biz-btn-black">
                                                    Voir la carte
                                                </NavLink>
                                                <div className="product-tags">
                                                    <p>Category: {product.category}</p> <br />
                                                    <p>Rating : {product.rating ? product.rating.rate : '-'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };
    return <>{loading ? <Loading /> : <DetailProduct />}</>;
};

export default Product;