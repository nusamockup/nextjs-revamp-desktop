import React from 'react';
import { SimpleGrid, Text, createStyles, Title } from '@ns-ui/core';

const useStyles = createStyles((theme) => ({
    listItem: {
        padding: '2px',
        borderBottom: '1px solid #ccc',
    },
}));

const PrimaNetwork = () => {
    const { classes } = useStyles();
    return (
        <>
            <Title mt={20} order={6} fw={500}>
                List of Banks supported by ATM PRIMA inter-bank transfer:
            </Title>
            <SimpleGrid spacing={0} mt={20} cols={5}>
                <Text size="xs" className={classes.listItem}>
                    Bank Agris
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank ANDA
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank ANZ
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Antardaerah
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Artha Graha
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BCA Syariah
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BJB
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BNI
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BNP
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BPD DIY
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BPD Kaltim
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BRI Syariah
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BTPN
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Bukopin
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Bumi Arta
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Central Asia (BCA)
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Chinatrust Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank CIMB Niaga
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Commonwealth
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank DKI
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Ekonomi Raharja
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Hana
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Maybank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Jasa Jakarta
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Jateng
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Jatim
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Kalbar
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mandiri
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Maspion
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mayapada Internasional
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mega
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mega Syariah Mandiri
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Muamalat Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mutiara
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Nusantara Parahyangan
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank OCBC NISP
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Papua
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Permata
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Pundi
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Rabobank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Rakyat Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Riau
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Royal
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank SBI Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sinarmas
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sulselbar
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sumselbabel
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Syariah Mandiri
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BTN
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank UOB Buana
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Victoria
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Windu
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Tokyo-Mitsubishi UFJ
                </Text>
            </SimpleGrid>
        </>
    );
};

export default PrimaNetwork;
