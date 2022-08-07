import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { MinusCircleIcon } from "react-native-heroicons/outline";

const DishRow = ({ id, nombre, descripcion, precio, imagen }) => {

    const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 or-2">
            <Text className="text-lg mb-1">{nombre}</Text>
            <Text className="text-gray-400">{descripcion}</Text>
            <Text className="text-gray-400 mt-2">CLP {precio}</Text>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
              width: 100,
              
            }}
            source={{ uri: urlFor(imagen).url() }}
            className="h-20 w-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>
    {isPressed && (
        <View>
            <View>
                <TouchableOpacity>
                    <MinusCircleIcon
                        color={items.length > 0 ? "#00CCBB": "gray"}
                    />

                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  );
};

export default DishRow;
