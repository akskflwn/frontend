import axios from "axios";
import './App.css';
import React, { useEffect, useState } from "react";
import Parents from "./bitcamp/React.memo/Parents";


function App() {

  //베이스 url 변수선언
  const baseUrl = "http://localhost:8080"
  //유저 아이디
  const [input, setInput] = useState([]);
  //유저비번
  const [pwd, setPwd] = useState([]);
  //유저이름
  const [username, setUsername] = useState([]);


  //유저받아오기
  const [users, setUsers] = useState([]);
  //랜더링 최초 한번만하기
  useEffect(() => {
    getMembers();
  }, []);

  //멤버 json으로 받아오는 메소드
  async function getMembers() {
    //get 방식으로 test/user에서 서버에서 전송된
    //json 데이틀 받아서 response.date에 저장함
    await axios.get(baseUrl + "/test/user")
      .then((response) => {
        // console.log(response.data)
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }

  //버튼을 누르면 sighup 메소드실행
  function SignUp(e) {
    e.preventDefault();
    //post method로 test/user 데이터 전송
    const insertUser = async () => {
      await axios
        .post(baseUrl + "/test/user", {
          //usestate를 set으로 input값을 안에 넣고
          //각각 set해줌
          userid: input,
          pwd: pwd,
          username: username
        })
        .then((response) => {
          console.log(response.data)
          setInput("");
          getMembers();
        })
        .catch((error) => {
          console.error(error)
        })
    }
    //inserUser 다시 실행 
    insertUser();
    console.log("유저 등록 완료")
  }



  function ChangeUserID(e) {
    e.preventDefault();
    setInput(e.target.value)
    console.log(input)
  }
  function ChangeUserPW(e) {
    e.preventDefault();
    setPwd(e.target.value)
    console.log(pwd)
  }
  function ChangeUserNA(e) {
    e.preventDefault();
    setUsername(e.target.value)
    console.log(username)
  }

  return (
    <div className="App">

      <form onSubmit={SignUp}>
        <div className="title"><h1>Register</h1></div>
        <div id="msg" className="msg"></div>
        <label>아이디
          <input className="input-field" type="text" name="id" placeholder="id" value={input}
            onChange={ChangeUserID}
          /></label>
        <label>비밀번호</label>
        <input className="input-field" type="password" name="pwd" value={pwd} placeholder="pw"
          onChange={ChangeUserPW} />
        <label>이름</label>
        <input className="input-field" type="text" name="name" value={username} placeholder="홍길동"
          onChange={ChangeUserNA} />
        <input type="submit" value="회원가입" />

      </form>

      {
        users
          ? users.map((users) => {
            return (
              <div className="userList" key={users.id}>
                회원아이디:{users.userid} 회원이름:{users.username}
              </div>
            )
          })
          : null
      }

    </div>
  );
}

export default App;
