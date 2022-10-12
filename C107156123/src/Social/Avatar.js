import React from 'react';
import { View, Image } from 'react-native';
import suscribeIcon from './images/suscribe.png';

import styles from './Avatar.style';

const Avatar = (props) => {
  const { avatar, isSuscribe } = props;
  return (
    <View style={[styles.avatarContent, isSuscribe ? styles.suscribeBorder : styles.unSuscribeBorder]}>
      <Image source={avatar} style={styles.avatar} />
      {isSuscribe && <Image source={suscribeIcon} style={styles.suscribeIcon} />}
    </View>
  );
};

export default Avatar;
