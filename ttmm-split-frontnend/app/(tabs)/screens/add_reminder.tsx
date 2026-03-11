import { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Switch, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddReminderScreen() {
  const router = useRouter();
  
  // Interactive states for the form
  const [amount, setAmount] = useState('150.00');
  const [reminderName, setReminderName] = useState('');
  const [frequency, setFrequency] = useState('Monthly');
  const [isSmartNudge, setIsSmartNudge] = useState(true);

  const frequencies = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  return (
    <SafeAreaView 
      className="flex-1 bg-[#010101]"
      style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
    >
      <View className="flex-1 bg-[#010101]">
        
        {/* HEADER SECTION */}
        <View className="flex-row items-center bg-[#010101] px-6 py-4 justify-between z-20">
          <Pressable 
            onPress={() => router.back()} 
            className="w-10 h-10 items-start justify-center active:opacity-50"
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center">Add Reminder</Text>
          <Pressable className="w-10 h-10 items-end justify-center active:opacity-50">
            <MaterialIcons name="more-horiz" size={28} color="white" />
          </Pressable>
        </View>

        {/* PURPLE LIQUID TOP SECTION */}
        <View className="bg-[#BAB2FF] rounded-b-[3rem] px-8 pt-6 pb-16 items-center shadow-lg z-10">
          <Text className="text-sm font-bold uppercase tracking-widest text-[#010101]/70 mb-2">
            Monthly Total
          </Text>
          <View className="flex-row items-baseline justify-center">
            <Text className="text-5xl font-bold text-[#010101] mr-1">$</Text>
            <TextInput 
              className="text-6xl font-bold text-center text-[#010101] p-0 min-w-[120px]"
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              placeholder="0.00"
              placeholderTextColor="#01010180"
            />
          </View>
          <View className="mt-4 bg-[#010101]/10 px-4 py-1.5 rounded-full">
            <Text className="text-xs font-bold text-[#010101] tracking-wider">
              RECURRING PAYMENT
            </Text>
          </View>
        </View>

        {/* CREAM BOTTOM PANEL */}
        {/* Negative margin (-mt-8) makes it overlap the purple section seamlessly */}
        <ScrollView 
          className="flex-1 bg-[#FDFAF1] -mt-8 rounded-t-[3rem] z-20" 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 48, paddingBottom: 40 }}
        >
          
          {/* Reminder Name Input */}
          <View className="mb-8">
            <Text className="text-xs font-bold uppercase tracking-wider text-[#010101]/60 px-1 mb-3">
              Reminder Name
            </Text>
            <TextInput 
              className="w-full bg-white border-[1.5px] border-[#010101]/5 rounded-xl h-14 px-5 text-lg font-medium text-[#010101] focus:border-[#BAB2FF]"
              placeholder="Rent, Netflix, Gym..."
              placeholderTextColor="#9ca3af"
              value={reminderName}
              onChangeText={setReminderName}
            />
          </View>

          {/* Frequency Selector */}
          <View className="mb-8">
            <Text className="text-xs font-bold uppercase tracking-wider text-[#010101]/60 px-1 mb-3">
              Frequency
            </Text>
            <View className="flex-row bg-white p-1.5 rounded-2xl border-[1.5px] border-[#010101]/5">
              {frequencies.map((item) => (
                <Pressable 
                  key={item}
                  onPress={() => setFrequency(item)}
                  className={`flex-1 py-3 rounded-xl items-center justify-center ${
                    frequency === item ? 'bg-[#BAB2FF]' : 'bg-transparent active:bg-[#010101]/5'
                  }`}
                >
                  <Text className={`text-sm font-bold ${
                    frequency === item ? 'text-[#010101]' : 'text-[#010101]/40'
                  }`}>
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>

          {/* Date and Group Row */}
          <View className="flex-row gap-4 mb-8">
            <View className="flex-1">
              <Text className="text-xs font-bold uppercase tracking-wider text-[#010101]/60 px-1 mb-3">
                Start Date
              </Text>
              <View className="w-full bg-white border-[1.5px] border-[#010101]/5 rounded-xl h-14 flex-row items-center px-4">
                <MaterialIcons name="calendar-today" size={20} color="rgba(1,1,1,0.4)" />
                <TextInput 
                  className="flex-1 ml-3 text-sm font-bold text-[#010101] p-0"
                  value="Oct 24, 2025"
                />
              </View>
            </View>

            <View className="flex-1">
              <Text className="text-xs font-bold uppercase tracking-wider text-[#010101]/60 px-1 mb-3">
                Group/Friend
              </Text>
              <Pressable className="w-full bg-white border-[1.5px] border-[#010101]/5 rounded-xl h-14 flex-row items-center px-4 active:bg-[#010101]/5">
                <MaterialIcons name="group" size={22} color="rgba(1,1,1,0.4)" />
                <Text className="flex-1 ml-3 text-sm font-bold text-[#010101]">Roommates</Text>
                <MaterialIcons name="arrow-drop-down" size={24} color="rgba(1,1,1,0.4)" />
              </Pressable>
            </View>
          </View>

          {/* Smart Nudge Toggle */}
          <View className="bg-[#010101]/5 p-5 rounded-2xl flex-row items-center justify-between border border-[#010101]/10 mb-10">
            <View className="flex-row items-center gap-4">
              <View className="w-10 h-10 rounded-full bg-[#BAB2FF] items-center justify-center">
                <MaterialIcons name="auto-awesome" size={20} color="#010101" />
              </View>
              <View>
                <Text className="font-bold text-[15px] text-[#010101]">Smart Nudge</Text>
                <Text className="text-[10px] text-[#010101]/60 uppercase font-bold tracking-tight mt-0.5">
                  AI optimized splitting
                </Text>
              </View>
            </View>
            
            <Switch
              trackColor={{ false: 'rgba(1,1,1,0.1)', true: '#010101' }}
              thumbColor={'#ffffff'}
              ios_backgroundColor="rgba(1,1,1,0.1)"
              onValueChange={setIsSmartNudge}
              value={isSmartNudge}
            />
          </View>

          {/* Save Button */}
          <Pressable className="w-full bg-[#010101] py-5 rounded-xl flex-row items-center justify-center gap-2 shadow-xl active:opacity-80 active:scale-[0.98] transition-transform">
            <Text className="text-[#FDFAF1] font-bold text-lg tracking-widest">
              SAVE REMINDER
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="#FDFAF1" />
          </Pressable>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}