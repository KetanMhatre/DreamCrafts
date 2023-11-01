import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  return (
    <article className='page-100'>
      <p>
        {' '}
        <span>Thank you </span>for shopping with us !
      </p>
      <Link to='/products' className='btn'>
        Shop more
      </Link>
    </article>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper className='page-100'>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  p {
    font-size: 2rem;
  }
  span {
    font-weight: 900;
    font-size: 3rem;
  }
`;

export default StripeCheckout;
