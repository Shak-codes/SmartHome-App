import dayjs from "dayjs";
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/themeContext';

interface ClockProps {
  textColor: string;
}

const Clock: React.FC<ClockProps> = ({textColor}) => {
    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(textColor);
    const [date, setDate] = useState(dayjs());

    useEffect(() => {
        const interval = setInterval(() => { setDate(dayjs()) }, 1000);
        return () => clearInterval(interval);
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.time}>{date.format("HH:mm")}</Text>
        </View>
    );
};

const getStyles = (textColor: string) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    date: {},
    time: {
        textAlign: 'right',
        fontFamily: 'Black',
        fontSize: 57,
        color: '#fff',
    },
});

export default Clock