
import { useContext, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Context1 } from "../App";
import { addCart} from "../store";


function Detail(props){

    let {backpack, shoes} = useContext(Context1);

    let [count, setCount] = useState(0);
    let [timesale,setTimesale] = useState(true);
    let [size,setSize] = useState("");
    let {id} = useParams();
    let [tapnum, setTapNum] = useState(0);
    let [fade2, setFade2] = useState("");
    let dispatch = useDispatch();
    let findproduct = props.shoes.find(function(element){
        return element.id == id;
    });
    let {cart} = useSelector((state) => {return state})

    useEffect(() => {
        let a = setTimeout(()=>{setTimesale(false)},2000)
        return () => {
            clearTimeout(a);
        }
    },[]);

    useEffect(() => {
        setFade2('end')
        return () => {
            setFade2('')
        }
    },[])
    

    useEffect(() => {
        var tmp = localStorage.getItem("watched");
        var tmp2 = JSON.parse(tmp);
        tmp2.push(findproduct.id);
        tmp2 = new Set(tmp2);
        tmp2 = Array.from(tmp2);
        localStorage.setItem("watched", JSON.stringify(tmp2));
    },[]);
    
    return(
    <div className={`container start ${fade2}`}>
        
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
                    }}>
                    </input>
                <h4 className="pt-5">{findproduct.title}</h4>
                <p>{findproduct.content}</p>
                <p>{findproduct.price}won</p>
                <button onClick={() => {
                    dispatch(addCart({id : 1, name : "RED NIT", count : 1}));
                    }} className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        
        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
            <Nav.Link onClick={() => {setTapNum(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={() => {setTapNum(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={() => {setTapNum(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        
        <TapContent tapnum={tapnum} ></TapContent>

        
    </div> 
    )
}


function TapContent({tapnum}){
    let {backpack, shoes} = useContext(Context1);
    let [fade, setFade] =useState('');

    useEffect(() => {
        let a = setTimeout(() => {setFade("end")},100)
        return () => {
            setFade("");
        }
    },[tapnum])
    return (<div className={`start ${fade}`}>
    {[<div>{shoes[0].title}</div>,<div>1번내용</div>,<div>2번내용</div>][tapnum]}
    </div>)
}


function TimeSale(){
    return(
        <div className="alert alert-warning">
            2초이내 구매시 할인</div>
    )
}

function TapUI(){
    return(
        <div></div>
    )
}

export default Detail;