
/* 
<라우터 적용 방법>
1.index.js에서 <BrowserRouter>로 <App/>을 감싸준다
2.각각의 컴포넌트를 만든다
3. Route를 이용해 주소별로 컴포넌트 연결한다

<Link 컴포넌트>
- a태그를 대체한다
- to속성에 "라우터 주소" 적어서 이동한다

<쿼리스트링?키=값>
- useLocation()
- useSearchParams()

<URL파라미터>
- 라우터를 설정 (/경로/:값)
- useParams() 값을 받습니다
*/

import { Route, Routes } from "react-router-dom";
import Board from "./component/Board";
import BoardContent from "./component/BoardContent";
import Home from "./component/Home";
import Info from "./component/Info";
import MyPage from "./component/MyPage";
import User from "./component/User";
import Header from "./layout/Header";

function App() {


  return (
    /* 동일한 경로만 아니면 페이지 여러 개 가능 */
    <Routes >

      {/* 중첩라우터 - 헤더부분처리 (Header파일에서 Outlet컴포넌트 표기) */}
      <Route element={<Header/>}>
        <Route path="/" element={<Home />} /> {/* url에 /로 들어가면 Home 컴포넌트로 연결되어 Home 페이지로 가는 것 */}
        <Route path="/user" element={<User />} /> {/* 쿼리스트링 */}
        <Route path="/info/:num" element={<Info />} /> {/* URL파라미터 */}
      </Route>


      {/* 각각 다른 화면 - 홈에서 board페이지로, board에서 상세페이지로 연결되어있음 */}
      {/*  <Route path="/board" element={<Board/>}/>
      <Route path="/board/:num" element={<BoardContent/>}/> */}


      {/* 중첩라우터 - 공통부분 처리(Board에 가서 Outlet컴포넌트 표기) */}
      <Route path="/board" element={<Board />}> {/* 여기가 공통 부분 */}
        <Route path=":num" element={<BoardContent />} />
      </Route>


      {/* navigate컴포넌트 */}
      <Route path="/mypage" element={<MyPage/>} />

    </Routes>
  )
}

export default App;
