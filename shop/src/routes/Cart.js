/*eslint-disable*/
import { memo, useMemo, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../store";
import { changeAge, changeName } from "../store/userSlice";

let Child = memo(function(){
    console.log("재랜더링");
    return <div>자식임</div>
})

function Cart(){
    
    let {user, stock, cart} = useSelector((state) => {return state})
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);
    return(
        <div>
            <Child count={count}></Child>
            <Button onClick={()=> {
                setCount(count+1);
            }}>{count}</Button>
            <Table>
                <h6>{user.name} {user.age}</h6>
                
                <Button onClick={() => {
                    dispatch(changeAge(10));
                }}>+</Button>
                <thead>
                    <tr>
                    <th>#cart</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(function(a,i){
                        return(
                            <ShoppingBag i= {i}/>
                        )
                    })}
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;

function ShoppingBag({i}){
    let {cart} = useSelector((state) => {return state});
    let dispatch = useDispatch();
    return(
        <tr>
            <td>{cart[i].id}</td>
            <td>{cart[i].name}</td>
            <td>{cart[i].count}</td>
            <td><Button onClick={() => {
                dispatch(changeCount(cart[i].id));
            }} variant="outline-info" size="sm">추가하기</Button>{' '}</td>
        </tr>
    )
}