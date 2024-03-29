import React from 'react';
import s from './style.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/slices/basketSlice';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { toast } from 'react-toastify';
import { URL } from '../../helpers/links'

const ProductItem = ({id,title, price, discount_price,image}) => {
    const dispatch = useDispatch()
    const link = `/product/${id}`
    const disc_percent = (100 - (discount_price*100/price)).toFixed(1)
    
    const onClickAdd = (e) => {
        e.preventDefault();
        dispatch(addToBasket(id))
        toast.info('The product has been added to your cart.', {
            autoClose: 2000,
        })
    }

    return (
        <Link className={s.product_item} to={link}>
            <div className={s.picture}>
                <img src={URL + image} alt={title} />
                <button onClick={onClickAdd} className={s.add_btn}>
                    Add to cart
                </button>
            </div>
            <div className={discount_price ? s.prices_blok :''} >
                {
                    discount_price ?
                    <>
                        <p className={s.disc_price}>
                                {discount_price}
                            <span className={s.small_text}>$</span> 
                        </p>
                        <p className={s.price}>{price}$ </p>
                        <p className={s.percent}> -{disc_percent}%</p>
                    </>
                    :  <p className={s.no_disc_price}>
                            {price}
                            <span className={s.small_text}>$</span> 
                        </p>
                }
            </div> 
            <p className={s.product_name}>{title}</p>
            <button onClick={onClickAdd} className={s.mob_btn}>
                <ShoppingCartIcon color="success"/>
            </button>
        </Link>
        
    );
};

export default ProductItem;