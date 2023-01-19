import { useParams } from "react-router-dom";


const Info = () => {
    
    //예시 데이터
    const data = {
        1: {name: "홍길동", subject: "리액트라우터"},
        2: {name: "이순신", subject: "리액트props"},
        3: {name: "coding404", subject: "리액트state"}
    }
    
    //useParams()
    let param = useParams();
    // console.log(param); //{num:1}, {num:2}, {num:3} 이런 식으로 URL주소의 값을 키로 받는다
    // console.log(param.num); //1 2 3

   /*  const obj = data[param.num];
    console.log(obj); */
    const {name, subject} = data[param.num];

    return(
        <>
            <h3>인포 페이지</h3>
            {name}님의 데이터 {subject}
        </>
    )
}
export default Info;