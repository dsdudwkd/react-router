import { useContext, useRef } from "react";
import UserContext from "../contexts/ContextAPI2";


const D = () => {

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

    return(
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
export default D;