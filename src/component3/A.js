import { useContext, useRef, useState } from "react";
import UserContext, { UserConsumer } from "../contexts/ContextAPI2";


const A = () => {
    /*
        return (
            첫 번째 사용법
           <UserConsumer>
                {
                    (value) => (
                        <div>
                            <h3>A컴포넌트</h3>
                            context안의값:{value.state.id}<br />
                            context안의값:{value.state.name}<br />
                            ?:{console.log(value)}
                        </div>
                    )
                }
            </UserConsumer>
           )
    */


    /* 두 번째 사용법 - useContext훅을 이용해 처리 */
    /* const result = useContext(UserContext);
    console.log(result); */

    //구조분해 할당
    const {state, action} = useContext(UserContext);
    

    const input1 = useRef('');
    const input2 = useRef('');
    const handleClick = () => {
       // console.log(input1.current.value); //사용자의 입력값
       // console.log(input2.current.value);
        action.setUser({
            id:input1.current.value,
            name: input2.current.value
        });
    }

    return (
        <div>
            <h3>A Component</h3>
            컨텍스트 안의 id값: {state.id}<br/>
            컨텍스트 안의 name값: {state.name}<br/>

            <div>
                <input type='text' ref={input1}/><br/>
                <input type='text' ref={input2}/><br/>
                <button onClick={handleClick}>컨텍스트 데이터 변경</button>
            </div>
        </div>
    )

}
export default A;