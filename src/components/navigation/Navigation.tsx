import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import MyScreen from '../../screens/presentationPokemon';
import PokedexScreen from '../../screens/Pokedex';
import MetamorpheScreen from '../../screens/MetamorpheScreen';
import DetailsScreen from '../../screens/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Tab = createBottomTabNavigator();

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#3B556D',
            borderRadius: 30,
            position: 'absolute',
            left: 20,
            right: 20,
            bottom: 20,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => {
            let logoPath;

            if (route.name === 'Informations') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/home-focused.png')
                : require('../../assets/bottomNavigator/home.png');
            } else if (route.name === 'Pokedex') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/pokedex-focused.png')
                : require('../../assets/bottomNavigator/pokedex.png');
            } else if (route.name === 'Metamorphe') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/pokedex-focused.png')
                : require('../../assets/bottomNavigator/pokedex.png');
            } else if (route.name === 'Details') {
              logoPath = focused
                ? require('../../assets/bottomNavigator/pokedex-focused.png')
                : require('../../assets/bottomNavigator/pokedex.png');
            }
            return <Image source={logoPath} style={{width: 25, height: 25}} />;
          },
        })}>
        <Tab.Screen name="Informations" children={() => <MyScreen />} />
        <Tab.Screen
          name="Pokedex"
          children={() => <PokedexScreen region={'johto'} />}
        />
        <Tab.Screen
          name={'Metamorphe'}
          children={() => <MetamorpheScreen />}
          options={{tabBarItemStyle: {display: 'none'}}}
        />
        <Tab.Screen
          name={'Details'}
          children={() => <DetailsScreen/>}
          options={{tabBarItemStyle: {display: 'none'}}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
