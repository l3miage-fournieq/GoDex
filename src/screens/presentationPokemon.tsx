import React, {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MyScreen(): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.vue}>
      <TouchableOpacity
        style={styles.petit_cadre}
        onPress={() => navigation.navigate('Metamorphe')}>
        <Image
          source={require('../assets/home/metamorphe.png')}
          style={styles.image_petit_cadre}
        />
      </TouchableOpacity>
      <View style={styles.petit_cadre}>
        <Image
          style={styles.image_petit_cadre}
          source={require('../assets/home/oeuf.png')}
        />
      </View>
      <View style={styles.petit_cadre}>
        <Image
          style={styles.image_petit_cadre}
          source={require('../assets/home/type_dragon.png')}
        />
      </View>
      <View style={styles.petit_cadre}>
        <Image
          style={styles.image_petit_cadre}
          source={require('../assets/home/meteo.png')}
        />
      </View>
      <View style={styles.grand_cadre}>
        <Image
          style={styles.image_grand_cadre}
          source={require('../assets/home/community_day.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vue: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 80,
  },
  petit_cadre: {
    width: '46%',
    height: '27%',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  grand_cadre: {
    width: '94%',
    height: 250,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_petit_cadre: {
    width: '80%',
    height: '80%',
  },
  image_grand_cadre: {
    height: '90%',
    aspectRatio: 1.2,
  },
});
