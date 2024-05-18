import React, { useRef } from 'react';
import { Animated, Text, View, Pressable, StyleSheet, GestureResponderEvent, Easing, Image, ImageSourcePropType } from 'react-native';
import { useTheme } from '../../theme/themeContext';
import CustomSwitch from '../Switch/switch';

interface MiniCardProps {
  title: string;
  source: ImageSourcePropType;
  children?: React.ReactNode;
  onPress: (event: GestureResponderEvent) => void;
}

const MiniCard: React.FC<MiniCardProps> = ({ title, source, children, onPress}) => {
  const { theme, toggleTheme } = useTheme();
  const styles = getStyles(theme);
  const animatedValue = useRef(new Animated.Value(0)).current;

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.card, '#0d0f0f']
  });

  const handlePressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: false
    }).start();
  };

  return (
    <Animated.View style={[styles.animatedContainer, { backgroundColor }]}>
      <Pressable style={styles.container}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={source} resizeMode='contain' />
            </View>
            <Animated.View style={[styles.textContainer, { backgroundColor }]}>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
            </Animated.View>
            <View style={styles.childContainer}>
                {children}
                <CustomSwitch />
            </View>
      </Pressable>
    </Animated.View>
  );
};

const getStyles = (theme: any) => StyleSheet.create({
    animatedContainer: {
        width: '45%',
        height: '20%',
        borderRadius: 10,
        marginBottom: 15,
    },
    container: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    iconContainer: {
        flex: 1.25,
        paddingTop: '8%',
        paddingRight: '4%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: {
        width: '20%',
        height: '100%',
        opacity: 0.8,
    },
    textContainer: {
        flex: 3,
        backgroundColor: theme.card,
        borderRadius: 10,
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Black',
        color: theme.text,
    },
    childContainer: {
        flex: 2,
    }
});

export default MiniCard;