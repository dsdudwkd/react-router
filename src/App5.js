
import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./contexts/ContextAPI";
import { useState } from "react";

const App = () => {

    /* 
    책 495p 참조
    1. ContextAPI 외부에 선언 createContext() 훅 사용
    2. 자식 컴포넌트 consumer로 데이터를 받기
    3. 부모 컴포넌트 provider로 데이터를 전달(변경)
    */

    /* select태그를 만들어서 useState를 활용해 color값을 변경 */
    const [change, setChange] = useState({color:'green'});

    const handleChange = (e) => {
        setChange({color:e.target.value});
    }

    return (
        <ColorContext.Provider value={change}>
            {/* Provider는 사용할 root 컴포넌트에 선언한다 */}
            <ColorComponent />

            <select onChange={handleChange}>
                <option value='선택'>선택</option>
                <option value='white'>white</option>
                <option value='black'>black</option>
                <option value='blue'>blue</option>
            </select>

        </ColorContext.Provider>



    )
}
export default App;