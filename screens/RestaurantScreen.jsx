import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import dish from "../sanity/schemas/dish";
import DishRow from "../components/DishRow";

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      titulo,
      raiting,
      genero,
      direccion,
      descripcion,
      platos,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
        >
          <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{titulo}</Text>
          <View className="flex-row space-x-2 my-1 ">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opaticy={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{raiting}</Text> . {genero}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon color="green" opaticy={0.5} size={22} />
              <Text className="text-xs text-gray-500">Cerca . {direccion}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{descripcion}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
            <Text className="pl-2 flex-1 text-md font-bold">
                Tienes problemas con la comida?
            </Text>
            <ChevronRightIcon color="#00CCBB"/>
        </TouchableOpacity>
      </View>
      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {/* dishRow */}
        {platos.map((plato) => (
            <DishRow 
                key={plato._id}
                id={plato._id}
                nombre={plato.name}
                descripcion={plato.short_description}
                precio={plato.price}
                imagen={plato.image}
            
            />
        ))}
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
