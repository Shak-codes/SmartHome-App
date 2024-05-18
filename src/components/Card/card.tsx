import React, { useRef } from 'react';
import { Animated, Text, View, Pressable, StyleSheet, StyleProp, ViewStyle, GestureResponderEvent, Easing, Image, ImageSourcePropType } from 'react-native';
import { useTheme } from '../../theme/themeContext';

interface CardProps {
  title: string;
  subtitle?: string;
  source: ImageSourcePropType;
  onPress: (event: GestureResponderEvent) => void;
}

const Card: React.FC<CardProps> = ({ title, subtitle, source, onPress}) => {
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
        <Animated.View style={[styles.textContainer, { backgroundColor }]}>
          <Text style={styles.title}>{title.toUpperCase()}</Text>
          {subtitle && <Text style={styles.desc}>{subtitle}</Text>}
        </Animated.View>
        <Image style={styles.background} source={require('../../assets/background.png')} resizeMode='cover' />
        <Image style={styles.image} source={source} resizeMode='contain' />
      </Pressable>
    </Animated.View>
  );
};

const getStyles = (theme: any) => StyleSheet.create({
    animatedContainer: {
      width: '100%',
      height: '12.5%',
      borderRadius: 10,
      marginBottom: 15,
    },
    container: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      borderRadius: 10,
      overflow: 'hidden',
    },
    textContainer: {
      backgroundColor: theme.card,
      borderRadius: 10,
      width: 'auto',
      height: 'auto',
      marginLeft: '7%',
      alignSelf: 'center',
      zIndex: 2,
    },
    title: {
      textAlign: 'left',
      fontSize: 24,
      fontFamily: 'Black',
      color: theme.text,
    },
    desc: {
      marginTop: '-5%',
      textAlign: 'center',
      fontFamily: 'Semi-Bold',
      fontSize: 14,
      color: theme.text,
    },
    background: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    image: {
      position: 'absolute',
      alignSelf: 'center',
      width: '140%',
      height: '140%',
      opacity: 0.8,
    },
});

export default Card;