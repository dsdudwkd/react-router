import { useLocation, useSearchParams } from "react-router-dom";


const User = () => {

    //쿼리스트링으로 넘어오는 값 받기
    //1. useLocation() 훅

    // const location = useLocation();
    // console.log(location); //객체 - 객체 안에 쿼리스트링 값을 분해해서 사용, 불편해서 useSearchParams 훅 사용

    //2. useSearchParams() 훅
    //배열 반환[값을 조회하거나 수정하는 getter/setter 함수가 포함되어있는 객체, 쿼리스트링을 업데이트하는 함수]
    const [obj, setObj] = useSearchParams();
     console.log(obj); //객체
    // console.log(setObj); //함수
    let id = obj.get("id"); //request.getParameter("id");와 같은 개념
    let age = obj.get("age");
    // console.log(id); //aa123
    // console.log(age); //1


    //쿼리스트링 강제로 변경하기
    const handleClick = () => {
        let num = parseInt(age) + 1; //age값에 1 더함
        setObj({id:"변경", age: num});

    }

    return(
        <>
            <h3>유저 화면</h3>

            쿼리스트링으로 넘어온 id: {id} <br/>
            쿼리스트링으로 넘어온 age: {age}<br/>

            <button onClick={handleClick}>쿼리스트링 강제 수정</button>
        </>
    )
}
export default User;