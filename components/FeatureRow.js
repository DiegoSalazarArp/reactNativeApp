import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeatureRow = ({ id, title, description }) => {
  const [restaurants, setRestaurant] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
            *[_type == "featured" && _id == $id] {
                ...,
                restaurants[] ->{
                    ...,
                    dishes[] ->,
                    type ->{
                        name
                    }
                }
            }[0]
            
        `,
        { id }
      )
      .then((data) => {
        setRestaurant(data?.restaurants);
      });
  }, []);


  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-3">
        <Text className="font-bold text-lg"> {title} </Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description} </Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* RestaurantCard */}
        {restaurants.map((res) => (
          <RestaurantCard
            key={res._id}
            id={res._id}
            imgUrl={res.image}
            titulo={res.name}
            raiting={res.rating}
            genero={res.type?.name}
            direccion={res.address}
            descripcion={res.short_description}
            platos={res.dishes}
            long={res.long}
            lat={res.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeatureRow;
