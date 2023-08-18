import { css, Global } from '@emotion/react';

interface colorProps {
    color: string;
}

const BodyBg = ({ color }: colorProps) => {
    return (
        <>
            <Global
                styles={css`
                    body {
                        background-color: ${color};
                    }
                `}
            />
        </>
    );
};

export default BodyBg;
