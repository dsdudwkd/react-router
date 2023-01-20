import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsArticle from "./NewsArticle";
import styled from './NewsList.module.css';


const NewsList = () => {

    //1.API(news데이터) 가져오기
    //API키: 6125da9af7f142069af26dfb24ea5924

    //4.라우터로 들어오는 값에 처리
    //const result = useParams();
    //console.log(result); //{category: ~~~}
    const {category} = useParams();

    //category가 없거나 undefined이면 all로 할당
    const query = (category || 'all') === 'all'? '' : `&category=${category}`;
    //console.log(query);

    //2. useEffect에서 화면 로딩 시 데이터 처리
    //내장 함수에 async 적용 불가 - 즉시 실행 함수로 만들어 처리
    const [data, setData] = useState();

    useEffect(() => {

        (async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6125da9af7f142069af26dfb24ea5924`;
            //console.log(url);
            // let result = await axios.get(url);
            // console.log(result);
            let { data: { articles } } = await axios.get(url);
            setData(articles);
            setLoading(true); //로딩완료

        })();

    }, [query]) //5. 변화가 일어날 때마다 재 실행할 변수
    console.log(data);

    //3. 데이터 로딩 처리(데이터가 오기 전에 state는 undefined)
    const [loading, setLoading] = useState(false);

    if(loading === false) {
        return <div>로딩중...</div>
    }


    //4.li태그를 컴포넌트로 변경
    return (

        <div className={styled.news_container}>
            <h3>오늘의 헤드라인</h3>
            <ul className={styled.news_wrap}>
                {
                    /* 1. url, urlToImage, title, author, description, publishedAt */
                     data.map((item, index) => <NewsArticle key={index+1} item={item}/>)
                }
            </ul>
        </div>

    )
}
export default NewsList;