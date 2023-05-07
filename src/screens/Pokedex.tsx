import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type FirstLast = {
  first: number;
  last: number;
};

type Region = {
  [name: string]: FirstLast;
};

type m = {
  id: number[];
  uri: string[];
};

interface Props {
  region: string;
}

export default function PokedexRegionScreen({
  region = 'kanto',
}: Props): JSX.Element {
  const navigation = useNavigation();

  const generations: Region = {
    kanto: {first: 1, last: 151},
    johto: {first: 152, last: 251},
    hoenn: {first: 252, last: 386},
    sinnoh: {first: 387, last: 493},
    unova: {first: 494, last: 649},
    kalos: {first: 650, last: 721},
    alola: {first: 722, last: 809},
    galar: {first: 810, last: 905},
    Paldea: {first: 906, last: 1010},
  };

  const imagesPokemon: m = {id: [], uri: []};

  for (
    let i: number = generations[region].first;
    i <= generations[region].last;
    i++
  ) {
    imagesPokemon.id.push(i);
    imagesPokemon.uri.push(
      'https://raw.githubusercontent.com/PokeAPI/' +
        'sprites/master/sprites/pokemon/other/official-artwork/' +
        i +
        '.png',
    );
  }

  // @ts-ignore
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.separation}>
        <Text style={styles.region}>{region}</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={imagesPokemon.uri}
        numColumns={4}
        renderItem={({item}) => (
          <View style={styles.imageShadow}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  id: imagesPokemon.id[imagesPokemon.uri.indexOf(item)],
                })
              }>
              <Text>{imagesPokemon.id[imagesPokemon.uri.indexOf(item)]}</Text>
              <Image source={{uri: item}} style={styles.sprite} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item: string, index: number) => index.toString()}
        horizontal={false}
        scrollEnabled={true}
        contentContainerStyle={styles.listView}
        contentInset={{bottom: 100}}
      />
    </SafeAreaView>
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
    width: '23%',
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
