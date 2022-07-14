/*eslint-disable*/
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';



function Detail(props){
    let [count, setCount] = useState(0);
    let [timesale,setTimesale] = useState(true);
    let [size,setSize] = useState("");
    let {id} = useParams();
    let findproduct = props.shoes.find(function(element){
        return element.id == id;
    });

    useEffect(() => {
        let a = setTimeout(()=>{setTimesale(false)},2000)
        return () => {
            clearTimeout(a);
        }
    },[]);

    useEffect(() => {
        isNaN(size) ? alert("Size must be a number") : null;
    },[size]);
    

    return(
    <div className="container">
        {timesale ? <TimeSale/> : null}
        <div className="row">
            <div className="col-md-6">
                <img src={`https://codingapple1.github.io/shop/shoes${parseInt(id)+1}.jpg`} width="100%" />
            </div>
            <div className="col-md-6">
                <input 
                type=''
                id = "size"
                placeholder="Only Number"
                onChange={(e) => {
                    setSize(e.target.value);
                    //isNaN(e.target.value) ? alert("경고  : 숫자만 입력하세요") : null 
                    }}>
                    </input>
                <h4 className="pt-5">{findproduct.title}</h4>
                <p>{findproduct.content}</p>
                <p>{findproduct.price}won</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    )
}


function TimeSale(){
    return(
        <div className="alert alert-warning">
            2초이내 구매시 할인</div>
    )
}

export default Detail;