import { Container, Grid, Paper, Title } from '@ns-ui/core';
import BodyBg from 'src/comps/home/body-bg';
import SidebarComp from 'src/comps/my-booking/sidebar-comp';
import SupportBannerText from 'src/comps/support/support-banner-text';

const Contacts = () => {
    return (
        <>
            <BodyBg color="#f8f8f8" />
            <SupportBannerText text="My Awesome Journey" />
            <Container mt={'xl'} size={'xl'}>
                <Grid>
                    <Grid.Col span={9}>
                        <div>Contacts</div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <SidebarComp name="eddie" />
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    );
};

export default Contacts;
