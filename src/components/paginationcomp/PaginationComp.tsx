import React, {FC} from 'react';
import {useSearchParams} from "react-router-dom";
interface PaginationProp{
    flag:boolean
}
const PaginationComp:FC<PaginationProp> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const onclickPrevHandler = () =>{
        const page = query.get('page');
        if(page && +page>0){
            let currentPage = +page;
            currentPage--;
            setQuery({page:currentPage.toString()});
        }
    }

    const onclickNextHandler = () =>{
        const page = query.get('page');
        if(page){
            let currentPage = +page;
            currentPage++;
            setQuery({page:currentPage.toString()});
        }
    }
    return (
        <div>
            <button onClick={onclickPrevHandler}>Previous</button>
            <button onClick={onclickNextHandler} disabled={flag}>Next</button>
        </div>
    );
};

export default PaginationComp;