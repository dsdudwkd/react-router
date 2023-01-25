import { createContext, useState } from "react";


//1.초기값의 모형일 뿐 값의 결과는 Provider에서
/* state는 내가 사용할 값, action은 set함수 */
/* 여러 개 가능  */
const UserContext = createContext({
    state: { id: 'aaa', name: 'bbb' },
    action: { setUser: () => { } }
});

//2.Provider 정의 - 구조분해 할당은 반드시 children으로
const UserProvider = ({ children }) => { /* children을 구조분해할당으로 받기 */

    const [user, setUser] = useState({ id: 'aaa', name: 'bbb' });

    const value = {
        state: user,
        action: { setUser } /* 초기값을 객체로 받았으니까 객체 형태로 값 저장, 키와 값이 똑같으면 setUser:setUser로 작성안해도됨 */
    }


    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}

//3. Consumer, Provider 반환
const UserConsumer = UserContext.Consumer;
export { UserConsumer, UserProvider };

//4. 기본 export 
export default UserContext;


