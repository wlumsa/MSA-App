import { Text, View } from "react-native";
const AyahCard = () => {
  return (
    <View className="flex flex-col justify-start w-full p-6 my-4 shadow-md rounded-xl text-start bg-slate-50 shadow-slate-200 ">
        <Text className="card-title text-[#2E046D] text-left pb-2">
          Ayah of the Day
        </Text>
        <Text className="justify-end py-2 text-gray-700 card-text ">
        فَٱصْبِرْ عَلَىٰ مَا يَقُولُونَ وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ ٱلشَّمْسِ وَقَبْلَ ٱلْغُرُوبِ

        </Text>
        <Text className="justify-end py-2 text-gray-700 card-text ">
        So be patient ˹O Prophet˺ with what they say. And glorify the praises of your Lord before sunrise and before sunset.
         </Text>   
         <Text className="pt-2 text-gray-400 card-text">
            Surah Qaf, Ayah 39
         </Text>
      </View>
  )
}

export default AyahCard