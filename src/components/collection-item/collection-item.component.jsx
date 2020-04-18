import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItemToCart } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => (
  <div className='collection-item'>
    <div 
      className='image' 
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{ item.name }</span>
      <span className='price'>{ item.price }</span>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}> Add to cart </CustomButton>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);