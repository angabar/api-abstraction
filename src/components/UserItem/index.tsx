import React from "react";
import { usersResponseType } from "../../services/types";

type userItemPropsType = {
    singleUserInfo: usersResponseType;
};

const UserItem = ({ singleUserInfo }: userItemPropsType) => {
    return (
        <div>
            <div>{singleUserInfo.name}</div>
        </div>
    );
};

export default UserItem;
