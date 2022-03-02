import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserItem from "./UserItem/UserItem";
import * as S from './UsersList.style'

const UsersList = () => {
    const [initialUsersData, setInitialUsersData] = useState([]);
    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        axios
            .get('https://motorcycle-rental.herokuapp.com/users')
            .then(res => {
                setInitialUsersData(res.data);
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        handleSearchValueChange();
    }, [searchValue])

    const removeUser = (id) => {
        axios
            .delete(`https://motorcycle-rental.herokuapp.com/deleteUser/${id}`)
            .then(() => {
                setUsers(users.filter(item => {
                    return item.id !== id;
                }))
            });
    };

    const handleSearchValueChange = () => {
        if (searchValue !== '') {
            const filteredUsers = initialUsersData.filter(user => {
                return Object
                    .values(user)
                    .join(' ')
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            setUsers(filteredUsers);
        } else {
            setUsers(initialUsersData);
        }
    };

    return (
        <S.Wrapper>
            <S.Label>Wyszukaj użytkownika</S.Label>
            <S.Input
                placeholder='szukaj...'
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            <S.UserList>
                {
                    users
                        .filter(user => user.role !== 'admin')
                        .map(user => <UserItem key={user.id} user={user} deleteFn={removeUser} />)
                }
            </S.UserList>
        </S.Wrapper>
    );
};

export default UsersList;