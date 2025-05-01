import React from 'react'
import { useMemo } from 'react';
import HalalfoodCard from '../components/HalalFood/HalalfoodCard'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { ArrowDown, ChevronDown, Search, ChevronUp } from 'lucide-react-native'
import { useState } from 'react'
import { fetchHalalDirectory } from '@/Utils/api'
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
}  
const halalFood = () => {
  const data = [
    { label: 'Chinese', value: 'Chinese' },
    { label: 'Persian', value: 'Persian' },
    { label: 'Shawarma', value: 'Shawarma' },
    { label: 'Burgers', value: 'Burgers' },
    { label: 'Bangladeshi', value: 'Bangladeshi' },
    { label: 'Chicken', value: 'Chicken' },
    { label: 'Pizza', value: 'Pizza' },
    { label: 'Chicken and waffles', value: 'Chicken and waffles' },
  ];
const locationData = [
  { label: 'On Campus', value: 'true' },
  { label: 'Off campus', value: 'false' }
]
const methodData = [
  { label: 'Hand', value: 'hand' },
  { label: 'Machine', value: 'machine' },
  { label: 'Both', value: 'both' },
  { label: 'Unknown', value: 'unknown' }
]
  const [search, setSearch] = useState("");
  const handleSearch = (query:string) => {
    console.log(query);
    setSearch(query);

  };
  const [methodValue, setMethodValue] = useState("All Methods");
  const [locationValue, setLocationValue] =useState("All Locations");
  const [cusineValue, setCuisineValue] = useState("All Cuisines");

const [openFilters, setOpenFilters] = useState(false)
const onFiltersPress = () => {
  setOpenFilters(!openFilters);
};
const clearFilter = (filterType:string) => {
  if (filterType === 'cuisine') {
    setCuisineValue("");
  } else if (filterType === 'method') {
    setMethodValue("");
  }
  else if (filterType === 'location') {
    setLocationValue("");
  }
}
const [halalDirectory, setHalalDirectory] = useState<Place[]>([])

const fetchHalalData = async () => {
  try {
    const data = await fetchHalalDirectory();
    setHalalDirectory(data);
  } catch (error) {
    console.error("Error fetching halal directory:", error);
  }
};
React.useEffect(() => {
  fetchHalalData();
}, []);

const filteredData = useMemo(() => {
  return halalDirectory
    .filter((item) => {
      const matchesCategory =
        cusineValue === "All Cuisines" || item.category?.toLowerCase() === cusineValue.toLowerCase();
      const matchesMethod =
        methodValue === "All Methods" || item.slaughtered?.toLowerCase() === methodValue.toLowerCase();
      const matchesSearch = item.name?.toLowerCase().includes(search.toLowerCase());
      const matchesLocation =
        locationValue === "All Locations" || String(item.is_on_campus) === locationValue.toLowerCase();
      return  matchesSearch && matchesCategory && matchesMethod && matchesLocation;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}, [halalDirectory, cusineValue, methodValue, locationValue, search]);

  return (
    <ScrollView className='flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] '  >
      <View className="items-center mx-4 ">
            
       <View className='w-full justify-start flex flex-row items-center gap-4 py-4 border border-gray-300 bg-white rounded-xl shadow-sm shadow-slate-200 px-2'>
        <Search 
        color="#A0AEC0" size={24} strokeWidth={1.5} className='mx-1' />
          <TextInput
          className="items-center w-[90%]   "
          placeholder="Search for halal food"
          placeholderTextColor="#A0AEC0"
          clearButtonMode='always'
          value={search}
          onChangeText={(text) => handleSearch(text)}
          />
        </View> 
        <View className='flex flex-col py-4 w-full'>
          <View className='flex w-full '>
            <Pressable onPress={onFiltersPress}>
            <View className='flex flex-row items-center gap-2 rounded-xl justify-start  mb-2 w-fit'>
               <View className='flex flex-row  gap-2 p-2 bg-violet-100 rounded-xl items-center'>
               <Text className='text-md rounded-xl text-right font-semibold text-violet-900 '> Filters</Text>
                {openFilters ? <ChevronUp size={20} color="#5636A7" strokeWidth={2.5} /> : <ChevronDown size={20} color="#5636A7" strokeWidth={2.5} />}
              </View>
               </View>
            </Pressable>
          </View>
        
      <View className={`flex flex-col  gap-2  rounded-xl ${openFilters ? 'visible' : 'hidden'}`}> 
      <View className='h-20'  >
      <Text className='text-gray-500 mx-4 mb-2'>Cuisine</Text>
      <ScrollView horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 4}}> 
        {data.map((cuisine) => (
          <Pressable 
        key={cuisine.value} 
        onPress={() => setCuisineValue(cuisine.value)} 
        className=''
          >
        <View
          className={`w-fit p-2 rounded-lg mx-2 ${
        cusineValue === cuisine.value ? 'bg-[#5636A7]' : 'bg-violet-200'
          }`}
        >
          <Text
        className={`text-sm text-violet-900 font-semibold ${
          cusineValue === cuisine.value ? 'text-white' : ''
        }`}
          >
        {cuisine.label}
          </Text>
        </View>
          </Pressable>
        ))}
      </ScrollView>
      </View>


<View className='  h-20 '>
<Text className='text-gray-500 mx-4 mb-2'>Slaughter Method</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
    paddingHorizontal: 4}}> 
          {methodData.map((method) => (
            <Pressable key={method.value} 
            onPress={() => setMethodValue(method.value)} 
            className=''>
              <View
          className={`w-fit p-2 rounded-lg mx-2 ${
            methodValue === method.value ? 'bg-[#5636A7]' : 'bg-violet-200'
          }`}
              >
          <Text
            className={`text-sm text-violet-900 font-semibold ${
              methodValue === method.value ? 'text-white' : ''
            }`}
          >
            {method.label}
          </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        </View>
<View className=' h-20 '>
  <Text className='text-gray-500 mx-4 mb-2'>Location</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
    paddingHorizontal: 4}} >
          
          {locationData.map((location) => (
            <Pressable key={location.value} 
            onPress={() => setLocationValue(location.value)} 
            className='mx-2'>
              <View
          className={`w-fit p-2 rounded-lg  mx-2 ${
            locationValue === location.value ? 'bg-[#5636A7]' : 'bg-violet-200'
          }`}
              >
          <Text
            className={`text-sm text-violet-900 font-semibold ${
              locationValue === location.value ? 'text-white' : ''
            }`}
          >
            {location.label}
          </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>
        </View>
        </View>
        </View>
      <View className='flex flex-col gap-6 w-full '>
        {filteredData.length > 0 ? filteredData.map((place) => (
          <HalalfoodCard key={place.name} name={place.name} description={place.short_description} location={place.location} category={place.category} method={place.slaughtered} link={place.website} image_id={place.image_id} />
        ))
        : <Text className='text-lg mx-4'>No halal food available right now</Text>}
        
         
      </View>
      </View>

    </ScrollView>
  )
}

export default halalFood