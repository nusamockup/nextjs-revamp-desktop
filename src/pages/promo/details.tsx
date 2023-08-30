import { css, Global } from '@emotion/react';
import {
    Anchor,
    Box,
    Button,
    Card,
    Container,
    List,
    SimpleGrid,
    Text,
    Title,
} from '@ns-ui/core';
import Link from 'next/link';
import FooterPre from 'src/comps/footer/footer-pre';
import NsImage from 'src/comps/ns-image/ns-image';
import TicketComp from 'src/comps/promo/ticket-comp';

const Details = () => {
    return (
        <>
            <Global
                styles={css`
                    header {
                        background-color: #eff3f9 !important;
                        border-bottom: none !important;
                    }
                `}
            />
            <Box mt="-20px" bg={'#eff3f9'} h={'215px'}></Box>
            <Container size={'md'} mt={-180}>
                <Title order={3} fw={500} mb={32}>
                    DBS X NusaTrip "Thursday Deals"
                </Title>
                <Card
                    sx={{
                        boxShadow:
                            '0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 0 1.75rem 1.4375rem -0.4375rem, rgba(0, 0, 0, 0.16) 0 0.75rem 0.75rem -0.4375rem',
                    }}
                    // shadow={'lg'}
                >
                    <Card.Section>
                        <NsImage
                            src="/img/promo/5aa39bd085807260a29733e4b772eddb.png"
                            height={338}
                        />
                    </Card.Section>
                </Card>
                <Box w={'75%'} mx={'auto'} mb={64}>
                    <Title order={3} fw={400} ta="center" mt={64}>
                        Liburan lebih untung #BarengNusaTripAja
                    </Title>
                    <Text size={'lg'} ta="center" mt={16} c="dimmed">
                        Nikmati diskon hingga IDR 350.000 untuk transaksi setiap
                        hari Kamis, menggunakan Bank DBS.
                    </Text>
                </Box>
                <Text>
                    Gunakan kode promo di bawah ini untuk dapetin diskonnya!
                </Text>
                <SimpleGrid spacing={30} cols={3} mt={'xl'}>
                    <TicketComp
                        discvalue={100000}
                        minvalue={1750000}
                        promocode={'NTDIGI100'}
                        banklogo={'dbs-logo.png'}
                    />
                    <TicketComp
                        discvalue={225000}
                        minvalue={2500000}
                        promocode={'NTDIGI225'}
                        banklogo={'dbs-logo.png'}
                    />
                    <TicketComp
                        discvalue={350000}
                        minvalue={5000000}
                        promocode={'NTDIGI350'}
                        banklogo={'dbs-logo.png'}
                    />
                </SimpleGrid>
                <Title order={4} fw={400} mt={64} mb={16}>
                    Syarat & Ketentuan :
                </Title>
                <List size={'sm'}>
                    <List.Item>
                        Periode Promo 6 Juli - 28 Desember 2023
                    </List.Item>
                    <List.Item>
                        Promo hanya berlaku untuk transaksi pembelian hari Kamis
                    </List.Item>
                    <List.Item>
                        Promo berlaku khusus untuk transaksi yang menggunakan
                        Kartu Kredit digibank yang diterbitkan di Indonesia
                    </List.Item>
                    <List.Item>
                        Promo hanya berlaku di website/mobile web
                        www.nusatrip.com
                    </List.Item>
                    <List.Item>
                        Promo berlaku dengan memasukkan kode voucher pada
                        halaman pembayaran (checkout page) Website NusaTrip
                    </List.Item>
                    <List.Item>
                        Promo berlaku untuk 1 (satu) kali transaksi per 1 (satu)
                        nomor Kartu Kredit digibank per 1 (satu) user ID per
                        kode promo pada Website NusaTrip selama Periode Promo
                    </List.Item>
                    <List.Item>
                        Promo tidak dapat digabungkan dengan promosi dan voucher
                        lainnya yang sedang berjalan di Website NusaTrip
                    </List.Item>
                    <List.Item>
                        Program bersifat non-refundable dan tidak dapat
                        diuangkan
                    </List.Item>
                    <List.Item>
                        Kuota Promo terbatas, jika nilai potongan promo tidak
                        memotong transaksi pembelanjaan pada laman pembayaran
                        (checkout page) maka kuota Promo sudah habis
                    </List.Item>
                    <List.Item>
                        Promo berlaku untuk pembayaran penuh (full payment)
                    </List.Item>
                    <List.Item>
                        Untuk penjelasan lebih lanjut dapat menghubungi Customer
                        Care NusaTrip di : 021 – 5060 8747
                    </List.Item>
                    <List.Item>
                        Syarat dan Ketentuan ini telah disesuaikan dengan
                        peraturan perundang-undangan termasuk ketentuan
                        peraturan Otoritas Jasa Keuangan. PT Bank DBS Indonesia
                        berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK)
                    </List.Item>
                </List>

                <SimpleGrid cols={2} spacing={30} mt={40} mb={20}>
                    <Button fullWidth component={Link} href={'/flights'}>
                        Cari Tiket
                    </Button>
                    <Button fullWidth component={Link} href={'/hotels'}>
                        Cari Hotel
                    </Button>
                </SimpleGrid>
                <Anchor
                    c={'dark'}
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                    }}
                    component={Link}
                    href={'/promos'}
                >
                    view all promos
                </Anchor>
            </Container>

            <Box bg="#F1F5F9" mt={120} mb="-7.5rem">
                <Container size="lg">
                    <FooterPre />
                </Container>
            </Box>
        </>
    );
};

export default Details;
