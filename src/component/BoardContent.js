import { useParams } from "react-router-dom";


const BoardContent = () => {

    let {num} = useParams();

    return(
        <div>
            <h6>글 상세 페이지</h6>
            {num}번 글 내용입니다.
        </div>
    )
}
export default BoardContent;