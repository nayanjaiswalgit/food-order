import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-content";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCardButton.module.css"

const HeaderCardButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx ;

    const numberofCartItem = items.reduce((curNumber, item)=> {
        return curNumber + item.amount ; }, 0);

        
        const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : '' }` ;

        useEffect(()=> {
            if(items.length === 0 ) {
                return ;
            }
            setBtnIsHighlighted(true);

            const timer = setTimeout(() => {
                setBtnIsHighlighted(false);
            }, 300);

            return () => {
                clearTimeout(timer);
           
            };
        }, [items]);

    




    return (
        <button className ={btnClasses} onClick={props.onClick} >
            <span  className ={classes.icon}>  
            <CartIcon/>
            </span>
            <span> Your Card </span>
            <span  className ={classes.badge} > {numberofCartItem}</span>
        </button>

 

    )
}
export default HeaderCardButton ;