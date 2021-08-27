import React from 'react'
import * as consts from '../consts/consts';

export default function Counter({counter,onIncrement,onDecrement,onDelete}) {
    const classes = counter !== 0 ? 'btn btn-primary' : 'btn btn-primary disabled';

    return (
        <div>
            {counter}
            <button className='btn btn-primary' onClick={onIncrement}>{consts.PLUS}</button>
            <button className={classes} onClick={onDecrement}>{consts.MINUS}</button>
            <button className='btn btn-danger' onClick={onDelete}>{consts.DELETE}</button>
        </div>
    )
}
