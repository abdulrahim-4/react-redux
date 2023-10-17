import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div key={id} className='border p-4 rounded-md shadow-md'>

                <Link to={`/product/${id}`}>
                    <div className=' h-80 pb-2 border-b-2'>
                        <img src={image} alt={title} className=' w-full h-full' />
                    </div>
                    <div className='mt-1'>
                        <div className=' font-medium text-xl mb-2'>{title}</div>
                        <div className='text-base font-semibold text-gray-800  mb-2'>${price}</div>
                        <div className='text-base font-medium text-gray-500  '>{category}</div>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10'>
            {renderList}
        </div>
    );
};

export default ProductComponent;
