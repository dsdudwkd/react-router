import axios from "axios";
import { useState } from "react";


const App = () => {

    /* 
    책 356p
    Axios는 비동기를 편하게 처리하는 라이브러리(fetch로 사용해도 무관)
    설치 명령어: npm add axios
    Axios는 get(), post()함수를 제공하고, 사용했을 때 리턴은 Promise
    */

    const [data, setData] = useState();


    const handleClick = async() => {
        let result1 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json");
        console.log(result1);
        console.log(result1.data);
        console.log(1);
        
        let result2 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json");
        console.log(result2);
        console.log(result2.data);
        console.log(2);
        
        let result3 = await axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json");
        console.log(result3);
        console.log(result3.data);
        console.log(3);
    }
    //순서를 보장받고 싶다면? - 콜백함수의 지옥
   /*  const handleClick = () => {

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        .then(response => {
            console.log(response.data)
            console.log(1);

            axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
            .then(response => {
                console.log(response.data)
                console.log(3);

                axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
                .then(response => {
                    console.log(response.data)
                    console.log(5);
                })
            })
        })

    } */

    //순서를 보장하지 않음
    /*
    const handleClick = () => {
        //let result = axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.jon");
        //console.log(result);
        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json")
        /* .then(response => {
            console.log(response); //Object
            console.log(response.data);
        })
        .then(response => {
            console.log(response.data)
            console.log(1);
        })
        console.log(2);

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/by.json")
        .then(response => {
            console.log(response.data)
            console.log(3);
        })
        console.log(4);

        axios.get("https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json")
        .then(response => {
            console.log(response.data)
            console.log(5);
        })
        console.log(6);
    } */

    return (
        <>
            <h3>엑시오스로 데이터 가져오기</h3>

            <button onClick={handleClick}>데이터 가져와라</button>

            {
                data && <div>
                    아이디: {data.userId},
                    비번: {data.userPw},
                    이름: {data.userName}
                </div>
            }
        </>
    )
}
export default App;