import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../redux/StateProvider';
import {getBasketTotal} from '../redux/reducer';
const Subtotal = () => {
    const[{basket}]=useStateValue();
    return (
        <div className="subtotal">
           <CurrencyFormat
            value={getBasketTotal(basket)}
            decimalScale={2}
            displayType={'text'}
             thousandSeparator={true}
              prefix={'$'}
               renderText={value =>
                <React.Fragment>
                    <p>
                         SubTotoal ({basket.length} items):<strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/> This order contains gift
                    </small>
                </React.Fragment>
                
                } />
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default Subtotal;