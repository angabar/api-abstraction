import React, { useState, useEffect } from "react";
import UserItem from "./components/UserItem";

import { usersResponseType } from "./services/types";
import { getUsers } from "./services/user.services";

type usersDataType = {
    loading: boolean;
    data: usersResponseType[] | null;
    error: boolean;
};

const App = () => {
    const [usersData, setUsersData] = useState<usersDataType>({
        loading: false,
        data: null,
        error: false,
    });

    const fetchUsers = async () => {
        try {
            setUsersData({
                ...usersData,
                loading: true,
            });

            const usersServerData = await getUsers();

            setUsersData({
                ...usersData,
                data: usersServerData,
                loading: false,
            });
        } catch (error) {
            setUsersData({
                ...usersData,
                error: true,
                data: null,
                loading: false,
            });
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const renderUsersList = () => {
        if (usersData.loading) return <div>Cargando...</div>;

        if (usersData.error) return <div>Error!</div>;

        if (
            usersData.data &&
            Array.isArray(usersData.data) &&
            usersData.data.length === 0
        ) {
            return <div>No hay datos que mostrar</div>;
        }

        if (
            usersData.data &&
            Array.isArray(usersData.data) &&
            usersData.data.length > 0
        ) {
            return usersData.data.map((singleUserInfo: usersResponseType) => {
                return <UserItem singleUserInfo={singleUserInfo} />;
            });
        }
    };

    return (
        <div className="App">
            <h2>Users list</h2>
            <div>{renderUsersList()}</div>
        </div>
    );
};

export default App;
