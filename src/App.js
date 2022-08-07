import React from 'react';
import './App.css';
import product_image_mobile from './images/image-product-mobile.jpg';
import product_image_desktop from './images/image-product-desktop.jpg';
import icon_cart from './images/icon-cart.svg';

const App = () => {
  return (
    <div className='h-screen flex justify-center items-center '>
      <div className='bg-white rounded-lg overflow-hidden sm:flex max-w-[640px]'>
        {/* image card */}
        <div className='sm:w-1/2'>
          <img
            className='sm:hidden'
            src={product_image_mobile}
            alt='iamge mobile'
          />
          <img
            className='hidden sm:block'
            src={product_image_desktop}
            alt='iamge mobile'
          />
        </div>
        {/* content */}
        <div className='p-5 sm:w-1/2 sm:p-7'>
          <p className='mb-2 text-dark-grayish-blue tracking-[7px] sm:mb-6'>
            PERFUME
          </p>
          <h1 className='font-fraunces text-3xl mb-4 sm:text-4xl sm:mb-6'>
            Gabrielle Essence Eau De Parfum
          </h1>
          <span className='text-dark-grayish-blue text-sm mb-5 block sm:mb-7 leading-relaxed'>
            A floral, solar and volupltous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL
          </span>

          <div className='flex items-center mb-4 sm:mb-7'>
            <p className='font-fraunces text-3xl mr-5 text-dark-cyan'>
              {' '}
              $149.99
            </p>
            <span className='text-dark-grayish-blue line-through text-sm'>
              $169.99
            </span>
          </div>

          <button className='flex justify-center items-center bg-dark-cyan w-full py-3 rounded-lg hover:bg-hover-cyan transition duration-3000 ease-in-out'>
            <img className='mr-3' src={icon_cart} alt='cart' />
            <span className='text-white font-medium'>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
