import dynamic from 'next/dynamic';
import { useState } from 'react';

const World = dynamic(() => import('./world'), {
    ssr: false,
});

const SearchLocation = () => {
    // const [content, setContent] = useState('');
    return (
        <>
            <World />
        </>
    );
};

export default SearchLocation;
