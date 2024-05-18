import React, {useState} from 'react';
import { Switch, StyleSheet } from 'react-native';

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    const state = isEnabled ? 'false' : 'true'
    fetch(`http://10.120.7.180:5000/light?id=f70e2754-3a16-4452-9d10-a45a7733e6ee&on=${state}`, {
        method: 'PUT',
    })
    .then(response => response.json())
    .catch(error => console.error(error));
    setIsEnabled(previousState => !previousState);  
  };

  return (
    <Switch
      trackColor={{false: '#fff50', true: '#fff50'}}
      thumbColor={isEnabled ? '#fff' : '#fff'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.switch}
      
    />
  );
};

const styles = StyleSheet.create({
  switch: {
    transform:[{ scaleX: 1.2 }, { scaleY: 1.2 }]
  }
});

export default CustomSwitch;