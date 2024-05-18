import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import Chip from '../../components/Chip/chip';
import List from '../../components/List/list';
import Clock from '../../components/Clock/clock';
import Card from '../../components/Card/card';

type NavigationType = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationType>();
  const { theme, toggleTheme } = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTop}>Welcome, </Text>
            <Text style={styles.headerBottom}>Shakir!</Text>
          </View>
          <Clock textColor='#fff'/>
        </View>
        <Chip title='Reminders' backgroundColor={theme.accent2} textColor={theme.cardText}/>
        <List />
        <Chip title='Pages' backgroundColor={theme.accent2} textColor={theme.cardText}/>
        <Card 
          title='Reminders' 
          source={require('../../assets/reminders.png')} 
          onPress={() => navigation.navigate('Reminders')}
        />
        <Card 
          title='Devices' 
          subtitle='1/4 devices on' 
          source={require('../../assets/devices2.png')} 
          onPress={() => navigation.navigate('Devices')}
        />
        <Card 
          title='Routines' 
          subtitle='3 active routines' 
          source={require('../../assets/routines2.png')} 
          onPress={() => navigation.navigate('Automations')}
        />
        <Card 
          title='Settings' 
          source={require('../../assets/settings2.png')} 
          onPress={() => navigation.navigate('Settings')}
        />
        <StatusBar style="light" />
    </View>
  );
}

const getStyles = (theme: any) => StyleSheet.create({
  container: {
    backgroundColor: theme.background,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  header: {
    flexDirection: 'row',
  },
  headerTop: {
    fontFamily: 'Light',
    fontSize: 30,
    color: theme.text,
  },
  headerBottom: {
    fontFamily: 'Extra-Bold',
    marginTop: '-2.5%',
    fontSize: 30,
    color: theme.text,
  },
  item: {
    minWidth: '100%',
    borderWidth: 2,
    borderColor: theme.accent2,
    color: theme.text,
    padding: 10,
    fontSize: 18,
  },
});