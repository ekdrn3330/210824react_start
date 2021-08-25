/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '서초 중국음식 맛집']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // function 반복된UI() {
  //   var 어레이 = [];
  //   for(var i = 0; i < 3; i++) {
  //     어레이.push(<div>안녕</div>);
  //   }

  //   return 어레이;
  // }
  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }
  function 글자순정렬() {
    var newArray = [...글제목];
    newArray.sort();
    글제목변경( newArray );
  }
  function 원래대로() {
    글제목변경(['남자 코트 추천', '강남 우동 맛집', '서초 중국음식 맛집']);
  }
  function 따봉더하기(i) {
    var newArray = [...따봉];
    newArray[i] ++;
    따봉변경( newArray );
  }
  function 글제목추가() {
    var newArray = [...글제목];
    newArray.unshift(입력값);
    글제목변경(newArray);
  }
  
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <button onClick={ 글자순정렬 }>글자순 정렬</button>
      <button onClick={ 원래대로 }>원래대로 돌리기</button>

      {
        글제목.map((글, i)=>{
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{ 누른제목변경(i); } }> { 글 } <span onClick={ ()=>{ 따봉더하기(i) } }>👍</span> { 따봉[i] } </h3>
              <p>2월 18일 발행</p>
              <hr />
          </div>
          );
        })
      }

      <div className="public">
        <input onChange={ (e)=>{ 입력값변경(e.target.value); } } />
        <button onClick={ 글제목추가 }>저장</button>
      </div>

      <button onClick={ ()=>{ modal변경(!modal); } }>열고닫기</button>
      {
        modal === true
        ? <Modal 글제목={글제목} 누른제목={누른제목} />
        : null
      }

      <Profile />
    </div>
  );
}

function Modal(props) {
  return(
    <div className="modal">
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name : 'Kim', age : 30 }
  }

  changeName = () => {
    this.setState( {name : 'Park'} );
  }

  render() {
    return (
      <div>
        <h3>프로필입니다</h3>
        <p>저는 { this.state.name } 입니다</p>
        <button onClick={ this.changeName }>버튼</button>
      </div>
    )
  }
}

export default App;