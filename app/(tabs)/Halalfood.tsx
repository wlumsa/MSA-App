import React from 'react'
import HalalfoodCard from '../components/HalalfoodCard'
import { Pressable, ScrollView } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { Search } from 'lucide-react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from 'react'
const halalFood = () => {
  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
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

  const [isFocusMethod, setIsFocusMethod] = useState(false);
  const [isFocusLocation, setIsFocusLocation] = useState(false);
  const [isFocusCuisine, setIsFocusCusine] = useState(false);

  const renderMethodLabel = () => {
    if (value || isFocusMethod) {
      return (
        <Text style={[ isFocusMethod && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };


  
  return (
    <ScrollView className='flex flex-col  h-screen px-6 pt-4 bg-[#F8F5FF] '>
      <View className="items-center mx-4 ">
            <View className="flex flex-row justify-between w-full px-4 ">
            
            </View>
       <View className='w-full flex flex-row items-center justify-center gap-4 py-4 border border-gray-300 bg-white rounded-xl shadow-sm shadow-slate-200 px-4'>
        <Search color="#A0AEC0" size={24} strokeWidth={1.5} className='mx-2' />
          <TextInput
          className="items-center  w-full   "
          placeholder="Search for halal food"
          placeholderTextColor="#A0AEC0"
          clearButtonMode='always'
          value={search}
          onChangeText={(text) => handleSearch(text)}
          />
        </View> 
        <View className='flex flex-col items-center justify-between w-full  py-4 '>
          
           
          <Text className=" text-lg font-bold">Filter</Text>
          <View className="flex flex-row gap-16 font-medium">
              <Text className="text-lg ">Cuisine</Text>
              <Text className="text-lg ">Location</Text>
              <Text className="text-lg ">Method</Text>
          </View>
      <View className='flex flex-row gap-4 w-full py-4'>
        <Dropdown
          style={{
            minWidth: 100, 
            alignSelf: 'flex-start',
            height: 40,
            backgroundColor: '#5636A7',
            borderRadius: 12,
            paddingHorizontal: 4,
            alignItems: 'center',
        
            
          }}
          
          placeholderStyle= {{ color: '#fff', fontSize: 14 }}
          selectedTextStyle={{ color: '#fff',fontSize: 14 }}
          // selectedTextStyle={styles.selectedTextStyle}
          // iconStyle={styles.iconStyle}
          data={methodData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusMethod ? 'Slaughter method' : '...'}
          value={methodValue}
          onFocus={() => setIsFocusMethod(true)}
          onBlur={() => setIsFocusMethod(false)}
          onChange={item => {
            setMethodValue(item.value);
            setIsFocusMethod(false);
          }}
          
        />
           <Dropdown
             style={{
              minWidth: 100, 
              alignSelf: 'flex-start',
              height: 40,
              borderRadius: 12,
              paddingHorizontal: 4,
              alignItems: 'center',
              backgroundColor: '#5636A7',
              
            }}
            
            placeholderStyle= {{ color: '#fff', fontSize: 14 }}
            selectedTextStyle={{ color: '#fff', fontSize: 14 }}
          
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusCuisine ? 'Cuisine' : '...'}
          value={cusineValue}
          onFocus={() => setIsFocusCusine(true)}
          onBlur={() => setIsFocusCusine(false)}
          onChange={item => {
            setCuisineValue(item.value);
            setIsFocusCusine(false);
          }}
          
        />
           <Dropdown
             style={{
              minWidth: 100, 
              alignSelf: 'flex-start',
              height: 40,
              borderRadius: 12,
              paddingHorizontal: 4,
              alignItems: 'center',
              backgroundColor: '#5636A7',
            }}
            
            placeholderStyle= {{ color: '#fff',fontSize: 14 }}
            selectedTextStyle={{ color: '#fff',fontSize: 14 }}
          
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // iconStyle={styles.iconStyle}
          data={locationData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusLocation ? 'Location' : '...'}
          value={locationValue}
          onFocus={() => setIsFocusLocation(true)}
          onBlur={() => setIsFocusLocation(false)}
          onChange={item => {
            setLocationValue(item.value);
            setIsFocusLocation(false);
          }}
          
        />
        </View>
        </View>
            
      <View className='flex flex-col gap-6 w-full py-8'>
          
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