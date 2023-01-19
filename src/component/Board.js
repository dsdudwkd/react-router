import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {

    const myStyle = {
        color:"red",
        backgroundColor:"black"
    }

    return(
        <div>
            <h3>글 목록 페이지</h3>
            
            <ul>
               {/*  <li><Link to="/board/1">글1</Link></li>
                <li><Link to="/board/2">글2</Link></li>
                <li><Link to="/board/3">글3</Link></li> */}

                {/* link태그랑 거의 똑같은데 스타일을 줄 수 있다 */}
                {/* 
                NavLink는 {isAcitve:boolean}을 함수의 매개변수로 사용할 수 있게 전달
                반드시 무조건! {isActive} 변수로 구조분해 할당해야 한다
                태그의 활성화 여부를 표시한다
                */}
                <li><NavLink to="/board/1" style={myStyle}>글1</NavLink></li>
                <li><NavLink to="/board/2" style={({isActive}) => isActive ? myStyle : null} >글2</NavLink></li> {/* 누르면 true가 적용되어 myStyle이 적용됨 */}
                <li><NavLink to="/board/3" style={({isActive}) => isActive ? myStyle : null} >글3</NavLink></li>
            </ul>

            {/* 하위 라우터가 표기된다 */}
            <Outlet/>
        </div>
    )
}
export default Board;