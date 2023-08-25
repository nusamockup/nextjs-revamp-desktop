import { Button, Container } from '@ns-ui/core';
import { notifications, Notifications } from '@ns-ui/notifications';

const Toast = () => {
    return (
        <>
            <Container size={'xl'}>
                <Button
                    variant="outline"
                    onClick={() =>
                        notifications.show({
                            title: 'Default notification',
                            message: 'Hey there!!',
                        })
                    }
                >
                    Show notification
                </Button>
                <Notifications position="top-right" zIndex={2077} />
            </Container>
        </>
    );
};

export default Toast;
