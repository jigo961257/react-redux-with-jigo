import React from "react";

const User = (props) => {
    console.warn("props are :", props.data);
    const { data } = props;
    return (
        <div>
            <h1>name: {data.name}</h1>
            <h1>age: {data.age}</h1>
        </div>
    )
}
export default User;