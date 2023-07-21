import { Anchor, Container, Flex } from '@ns-ui/core';
import Marquee from 'react-fast-marquee';
import useStyles from './airline-logo.styles';
import Image from 'next/image';
import { airlinesdata } from '../constants';

const AirlineLogo = () => {
    const { classes } = useStyles();
    const airlines = airlinesdata.map((airline) => (
        <Anchor key={airline.iata} href="#">
            <Image
                priority
                src={`/img/airline/${airline.iata}.svg`}
                alt="airline logo"
                width={0}
                height={0}
                style={{
                    margin: '0px 30px',
                    height: '60px',
                    width: 'auto',
                }}
            />
        </Anchor>
    ));

    return (
        <>
            <div
                style={{
                    paddingTop: '40px',
                    paddingBottom: '40px',
                    backgroundColor: '#f2f4f6',
                    borderTop: '0.0625rem solid #e9ecef',
                }}
            >
                <Container size="xl">
                    <Flex gap={100}>
                        <Marquee
                            autoFill
                            pauseOnHover
                            gradient
                            gradientColor={[242, 244, 246]}
                            speed={40}
                            loop={0}
                            className={classes.marque}
                        >
                            {airlines}
                        </Marquee>
                    </Flex>
                </Container>
            </div>
        </>
    );
};

export default AirlineLogo;
