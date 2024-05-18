import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import Clock from '../../components/Clock/clock';

export default function RoutineScreen() {
    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(theme);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTop}>Your</Text>
            <Text style={styles.headerBottom}>Routines</Text>
          </View>
          <Clock textColor='#fff'/>
        </View>
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