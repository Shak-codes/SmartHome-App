import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import MiniCard from '../../components/MiniCard/MiniCard';
import Clock from '../../components/Clock/clock';

export default function DevicesScreen() {
    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(theme);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTop}>Your</Text>
            <Text style={styles.headerBottom}>Devices</Text>
          </View>
          <Clock textColor='#fff'/>
        </View>
        <MiniCard title='Lamp 1' source={require('../../assets/lamp2.png')} onPress={() => console.log('test')} />
        <MiniCard title='Lamp 2' source={require('../../assets/lamp2.png')} onPress={() => console.log('test')} />
        <MiniCard title='Heater' source={require('../../assets/lamp2.png')} onPress={() => console.log('test')} />
        <MiniCard title='Humidifier' source={require('../../assets/lamp2.png')} onPress={() => console.log('test')} />
        <StatusBar style="light" />
      </View>
    );
}

const getStyles = (theme: any) => StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: theme.background,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  text: {
    color: theme.text
  }
});