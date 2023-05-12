import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Stats({
  hp,
  attack,
  attackSpe,
  defence,
  defenceSpe,
}: {
  hp: number;
  attack: number;
  attackSpe: number;
  defence: number;
  defenceSpe: number;
}) {
  return (
    <View style={styles.mainView}>
      <View style={styles.hpView}>
        <Text style={styles.text}>HP: {hp}</Text>
      </View>
      <View style={styles.attackView}>
        <Text style={styles.text}>Attack: {attack}</Text>
        <Text style={styles.text}>Special Attack: {attackSpe}</Text>
      </View>
      <View style={styles.defenceView}>
        <Text style={styles.text}>Defense: {defence}</Text>
        <Text style={styles.text}>Special Defense: {defenceSpe}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: '#fff',
  },
  hpView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 5,
  },
  attackView: {
    padding: 8,
    height: 60,
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
  },
  defenceView: {
    padding: 8,
    height: 60,
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
  },
  text: {
    color: '#1C2942',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
});
