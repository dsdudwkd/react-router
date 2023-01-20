import { useEffect, useState } from "react";


const App = () => {

    /* 
    Ajax를 이용해서 외부 데이터 가져오기
    1. promise = fetch()
    */

    const [raw, setRaw] = useState();

    const handleClick = () => {

        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
            .then(response => response.json()) /* console.log(response)는 object */
            .then(data => setRaw(data)) /* console.log(data) {userId: 'kkk123', userPw: 1234, userName: '홍길자'} */
    }
    //console.log(raw); //undefined - 초기값이 없기 때문에 처음엔 undefined, 클릭하면 데이터를 fetch로 가져오니까 결과


    const [data, setData] = useState();
    //화면이 mount 이후 데이터 가져오기 - useEffect()
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
            <button onClick={handleClick}>데이터 가져오기</button>
            {/*  가져온 데이터: {raw.userId}, {raw.userPw}, {raw.userName} */}
            {
                raw === undefined ?
                    <div>
                        데이터 준비중...
                    </div>
                    :
                    <div>
                        아이디:{raw.userId},<br />
                        비밀번호: {raw.userPw},<br />
                        이름: {raw.userName}<br />
                    </div>
            }
            <hr />

            <h3>mount 이후 데이터 가져오기</h3>
            {
                data && 
                <div>
                    아이디: {data.userId}
                    비밀번호: {data.userPw}
                    이름: {data.userName}
                </div>
            }

        </>
    )
}
export default App;