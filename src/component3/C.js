import { useContext } from "react";
import UserContext from "../contexts/ContextAPI2";


const C = () => {

    const{state, action} = useContext(UserContext);

    return(
        <>
            <h3>C컴포넌트</h3><br/>
            컨텍스트 안의 값: {state.id}<br/>
            컨텍스트 안의 값: {state.name}
        </>
    )
}
export default C;
