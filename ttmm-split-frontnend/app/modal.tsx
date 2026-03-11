import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function ModalScreen() {
  return (
 <View className="flex-1 items-center justify-center p-5 bg-gray-50">
      <Text className="text-2xl font-bold text-gray-900 mb-2">
        Group Settings
      </Text>
      <Text className="text-gray-500 text-center mb-6">
        This modal will eventually hold your TTMM Split group configurations.
      </Text>
      
      <Link href="/" dismissTo asChild>
        <Pressable className="mt-4 py-3 px-6 bg-emerald-600 rounded-xl active:bg-emerald-700">
          <Text className="text-white font-semibold text-lg">
            Go back to Home
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}