import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/themeContext';

interface ChipProps {
    title: string;
    backgroundColor: string;
    textColor: string;
}

const Chip: React.FC<ChipProps> = ({ title, backgroundColor, textColor}) => {
    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(backgroundColor, textColor);
    return (
        <View style={styles.background}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
        </View>
    );
};

const getStyles = (backgroundColor: string, textColor: string) => StyleSheet.create({
    background: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        width: '35%',
        height: '3%',
        backgroundColor: backgroundColor,
        marginTop: '5%',
        marginBottom: '2%',
    },
    title: {
        fontFamily: 'Black',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: textColor,
    },
});

export default Chip