import { createStyles } from '@ns-ui/styles';
import {
    ActionIcon,
    Box,
    Card,
    Container,
    CopyButton,
    Group,
    Paper,
    SimpleGrid,
    Stack,
    Text,
    Title,
    Tooltip,
} from '@ns-ui/core';
import { IconAdjustments, IconCheck, IconCopy } from '@tabler/icons-react';
import Image from 'next/image';

const useStyles = createStyles((theme) => ({
    ticketContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    ticket: {
        // animation: "bouncingCard 0.6s ease-out infinite alternate",
        backgroundColor: '#38a4f9',
        color: '#FFF',
        borderRadius: '2px',
        width: '100%',
    },
    ticketShadow: {
        // animation: "bouncingShadow 0.6s ease-out infinite alternate",
        marginTop: '4px',
        width: '90%',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        filter: 'blur(12px)',
    },
    ticketTitle: {
        fontSize: '2.3rem',
        fontWeight: 700,
        padding: '0px 8px 4px',
        textAlign: 'center',
        lineHeight: '36px',
    },
    //   hr: { width: "90%", border: "1px solid #efefef" },
    ticketDetail: {
        fontSize: '1.1rem',
        fontWeight: 500,
        padding: '4px 16px',
        textAlign: 'center',
        marginTop: '12px',
        // backgroundColor: '#f1f1f1',
    },
    code: { marginRight: '24px' },
    ticketSubDetail: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1rem',
        backgroundColor: '#f1f1f1',
        padding: '12px 16px',
        color: '#000',
    },
    ticketRip: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '0 12px 12px 0',
        // backgroundColor: '#f1f1f1',
        '&:after': {
            position: 'absolute',
            width: '100%',
            height: '14px',
            background: '#f1f1f1',
            content: '""',
            top: '50%',
            zIndex: 1,
        },
    },
    ripLine: {
        width: '100%',
        borderTop: '1px solid #000',
        borderTopStyle: 'dashed',
    },
    circleLeft: {
        width: '17px',
        height: '28px',
        backgroundColor: '#FFF',
        borderRadius: '0 14px 14px 0',
        position: 'relative',
        zIndex: 2,
        marginLeft: -5,
    },
    circleRight: {
        width: '17px',
        height: '28px',
        backgroundColor: '#FFF',
        borderRadius: '14px 0 0 14px',
        position: 'relative',
        zIndex: 2,
        marginRight: -5,
    },
    currencyBox: {
        width: 40,
        height: 40,
        padding: 10,
        fontSize: '18px',
        fontWeight: 600,
        lineHeight: '19px',
        borderRadius: '50%',
        background: '#F9AB24',
        color: '#FFF',
        display: 'flex',
        position: 'absolute',
        top: 30,
        left: 10,
    },
    promoCode: {
        color: '#000',
        textAlign: 'center',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        padding: '4px 6px',
        border: '1px dashed #000',
        borderRadius: '4px',
        background: '#fff',
    },
    minSpend: {
        color: '#000',
        // textAlign: 'center',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        // padding: '0 6px',
        // border: '1px dashed #000',
        // borderRadius: '4px',
        // background: '#fff',
    },
}));

type TicketProps = {
    discvalue: number;
    minvalue: number;
    promocode: string;
    banklogo: string;
};

const TicketComp = (props: TicketProps) => {
    const { classes } = useStyles();
    const addSeparator = (num) =>
        num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    const discvalue = 100000;
    return (
        <>
            <div className={classes.ticketContainer}>
                <Paper
                    shadow="lg"
                    withBorder
                    className={classes.ticket}
                    pos="relative"
                >
                    {/* <hr> */}
                    <Box className={classes.currencyBox}>Rp</Box>
                    <div className={classes.ticketDetail}>
                        <Text lts={1}>Discount</Text>
                    </div>
                    <Text className={classes.ticketTitle}>
                        {addSeparator(props.discvalue)}
                    </Text>
                    <div className={classes.ticketRip}>
                        <div className={classes.circleLeft}></div>
                        <div className={classes.ripLine}></div>
                        <div className={classes.circleRight}></div>
                    </div>
                    <div className={classes.ticketSubDetail}>
                        <Stack spacing={0}>
                            <Text size={'xs'} mb={5}>
                                Min. Transaction
                            </Text>
                            <Group spacing={4}>
                                <Image
                                    src={`/img/bank/${props.banklogo}`}
                                    alt="DBS Logo"
                                    height={18}
                                    width={18}
                                />
                                <Text className={classes.minSpend}>
                                    Rp{addSeparator(props.minvalue)}
                                </Text>
                                {/* <ActionIcon variant="light">
                                    <IconAdjustments size="1.125rem" />
                                </ActionIcon> */}
                            </Group>
                        </Stack>
                        <Stack spacing={0}>
                            <Text size={'xs'}>Promo Code</Text>
                            <Group spacing={4}>
                                <Text className={classes.promoCode}>
                                    {/* NTDIGI100 */}
                                    {props.promocode}
                                </Text>
                                <CopyButton
                                    value={props.promocode}
                                    timeout={2000}
                                >
                                    {({ copied, copy }) => (
                                        <Tooltip
                                            label={copied ? 'Copied' : 'Copy'}
                                            withArrow
                                            position="right"
                                        >
                                            <ActionIcon
                                                color={copied ? 'teal' : 'gray'}
                                                onClick={copy}
                                                variant="light"
                                            >
                                                {copied ? (
                                                    <IconCheck size="1.125rem" />
                                                ) : (
                                                    <IconCopy size="1.125rem" />
                                                )}
                                            </ActionIcon>
                                        </Tooltip>
                                    )}
                                </CopyButton>
                                {/* <ActionIcon variant="light">
                                    <IconAdjustments size="1.125rem" />
                                </ActionIcon> */}
                            </Group>
                        </Stack>
                    </div>
                </Paper>
                {/* <div className={classes.ticketShadow}></div> */}
            </div>
        </>
    );
};

export default TicketComp;
