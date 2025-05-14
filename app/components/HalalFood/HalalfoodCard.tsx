import { View, Text, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Linking } from 'react-native';
import { Image } from 'expo-image';
import { getImageByID } from '@/Utils/api';
import React, { useState, useEffect } from 'react';
import { Place } from '@/Utils/types';

const HalalfoodCard: React.FC<Place> = ({ name, description, location, link, image_id, method, category }) => {
  const [image, setImage] = useState<string | null>(null);
  const [isPressed, setIsPressed] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  useEffect(() => {
    if (image_id) {
      const fetchImage = async () => {
        try {
          const data = await getImageByID(image_id);
          setImage(data.toString());
          setLoadingImage(false);
        } catch (error) {
          console.error('Error loading image', error);
          setLoadingImage(false);
        }
      };

      fetchImage();
    }
  }, [image_id]);

  const onPress = () => setIsPressed(!isPressed);

  return (
    <View className='flex flex-col w-full shadow-md shadow-slate-200 justify-between bg-white rounded-xl px-4 py-2'>
      <View>
        {image ? (
          <Image
            style={{ width: "100%", height: 100, borderRadius: 10, marginTop: 10, marginBottom: 10 }}
            source={image}
            transition={500}
          />
        ) : (
          loadingImage && <Text className="text-center text-gray-500">Loading Image...</Text>
        )}
      </View>

      <View className='flex flex-row'>
        <Text className="text-lg font-semibold text-[#5636A7]">{name}</Text>
      </View>

      <View className='flex flex-col justify-between w-full py-2 font-bold'>
        <Text className="text-md text-gray-600">{description}</Text>

        <View className='py-2'>
          <Text className="text-md text-gray-500">Category: {category}</Text>
          <Text className="text-md text-gray-500">Method: {method}</Text>
          <Text className="text-md text-gray-500">Location: {location}</Text>
        </View>

        <View className='flex flex-row justify-end'>
          {link && (
            <Pressable
              className={`w-36 p-2 rounded-xl text-center mt-2 flex flex-row items-center justify-center ${isPressed ? "bg-[#3c2674]" : "bg-[#5636A7]"}`}
              onPress={onPress}
              onPressOut={onPress}
              onPress={() => Linking.openURL(link)}
              accessibilityLabel={`Order from ${name}`}
              accessibilityHint="Navigates to the restaurant's website"
            >
              <Text className="text-white text-center font-semibold">Order now</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default HalalfoodCard;