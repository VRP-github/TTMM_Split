import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function CreateGroupScreen() {
  const [groupName, setGroupName] = useState('');
  const router = useRouter();

  const handleCreateGroup = () => {
    if (!groupName.trim()) return;
    console.log(`Creating group: ${groupName}`);
    // This routes us back home for now
    router.push('/'); 
  };

  return (
    <View className="flex-1 bg-gray-50 px-6 pt-12">
      <View className="mb-10 mt-8">
        <Text className="text-4xl font-extrabold text-gray-900 mb-2">
          New Split
        </Text>
        <Text className="text-lg text-gray-500">
          What are we splitting today?
        </Text>
      </View>

      <View className="mb-8">
        <Text className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider">
          Group Name
        </Text>
        <TextInput
          className="bg-white px-5 py-4 rounded-2xl text-lg border border-gray-200 shadow-sm focus:border-emerald-500"
          placeholder="e.g., Weekend Trip, Groceries..."
          placeholderTextColor="#9ca3af"
          value={groupName}
          onChangeText={setGroupName}
          autoFocus
        />
      </View>

      <View className="mt-auto mb-12 space-y-4">
        <Pressable 
          onPress={handleCreateGroup}
          className={`py-4 rounded-2xl items-center shadow-sm ${
            groupName.trim() ? 'bg-emerald-600 active:bg-emerald-700' : 'bg-emerald-300'
          }`}
          disabled={!groupName.trim()}
        >
          <Text className="text-white text-lg font-bold">
            Generate TTMM Link
          </Text>
        </Pressable>

        <Link href="/" asChild>
          <Pressable className="py-4 items-center rounded-2xl active:bg-gray-200">
            <Text className="text-gray-500 text-lg font-semibold">
              Cancel
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}