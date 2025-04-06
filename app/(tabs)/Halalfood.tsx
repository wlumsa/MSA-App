import React from 'react'
import HalalfoodCard from '../components/HalalfoodCard'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { ArrowDown, ChevronDown, Search } from 'lucide-react-native'
import { useState } from 'react'
const halalFood = () => {
  const data = [
    { label: 'Chinese', value: '1' },
    { label: 'Persian', value: '2' },
    { label: 'Shawarma', value: '3' },
    { label: 'Burgers', value: '4' },
    { label: 'Bangladeshi', value: '5' },
    { label: 'Chicken', value: '6' },
    { label: 'Pizza', value: '7' },
    { label: 'Chicken and waffles', value: '8' },
  ];
const locationData = [
  { label: 'On Campus', value: 'on-campus' },
  { label: 'Off campus', value: 'off-campus' }
]
const methodData = [
  { label: 'Hand', value: 'hand' },
  { label: 'Machine', value: 'machine' },
  { label: 'Both', value: 'both' },
  { label: 'Unknown', value: 'unknown' }
]
  const [search, setSearch] = useState<string>("")
  const [isPressed, setIsPressed] = useState(false);
  const handleSearch = (query:string) => {
    setSearch(query);

  };
  const [value, setValue] = useState(null);
  const [methodValue, setMethodValue] = useState(null);
  const [locationValue, setLocationValue] = useState(null);
  const [cusineValue, setCuisineValue] = useState(null);

const [openFilters, setOpenFilters] = useState(false)
const onFiltersPress = () => {
  setOpenFilters(!openFilters);
};
  
  return (
    <ScrollView className='flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] '>
      <View className="items-center mx-4 ">
            
       <View className='w-full flex flex-row items-center justify-center gap-4 py-4 border border-gray-300 bg-white rounded-xl shadow-sm shadow-slate-200 px-4'>
        {/* <Search color="#A0AEC0" size={24} strokeWidth={1.5} className='mx-2' /> */}
          <TextInput
          className="items-center  w-full   "
          placeholder="Search for halal food"
          placeholderTextColor="#A0AEC0"
          clearButtonMode='always'
          value={search}
          onChangeText={(text) => handleSearch(text)}
          />
        </View> 
        <View className='flex flex-col  py-4 j'>
          <View className='flex w-full justify-end'>
            <Pressable onPress={onFiltersPress} className={`flex flex-row items-center justify-end gap-2 rounded-xl`}>
            <View className='flex flex-row items-center gap-2 rounded-xl justify-end'>
            <Text className='text-sm p-2 rounded-xl text-right'> Filters</Text>
            <ChevronDown size={20} color="#A0AEC0" strokeWidth={1.5} className='mx-1' />
          </View>
          </Pressable>
          </View>
        
      <View className={`flex flex-col  gap-2  rounded-xl ${openFilters ? 'visible' : 'hidden'}`}> 
      <View className='h-12'  >
      <ScrollView horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
    paddingHorizontal: 4}}> 
        {data.map((cuisine) => (
          <Pressable key={cuisine.value} className=''>
        <View
          className={`w-fit p-2 rounded-lg mx-2 ${
        cusineValue === cuisine.value ? 'bg-[#5636A7]' : 'bg-violet-200'
          }`}
        >
          <Text
        className={`text-sm ${
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


<View className='  h-12 '>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
    paddingHorizontal: 4}}> 
          {methodData.map((method) => (
            <Pressable key={method.value} className=''>
              <View
          className={`w-fit p-2 rounded-lg mx-2 ${
            methodValue === method.value ? 'bg-[#5636A7]' : 'bg-violet-200'
          }`}
              >
          <Text
            className={`text-sm ${
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
    paddingHorizontal: 4}} >
          
          {locationData.map((location) => (
            <Pressable key={location.value} className='mx-2'>
              <View
          className={`w-fit p-2 rounded-lg  mx-2 ${
            locationValue === location.value ? 'bg-[#5636A7]' : 'bg-violet-200'
          }`}
              >
          <Text
            className={`text-sm ${
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
          
          <HalalfoodCard 
          name='Auntys Kitchen'
          description='They serve mainly Pakistani food and dessert but also have some continental options. They dont offer dine in.'
          location='MSA Office'
          category='Asian'
          method='Hand'
          link='https://www.google.com' />
           <HalalfoodCard 
          name='Auntys Kitchen'
          description='They serve mainly Pakistani food and dessert but also have some continental options. They dont offer dine in.'
          location='MSA Office'
          category='Asian'
          method='Hand'
          link='https://www.google.com' />
           <HalalfoodCard 
          name='Auntys Kitchen'
          description='They serve mainly Pakistani food and dessert but also have some continental options. They dont offer dine in.'
          location='MSA Office'
          category='Asian'
          method='Hand'
          link='https://www.google.com' />
           <HalalfoodCard 
          name='Auntys Kitchen'
          description='They serve mainly Pakistani food and dessert but also have some continental options. They dont offer dine in.'
          location='MSA Office'
          category='Asian'
          method='Hand'
          link='https://www.google.com' />
           <HalalfoodCard 
          name='Auntys Kitchen'
          description='They serve mainly Pakistani food and dessert but also have some continental options. They dont offer dine in.'
          location='MSA Office'
          category='Asian'
          method='Hand'
          link='https://www.google.com' />
      </View>
      </View>

    </ScrollView>
  )
}

export default halalFood