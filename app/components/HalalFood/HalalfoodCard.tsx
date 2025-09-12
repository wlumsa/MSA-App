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
   const onPress = () => {
        setIsPressed(!isPressed);
      };
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



  return (
    <View className='flex flex-col w-full shadow-md shadow-slate-200 justify-between bg-foreground rounded-xl px-4 py-2'>
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
        <Text className="text-base font-semibold text-primary" style={{ fontFamily: 'LibreBaskerville-Bold', fontSize: 16 }}>{name}</Text>
      </View>

      <View className='flex flex-col justify-between w-full py-2 font-bold'>
        <Text className="text-sm text-textPrimary" style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 20 }}>{description}</Text>

        <View className='py-2'>
          <Text className="text-sm text-textGray" style={{ fontFamily: 'Inter', fontSize: 12 }}>Category: {category}</Text>
          <Text className="text-sm text-textGray" style={{ fontFamily: 'Inter', fontSize: 12 }}>Method: {method}</Text>
          <Text className="text-sm text-textGray" style={{ fontFamily: 'Inter', fontSize: 12 }}>Location: {location}</Text>
        </View>

        <View className='flex flex-row justify-end'>
          {link && (
            <Pressable
              onPressIn={() => onPress()}
              onPressOut={() => onPress()}
              onPress={() => { Linking.openURL(link); setIsPressed(!isPressed); }}
              className={`w-36 p-2 rounded-xl text-center mt-2 flex flex-row items-center justify-center bg-[#5636A7]  ${isPressed ? "bg-[#3c2674] dark:bg-[#3c2674] " : ""}`}

              accessibilityLabel={`Order from ${name}`}
              accessibilityHint="Navigates to the restaurant's website"
            >
              <Text className="text-white text-center font-semibold" style={{ fontFamily: 'Inter-Bold', fontSize: 14 }}>Order now</Text>
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default HalalfoodCard;
