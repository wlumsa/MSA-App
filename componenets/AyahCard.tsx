import { Text, View } from "react-native";
const AyahCard = () => {
  return (
    <View className="flex flex-col rounded-xl my-4 justify-start text-start bg-slate-50 shadow-md shadow-slate-200 p-6 ">
        <Text className="card-title text-[#2E046D] text-left pb-2">
          Ayah of the Day
        </Text>
        <Text className="card-text text-gray-700 py-2 justify-end ">
        فَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ ٱلْغُرُوبِ

        </Text>
        <Text className="card-text text-gray-700 py-2 justify-end ">
        So be patient ˹O Prophet˺ with what they say. And glorify the praises of your Lord before sunrise and before sunset.
         </Text>   
         <Text className="card-text text-gray-400 pt-2">
            Surah Qaf, Ayah 39
         </Text>
      </View>
  )
}

export default AyahCard