import { Platform } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

let firebaseMessaging = null;

try {
  firebaseMessaging = require('@react-native-firebase/messaging').default;
} catch (error) {
  console.warn('[notifications] Firebase messaging is not available in this runtime:', error.message);
}

export const shouldUseFirebaseMessaging = () => {
  return Platform.OS !== 'web' && Constants.appOwnership !== 'expo' && Boolean(firebaseMessaging);
};

export const getFirebaseMessaging = () => {
  if (!shouldUseFirebaseMessaging()) {
    return null;
  }

  return firebaseMessaging();
};

export const registerForPushNotifications = async (email, serverAPIURL, axios) => {
  if (!Device.isDevice || !shouldUseFirebaseMessaging()) {
    console.info('[notifications] Skipping push registration in Expo Go or non-native runtime.');
    return null;
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const messagingInstance = getFirebaseMessaging();
  if (!messagingInstance) {
    return null;
  }

  const authStatus = await messagingInstance.requestPermission();
  const enabled =
    authStatus === messagingInstance.AuthorizationStatus.AUTHORIZED ||
    authStatus === messagingInstance.AuthorizationStatus.PROVISIONAL;

  if (!enabled) {
    return null;
  }

  const token = await messagingInstance.getToken();

  if (axios && serverAPIURL && email) {
    await axios.post(`${serverAPIURL}/register-token`, { token, email });
  }

  return token;
};

export const subscribeToNotificationListeners = (handlers = {}) => {
  const messagingInstance = getFirebaseMessaging();
  if (!messagingInstance) {
    return () => {};
  }

  const unsubscribeForeground = messagingInstance.onMessage(async (remoteMessage) => {
    handlers.onMessage?.(remoteMessage);
  });

  const unsubscribeOpened = messagingInstance.onNotificationOpenedApp((remoteMessage) => {
    handlers.onOpened?.(remoteMessage);
  });

  const unsubscribeBackground = messagingInstance.setBackgroundMessageHandler(async (remoteMessage) => {
    handlers.onBackgroundMessage?.(remoteMessage);
  });

  return () => {
    unsubscribeForeground?.();
    unsubscribeOpened?.();
    unsubscribeBackground?.();
  };
};
