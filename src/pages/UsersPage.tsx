import React, {useEffect, useState} from 'react';
import Users from "../components/users/Users";
import PaginationComp from "../components/paginationcomp/PaginationComp";
import {useSearchParams} from "react-router-dom";
import {IUser} from "../models/IUser";
import {apiService} from "../services/service";

const UsersPage = () => {
    const [query, setQuery] = useSearchParams({page:'1'});
    const [users, setUsers] = useState<IUser[]>([]);
    const [flag, setFlag] = useState<boolean>(false);


    useEffect(() => {
        const page = query.get('page');
        if(page){
            apiService.getUsers(+page).then(value => {
                setUsers(value.users)
                const lastId = value.users[value.users.length-1].id;
                if(lastId>=value.total){
                    setFlag(true)
                }
                else{
                    setFlag(false)
                }
            });
        }
    }, [query]);

    return (
        <div>
            <PaginationComp flag={flag}/>
            <hr/>
            <Users users={users}/>

        </div>
    );
};

export default UsersPage;