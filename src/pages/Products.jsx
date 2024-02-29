import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductData from './ProductData';
import './Product.css';

const Products = () => {
    let Links = [
        { name: "Beauty Soap", link: '/' },
        { name: "Detergent Soap", link: '/' },
        { name: "Dishwasher", link: '/' },
    ];

    const [detail, setDetail] = useState(null);

    const detailPage = (product) => {
        setDetail({ ...product });
    };

    return (
        <>
            <div className='m-auto p-2 text-center text-4xl bg-gray-400'>
                <h3>Products</h3>
                <ul className='m-5 text-xl md:flex md:items-center justify-center'>
                    {Links.map((link) => (
                        <li key={link.name} className='text-xl m-5'>
                            <a href={link.link} className='text-gray-800 hover:text-black-400 duration:500'>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div>
                    <h2 className='text-xs m-2 font-bold'>
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to='/products'>Products</Link>
                    </h2>
                </div>
                <div className='detail_container'>
                    <div className='detail_constant'>
                        {detail && (
                            <div className='detail_info'>
                                <div className='img-box'>
                                    <img src={detail.img} alt={detail.Title} />
                                </div>
                                <div className='product_detail'>
                                    <h2>{detail.Title}</h2>
                                    <h3>{detail.Price}</h3>
                                    <p>{detail.Des}</p>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='container'>
                    {ProductData.map((product) => (
                        <div key={product.id} className='box'>
                            <div className='constant'>
                                <div className='img-box'>
                                    <img src={product.img} alt={product.Title} />
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                        <h3>{product.Title}</h3>
                                        <p>{product.Price}</p>
                                    </div>
                                    <button onClick={() => detailPage(product)}>View</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Products;
