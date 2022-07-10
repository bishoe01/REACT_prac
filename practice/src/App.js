/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "서버에서 가져온 데이터";
  let [글제목,setFirst] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  const logo ='React Study Blog';
  let [like,setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [ontitle, setOntitle] = useState("");
  let [inputtext, setInputText] = useState("");

  return (
    <div className="App"> 
      <div className="black-nav">
        <h4 style={{fontSize: '17px'}}>{logo}</h4>
      </div>
      {
        글제목.map(function(a, i){
        return (<div className='list'>
        <h4 onClick={() => {
          setModal(!modal);
          setOntitle(글제목[i]);
        }} >{ 글제목[i] } <span onClick={(e) => {
          e.stopPropagation();
          let like_add = [...like];
          like_add[i] = like[i]+1;
          setLike(like_add);
        }}>👍</span>{like[i]}</h4>
        <p>7월10일</p>
      </div>)})}

        <input onChange={(e) => {
          setInputText(e.target.value);
          }}></input><button onClick={() => {
            tmp = 글제목;
            글제목 = [...tmp,inputtext];
            console.log(글제목);
            setFirst(글제목);
          }}>Write</button>
        

      {!modal ? null : <Modal color={'skyblue'} ontitle={ontitle} setFirst={setFirst}/>}
    </div>
    
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background : props.color}}>
    <h4>{props.ontitle}</h4>
    <p>날짜</p>
    <p>Description</p>
    <button>글수정</button>
</div>
)}


export default App;
