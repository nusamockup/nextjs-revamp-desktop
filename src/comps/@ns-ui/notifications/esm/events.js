import { createUseExternalEvents } from '@ns-ui/utils';

const [useNotificationsEvents, createEvent] = createUseExternalEvents("nsui-notifications");
const showNotification = createEvent("show");
const hideNotification = createEvent("hide");
const cleanNotifications = createEvent("clean");
const cleanNotificationsQueue = createEvent("cleanQueue");
const updateNotification = createEvent("update");
const notifications = {
  show: showNotification,
  hide: hideNotification,
  clean: cleanNotifications,
  cleanQueue: cleanNotificationsQueue,
  update: updateNotification
};

export { cleanNotifications, cleanNotificationsQueue, createEvent, hideNotification, notifications, showNotification, updateNotification, useNotificationsEvents };
//# sourceMappingURL=events.js.map
