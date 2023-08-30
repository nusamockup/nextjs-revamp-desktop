import { useState } from 'react';

const UseLoginState = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return {
        isLoggedIn,
        setIsLoggedIn,
    };
};

export default UseLoginState;
