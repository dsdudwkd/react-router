import { Navigate, useNavigate } from "react-router-dom";


const MyPage = () => {

    /* // 첫 번째 렌더링 과정에서는 사용할 수 없음 
    let nav = useNavigate();
    
    let loginYN = false; //로그인여부
    if(loginYN == false) { 
        nav('/'); 
    } */

    //권한이 없으면 Redirect
    //replace={true}를 입력하면 기록을 남기지 않습니다 (mypage에 들어간 기록이 사라짐)
    let loginYN = false;
    if(loginYN == false) {
        return <Navigate to="/" replace={true}/>
    }

    return(
        <>
            <div>
                권한이 있는 사람만 접근 가능
            </div>
        </>
    )
}
export default MyPage;