import React from 'react';
import { SimpleGrid, Text, createStyles, Title } from '@ns-ui/core';

const useStyles = createStyles((theme) => ({
    listItem: {
        padding: '2px',
        borderBottom: '1px solid #ccc',
    },
}));

const AtmbersamaNetwork = () => {
    const { classes } = useStyles();
    return (
        <>
            <Title mt={20} order={6} fw={500}>
                List of Banks supported by ATM Bersama inter-bank transfer :
            </Title>
            <SimpleGrid spacing={0} mt={20} cols={5}>
                <Text size="xs" className={classes.listItem}>
                    ANZ Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Aceh
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Agroniaga
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Artos Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Bengkulu
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BJB
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank BNP
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Bukopin
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Capital
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Commonwealth
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank DKI
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Ekonomi
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Ganesha
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank ICB Bumiputera
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Ina Perdana
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Index
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Jabar Banten Syariah
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Jambi
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
                    Bank Kalsel
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Kaltim
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Kesejahteraan
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Lampung
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Maluku
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mayapada Internasional
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mayora
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mega
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Mestika
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Muamalat
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Nagari
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Nobu
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank NTB
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank NTT
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank of India Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Panin
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Papua
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Pundi
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank QNB Kesawan
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Riau Kepri
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Saudara
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sinarmas
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sulselbar
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sulteng
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sultra
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sulut
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sumsel Babel
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Sumut
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Syariah Mandiri
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Bank Syariah Mega Indonesia
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Maybank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BNI 46
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BPD Bali
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BPD DIY
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BPD Kalteng
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BPR Karyajatnika Sadaya
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BPR Semoga Jaya
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BRI
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BRI Syariah
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BTN
                </Text>
                <Text size="xs" className={classes.listItem}>
                    BTPN
                </Text>
                <Text size="xs" className={classes.listItem}>
                    CIMB Niaga
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Citibank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Danamon
                </Text>
                <Text size="xs" className={classes.listItem}>
                    DBS
                </Text>
                <Text size="xs" className={classes.listItem}>
                    HSBC
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Mandiri
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Mutiara Bank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    OCBC NISP
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Permata Bank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Rabobank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Standard Chartered Bank
                </Text>
                <Text size="xs" className={classes.listItem}>
                    Telkomsel (TCASH)
                </Text>
                <Text size="xs" className={classes.listItem}>
                    UOB Indonesia
                </Text>
            </SimpleGrid>
        </>
    );
};

export default AtmbersamaNetwork;
