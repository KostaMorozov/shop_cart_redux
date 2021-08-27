import React from 'react'
import {RESET , SHOP_CART} from '../consts/consts'

export default function ShopCart({counter,onReset}) {
    return (
        <div >
            {SHOP_CART} {counter}
            <div>
            <button className='btn btn-dark' onClick={onReset}>{RESET}</button>
            </div>
        </div>
    )
}
