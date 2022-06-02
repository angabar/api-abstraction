import axios from "axios";

import { usersResponseType } from "./types";

export const getUsers = async (): Promise<usersResponseType[] | never> => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users",
        );

        return response.data;
    } catch (error) {
        throw new Error("Error on users");
    }
};
