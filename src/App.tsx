// src/navigation/AppNavigator.tsx
import React, {useState, useEffect} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DevicesScreen, RoutineScreen, SettingsScreen } from './screens';
import { useTheme } from './theme/themeContext';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import ReminderScreen from './screens/reminders/reminders';

export type RootStackParamList = {
  Home: undefined;  // No parameters expected to be passed to route when navigating
  Reminders: undefined;
  Devices: undefined;
  Automations: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Thin': require('./assets/fonts/URWGeometricThin.otf'),
      'Extra-Light': require('./assets/fonts/URWGeometricExtraLight.otf'),
      'Light': require('./assets/fonts/URWGeometricLight.otf'),
      'Regular': require('./assets/fonts/URWGeometricRegular.otf'),
      'Medium': require('./assets/fonts/URWGeometricMedium.otf'),
      'Semi-Bold': require('./assets/fonts/URWGeometricSemiBold.otf'),
      'Bold': require('./assets/fonts/URWGeometricBold.otf'),
      'Extra-Bold': require('./assets/fonts/URWGeometricExtraBold.otf'),
      'Black': require('./assets/fonts/URWGeometricBlack.otf'),

    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }
  
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme.name === 'dark' ? DarkTheme : DefaultTheme}  // React Navigation provides themes that match system themes
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Reminders" component={ReminderScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Devices" component={DevicesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Automations" component={RoutineScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;