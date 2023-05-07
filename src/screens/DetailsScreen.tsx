import React, {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import { getEvolutions, getPokemon } from "../services/pokemonService";
import {useEffect, useState} from 'react';

const types = {
  bug: require('../assets/types/bug.webp'),
  dark: require('../assets/types/dark.webp'),
  dragon: require('../assets/types/dragon.webp'),
  electric: require('../assets/types/electric.webp'),
  fairy: require('../assets/types/fairy.webp'),
  fighting: require('../assets/types/fighting.webp'),
  fire: require('../assets/types/fire.webp'),
  flying: require('../assets/types/flying.webp'),
  ghost: require('../assets/types/ghost.webp'),
  grass: require('../assets/types/grass.webp'),
  ground: require('../assets/types/ground.webp'),
  ice: require('../assets/types/ice.webp'),
  normal: require('../assets/types/normal.webp'),
  poison: require('../assets/types/poison.webp'),
  psychic: require('../assets/types/psychic.webp'),
  rock: require('../assets/types/rock.webp'),
  steel: require('../assets/types/steel.webp'),
  water: require('../assets/types/water.webp'),
};

function capitalize(str: string | null): string | null {
  if (!str) {
    return null;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function DetailsScreen(): JSX.Element {
  const route = useRoute();
  const [pokemonDetails, setPokemonDetails] = useState();
  const [pokemonEvos, setPokemonEvos] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getPokemon(route.params.id);
      setPokemonDetails(JSON.parse(JSON.stringify(result)));
    }
    fetchData();
  }, [route.params.id]);


  let type1: any;
  switch (pokemonDetails?.types[0]?.type?.name) {
    case 'normal':
      type1 = types.normal;
      break;
    case 'fighting':
      type1 = types.fighting;
      break;
    case 'flying':
      type1 = types.flying;
      break;
    case 'poison':
      type1 = types.poison;
      break;
    case 'ground':
      type1 = types.ground;
      break;
    case 'rock':
      type1 = types.rock;
      break;
    case 'bug':
      type1 = types.bug;
      break;
    case 'ghost':
      type1 = types.ghost;
      break;
    case 'steel':
      type1 = types.steel;
      break;
    case 'fire':
      type1 = types.fire;
      break;
    case 'water':
      type1 = types.water;
      break;
    case 'grass':
      type1 = types.grass;
      break;
    case 'electric':
      type1 = types.electric;
      break;
    case 'psychic':
      type1 = types.psychic;
      break;
    case 'ice':
      type1 = types.ice;
      break;
    case 'dragon':
      type1 = types.dragon;
      break;
    case 'dark':
      type1 = types.dark;
      break;
    case 'fairy':
      type1 = types.fairy;
      break;
    default:
      type1 = null;
  }
  let type2: any;
  switch (pokemonDetails?.types[1]?.type?.name) {
    case 'normal':
      type2 = types.normal;
      break;
    case 'fighting':
      type2 = types.fighting;
      break;
    case 'flying':
      type2 = types.flying;
      break;
    case 'poison':
      type2 = types.poison;
      break;
    case 'ground':
      type2 = types.ground;
      break;
    case 'rock':
      type2 = types.rock;
      break;
    case 'bug':
      type2 = types.bug;
      break;
    case 'ghost':
      type2 = types.ghost;
      break;
    case 'steel':
      type2 = types.steel;
      break;
    case 'fire':
      type2 = types.fire;
      break;
    case 'water':
      type2 = types.water;
      break;
    case 'grass':
      type2 = types.grass;
      break;
    case 'electric':
      type2 = types.electric;
      break;
    case 'psychic':
      type2 = types.psychic;
      break;
    case 'ice':
      type2 = types.ice;
      break;
    case 'dragon':
      type2 = types.dragon;
      break;
    case 'dark':
      type2 = types.dark;
      break;
    case 'fairy':
      type2 = types.fairy;
      break;
    default:
      type2 = null;
  }

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          width: '100%',
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text style={styles.nom}>
          {capitalize(pokemonDetails?.forms[0]?.name)}
        </Text>
        <View
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginRight: 5,
          }}>
          {type1 && (
            <View style={styles.imageShadow}>
              {type1 && (
                <Image style={{height: '70%', aspectRatio: 1}} source={type1} />
              )}
            </View>
          )}
          {type2 && (
            <View style={styles.imageShadow}>
              <Image style={{height: '70%', aspectRatio: 1}} source={type2} />
            </View>
          )}
        </View>
      </View>

      <View style={styles.mainView}>
        <Image
          style={{width: '50%', aspectRatio: 1}}
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/' +
              'sprites/master/sprites/pokemon/other/official-artwork/' +
              route.params?.id +
              '.png',
          }}
        />
        <View
          style={{width: '30%', display: 'flex', justifyContent: 'flex-start'}}>
          <Text style={styles.numero}>N° {route.params.id}</Text>
          <Image
            style={{width: '100%', aspectRatio: 1}}
            source={{
              uri:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/' +
                route.params?.id +
                '.png',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  nom: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginTop: 5,
    marginLeft: '10%',
    fontWeight: 'bold',
  },
  numero: {
    color: '#1C2942',
    fontSize: 24,
    fontFamily: 'Roboto',
    marginBottom: 25,
  },
  imageShadow: {
    height: '70%',
    aspectRatio: 1,
    borderRadius: 50,
    marginRight: 10,
    marginTop: '7%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
