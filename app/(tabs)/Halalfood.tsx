import React, { useEffect, useMemo, useState } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Linking,
  ActivityIndicator,
} from 'react-native';
import { Pressable } from 'react-native-gesture-handler';
import { ChevronDown, ChevronUp, Search } from 'lucide-react-native';

import HalalfoodCard from '../components/HalalFood/HalalfoodCard';
import { fetchHalalDirectory } from '@/Utils/api';

type Place = {
  name: string;
  short_description: string;
  google_maps_link: string;
  website: string;
  location: string;
  category: string;
  is_on_campus: boolean;
  slaughtered: string;
  image_id: string;
};

const ITEMS_PER_PAGE = 10;

const HalalFood = () => {
  const cuisineOptions = [
    { label: 'Chinese', value: 'Chinese' },
    { label: 'Persian', value: 'Persian' },
    { label: 'Shawarma', value: 'Shawarma' },
    { label: 'Burgers', value: 'Burgers' },
    { label: 'Bangladeshi', value: 'Bangladeshi' },
    { label: 'Chicken', value: 'Chicken' },
    { label: 'Pizza', value: 'Pizza' },
    { label: 'Chicken and waffles', value: 'Chicken and waffles' },
  ];

  const locationOptions = [
    { label: 'On Campus', value: 'true' },
    { label: 'Off Campus', value: 'false' },
  ];

  const methodOptions = [
    { label: 'Hand', value: 'hand' },
    { label: 'Machine', value: 'machine' },
    { label: 'Both', value: 'both' },
  ];

  const [search, setSearch] = useState('');
  const [methodValue, setMethodValue] = useState('All Methods');
  const [locationValue, setLocationValue] = useState('All Locations');
  const [cuisineValue, setCuisineValue] = useState('All Cuisines');
  const [openFilters, setOpenFilters] = useState(false);
  const [halalDirectory, setHalalDirectory] = useState<Place[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query: string) => setSearch(query);
  const onFiltersPress = () => setOpenFilters(!openFilters);

  const clearAllFilters = () => {
    setSearch('');
    setMethodValue('All Methods');
    setLocationValue('All Locations');
    setCuisineValue('All Cuisines');
    setCurrentPage(1);
  };

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchHalalDirectory();
        setHalalDirectory(data);
      } catch (err) {
        console.error('Error fetching halal directory:', err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  const filteredData = useMemo(() => {
    return halalDirectory
      .filter((item) => {
        const matchesCategory =
          cuisineValue === 'All Cuisines' ||
          item.category?.toLowerCase() === cuisineValue.toLowerCase();
        const matchesMethod =
          methodValue === 'All Methods' ||
          item.slaughtered?.toLowerCase() === methodValue.toLowerCase();
        const matchesLocation =
          locationValue === 'All Locations' ||
          String(item.is_on_campus) === locationValue.toLowerCase();
        const matchesSearch =
          item.name?.toLowerCase().includes(search.toLowerCase()) ||
          item.short_description?.toLowerCase().includes(search.toLowerCase());

        return (
          matchesSearch && matchesCategory && matchesMethod && matchesLocation
        );
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [halalDirectory, cuisineValue, methodValue, locationValue, search]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <ScrollView className="flex flex-col h-screen px-6 pt-4 bg-background">
      <View className="items-center mx-4">
        <View className="w-full flex-row items-center gap-3 py-3 border border-gray-300 dark:border-gray-600 bg-foreground rounded-xl shadow-md px-3">
          <Search color="#A0AEC0" size={24} strokeWidth={1.5} className="mx-1" />
          <TextInput
            className="w-[90%] dark:text-gray-200 text-gray-800"
            placeholder="Search for halal food"
            placeholderTextColor="#A0AEC0"
          
            clearButtonMode="always"
            value={search}
            onChangeText={handleSearch}
          />
        </View>

        <View className="py-4 w-full">
          <Pressable onPress={onFiltersPress}>
            <View className="flex-row items-center gap-2 mb-2">
              <View className="flex-row gap-2 p-2 bg-violet-100 dark:bg-violet-400 rounded-xl items-center">
                <Text className="text-md font-semibold text-violet-900 dark:text-violet-950">Filters</Text>
                {openFilters ? (
                  <ChevronUp size={20} color="#5636A7" strokeWidth={2.5} />
                ) : (
                  <ChevronDown size={20} color="#5636A7" strokeWidth={2.5} />
                )}
              </View>
            </View>
          </Pressable>

          {openFilters && (
            <View className="flex-col gap-2">
              <Pressable onPress={clearAllFilters}>
                <Text className="text-sm text-blue-600 underline ml-4 mb-1">
                  Clear All Filters
                </Text>
              </Pressable>

              {[{
                label: 'Cuisine',
                options: cuisineOptions,
                selected: cuisineValue,
                set: setCuisineValue,
              }, {
                label: 'Slaughter Method',
                options: methodOptions,
                selected: methodValue,
                set: setMethodValue,
              }, {
                label: 'Location',
                options: locationOptions,
                selected: locationValue,
                set: setLocationValue,
              }].map(({ label, options, selected, set }) => (
                <View className="h-20" key={label}>
                  <Text className="text-gray-500 dark:text-gray-300 mx-4 mb-2">{label}</Text>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 4 }}>
                    {options.map((opt) => (
                      <Pressable key={opt.value} onPress={() => set(opt.value)}>
                        <View className={`p-2 rounded-lg mx-2 shadow-sm ${
                          selected === opt.value ? 'bg-[#5636A7]' : 'bg-violet-200 dark:bg-violet-300'
                        }`}>
                          <Text className={`text-sm font-semibold ${
                            selected === opt.value ? 'text-white' : 'text-violet-900'
                          }`}>
                            {opt.label}
                          </Text>
                        </View>
                      </Pressable>
                    ))}
                  </ScrollView>
                </View>
              ))}
            </View>
          )}
        </View>

        <View className="flex-col gap-6 w-full pb-8">
          {isLoading ? (
            <ActivityIndicator size="large" color="#5636A7" className="mt-4" />
          ) : paginatedData.length > 0 ? (
            <>
              {paginatedData.map((place) => (
                <Pressable
                  key={place.name}
                  onPress={() =>
                    Linking.openURL(place.website || place.google_maps_link)
                  }
                >
                  <HalalfoodCard
                    name={place.name}
                    description={`${place.short_description}${
                      place.is_on_campus ? ' \ud83d\udccd On Campus' : ''
                    }${place.slaughtered === 'hand' ? ' \u2705 Hand-Slaughtered' : ''}`}
                    location={place.location}
                    category={place.category}
                    method={place.slaughtered}
                    link={place.website}
                    image_id={place.image_id}
                  />
                </Pressable>
              ))}
              <View className="flex-row justify-between items-center mt-4 px-2">
                <Pressable
                  onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <Text className={`text-sm ${
                    currentPage === 1 ? 'text-gray-400' : 'text-blue-600 underline'
                  }`}>
                    Previous
                  </Text>
                </Pressable>

                <Text className="text-sm text-gray-600 font-semibold">
                  Page {currentPage} of {totalPages}
                </Text>

                <Pressable
                  onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <Text className={`text-sm ${
                    currentPage === totalPages ? 'text-gray-400' : 'text-blue-600 underline'
                  }`}>
                    Next
                  </Text>
                </Pressable>
              </View>
            </>
          ) : (
            <Text className="text-lg mx-4 text-textPrimary ">No halal food available right now</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HalalFood;