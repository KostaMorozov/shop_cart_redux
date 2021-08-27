import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './counter';
import ShopCart from './shopCart';
import * as actions from '../store/counterReducer'
import * as consts from '../consts/consts'

class Container extends Component {

    render() { 
        const {countersFromStore:counters} = this.props;
        const itemsCounter = counters.filter(counter=>counter.value>0).length;
        const totalOfItems = counters.length;
        return ( 
            <div>
                <div className="shopCart">
                    <ShopCart counter={itemsCounter} onReset={this.props.resetAction}/>
                </div>
                { totalOfItems === 0 ? <div className='totalIsEmpty'>{consts.EMPTY} </div>: <div className='counters'>
                    {this.props.countersFromStore.map(counter=>
                        <Counter 
                        key={counter.id} 
                        counter={counter.value} 
                        onIncrement={()=>this.props.incrementAction(counter)} 
                        onDecrement={()=>this.props.decrementAction(counter)} 
                        onDelete={()=>this.props.deleteAction(counter)}/>
                    )}
                </div>}
                
            </div>
         );
    }
}

const mapStateToProps = state=>{
    return{
        countersFromStore : state.counters
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        incrementAction:(counter)=>dispatch({type:actions.INCREMENT,payload:{counter:counter}}),
        decrementAction:(counter)=>dispatch({type:actions.DECREMENT,payload:{counter:counter}}),
        deleteAction:(counter)=>dispatch({type:actions.DELETE,payload:{counter:counter}}),
        resetAction:()=>dispatch({type:actions.RESET})
    }
}


 
export default connect(mapStateToProps,mapDispatchToProps)(Container);