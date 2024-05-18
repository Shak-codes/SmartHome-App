import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../../theme/themeContext';

interface data {
    key: string;
    keyColor: string;
    description: string;
    ruleTiming: string;
    days: number;
}

interface ListProps {
  listData?: Array<data>;
}

const data = [
    {
        key: 'CS 230',
        keyColor: '#00f0c7',
        description: 'Assignment 1',
        ruleTiming: 'today at 4',
        days: 1,
    }, 
    {
        key: 'STAT 444', 
        keyColor: '#907cff',
        description: 'Quiz 1', 
        ruleTiming: 'tomorrow',
        days: 7,
    }
];

const List: React.FC<ListProps> = ({ listData = data }) => {
    const { theme, toggleTheme } = useTheme();
    const styles = getStyles(theme);
    return (
        <View style={styles.background}>
            {listData.map((obj) => {
                return (
                <View style={styles.container} key={obj.key}>
                    <View style={styles.column1}>
                        <Text style={[styles.key, {color: obj.keyColor}]}>{obj.key}</Text>
                        <Text style={styles.description}>{obj.description}</Text>
                        <View style={styles.ruleContainer}>
                            <Text style={styles.rule}>Turns lamps</Text>
                            <View style={[styles.ruleColor, {backgroundColor: getColor(obj.days)}]}></View>
                            <Text style={styles.rule}>{obj.ruleTiming}</Text>
                        </View>
                    </View>
                    <View style={styles.column2}>
                        <Text style={[styles.days, {color: getColor(obj.days)}]}>{obj.days} DAY(S)</Text>
                    </View>
                </View>
                )
            })}
        </View>
    );
};

const getColor = (days: number) => {
    if (days === 7) return '#339900';
    else if (days >= 5) return '#99cc33';
    else if (days === 4) return '#ffcc00';
    else if (days >= 2) return '#ff9966';
    else return '#cc3300';
}

const getStyles = (theme: any) => StyleSheet.create({
    background: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '20%',
        backgroundColor: theme.card,
        borderRadius: 5,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // borderBottomWidth: 0.5,
        // borderBottomColor: 'white',
    },
    column1: {
        marginLeft: '3%',
        flex: 3,
    },
    column2: {
        justifyContent: 'center',
        flex: 1
    },
    key: {
        fontFamily: 'Black',
        color: theme.text,
        fontSize: 14,
    },
    description: {
        color: theme.text,
        fontFamily: 'Semi-Bold',
        fontSize: 20,
    },
    ruleContainer: {
        flexDirection: 'row',
    },
    rule: {
        color: theme.text,
        fontFamily: 'Semi-Bold'
    },
    ruleColor: {
        marginTop: 6.5,
        marginHorizontal: 4.5,
        width: '8%',
        height: '50%',
        backgroundColor: 'blue',
    },
    days: {
        textAlign: 'center',
        fontFamily: 'Black',
        fontSize: 16,
    },
});

export default List