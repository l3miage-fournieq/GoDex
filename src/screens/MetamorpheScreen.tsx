import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {getDitto} from '../services/pokemonService';
import React, {useEffect, useState} from 'react';

export default function MetamorpheScreen() {
  const [dittoForm, setDittoForm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await getDitto();
      setDittoForm(result);
    }
    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.separation}>
        <Text style={styles.region}>Ditto transformations</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={Object.keys(dittoForm)}
        numColumns={3}
        renderItem={({item}) => (
          <View style={styles.imageShadow}>
            <Image
              source={{
                uri:
                  'https://raw.githubusercontent.com/PokeAPI/' +
                  'sprites/master/sprites/pokemon/other/official-artwork/' +
                  item +
                  '.png',
              }}
              style={styles.sprite}
            />
          </View>
        )}
        keyExtractor={(item: string, index: number) => index.toString()}
        horizontal={false}
        scrollEnabled={true}
        contentContainerStyle={styles.listView}
        contentInset={{bottom: 100}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  region: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  separation: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    flexDirection: 'row',
    height: 40,
  },
  back: {
    marginTop: 7,
    marginLeft: 7,
    width: 30,
    aspectRatio: 1,
  },
  sprite: {
    width: '80%',
    aspectRatio: 1,
    marginLeft: '10%',
  },
  listView: {
    paddingBottom: 80,
  },
  flatList: {
    width: '100%',
    paddingBottom: 100,
  },
  safeArea: {
    flex: 1,
  },
  imageShadow: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 10,
    margin: '1%',
    display: 'flex',
    justifyContent: 'center',
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
});
