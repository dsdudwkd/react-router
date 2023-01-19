import { Link } from "react-router-dom";


const Home = () => {

    return(
        <>
            <h3>홈 화면</h3>

            <ul>
                <li><Link to="/user">회원페이지</Link></li>
                <li><Link to="/user?id=aa123&age=1">회원페이지</Link></li>

                <li><Link to="/info/1">info페이지</Link></li>
                <li><Link to="/info/2">info페이지</Link></li>
                <li><Link to="/info/3">info페이지</Link></li>
                
                {/* 중첩라우터 */}
                <li><Link to="/board">board페이지</Link></li>
                
                {/* navigate컴포넌트 */}
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
        </>            
    )
}
export default Home;