import { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function AddFinancesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView 
      className="flex-1 bg-[#010101]"
      style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
    >
      <View className="flex-1 bg-[#010101] relative">
        
        {/* HEADER SECTION */}
        <View className="flex-row items-center bg-[#010101] px-6 py-4 justify-between z-20">
          <Pressable 
            onPress={() => router.back()} 
            className="w-10 h-10 items-start justify-center active:opacity-50"
          >
            <MaterialIcons name="arrow-back-ios" size={24} color="white" />
          </Pressable>
          <Text className="text-white text-lg font-bold flex-1 text-center">Add Expense</Text>
          <Pressable className="w-10 h-10 items-end justify-center active:opacity-50">
            <MaterialIcons name="more-horiz" size={28} color="white" />
          </Pressable>
        </View>

        {/* PURPLE LIQUID TOP SECTION */}
        <View className="bg-[#BAB2FF] rounded-b-[3rem] px-6 pt-6 pb-20 shadow-lg z-10">
          
          {/* Amount Input */}
          <View className="items-center justify-center mt-2 mb-8">
            <Text className="text-sm font-bold uppercase tracking-widest text-[#010101]/70 mb-2">
              Total Amount
            </Text>
            <View className="flex-row items-baseline justify-center">
              <Text className="text-5xl font-bold text-gray-900 mr-1">$</Text>
              <TextInput 
                className="text-[5rem] font-bold p-0 text-center text-gray-900 leading-none min-w-[120px]"
                placeholder="0.00"
                placeholderTextColor="#01010180"
                keyboardType="decimal-pad"
                autoFocus
              />
            </View>
          </View>

          {/* Paid By & Split Cards */}
          <View className="flex-row gap-4 mb-2">
            <Pressable className="flex-1 bg-[#1C1C1E] rounded-3xl p-5 h-32 justify-between overflow-hidden relative active:scale-95 shadow-md">
              <View className="absolute top-2 right-2 opacity-10">
                <MaterialIcons name="account-balance-wallet" size={60} color="white" />
              </View>
              <View className="bg-gray-700/50 w-10 h-10 rounded-full items-center justify-center">
                <MaterialIcons name="person" size={20} color="white" />
              </View>
              <View className="z-10">
                <Text className="text-gray-400 text-xs font-medium mb-0.5">Paid by</Text>
                <Text className="text-white text-xl font-bold">You</Text>
              </View>
            </Pressable>

            <Pressable className="flex-1 bg-[#1C1C1E] rounded-3xl p-5 h-32 justify-between overflow-hidden relative active:scale-95 shadow-md">
              <View className="absolute top-2 right-2 opacity-10">
                <MaterialIcons name="call-split" size={60} color="white" />
              </View>
              <View className="bg-gray-700/50 w-10 h-10 rounded-full items-center justify-center">
                <MaterialIcons name="pie-chart" size={20} color="white" />
              </View>
              <View className="z-10">
                <Text className="text-gray-400 text-xs font-medium mb-0.5">Split</Text>
                <Text className="text-white text-xl font-bold">Equally</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* CREAM BOTTOM PANEL */}
        {/* Negative margin (-mt-8) makes it overlap the purple section seamlessly */}
        <ScrollView 
          className="flex-1 bg-[#FDFAF1] -mt-8 rounded-t-[3rem] z-20 shadow-lg" 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40, paddingBottom: 120 }}
        >
          
          {/* Description Input */}
          <View className="mb-8">
            <Text className="text-[#010101]/60 text-xs font-bold uppercase tracking-wider mb-3 px-1">
              Description
            </Text>
            <View className="flex-row items-center bg-white border-[1.5px] border-[#010101]/5 rounded-xl h-14 px-4">
              <MaterialIcons name="edit-note" size={24} color="rgba(1,1,1,0.4)" />
              <TextInput 
                className="flex-1 p-0 text-[#010101] text-lg font-medium ml-3"
                placeholder="What's this for?"
                placeholderTextColor="#9ca3af"
              />
            </View>
          </View>

          {/* Category Selector */}
          <View className="mb-10">
            <Text className="text-[#010101]/60 text-xs font-bold uppercase tracking-wider mb-4 px-1">
              Category
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="overflow-visible pb-2">
              <View className="flex-row gap-5">
                <Pressable className="items-center min-w-[4.5rem] gap-2 active:scale-95">
                  <View className="w-16 h-16 bg-[#010101] rounded-2xl items-center justify-center shadow-md">
                    <MaterialIcons name="restaurant" size={28} color="white" />
                  </View>
                  <Text className="text-xs font-bold text-[#010101]">Food</Text>
                </Pressable>

                <Pressable className="items-center min-w-[4.5rem] gap-2 opacity-60 active:opacity-100">
                  <View className="w-16 h-16 bg-white border border-gray-200 rounded-2xl items-center justify-center">
                    <MaterialIcons name="flight" size={28} color="#4b5563" />
                  </View>
                  <Text className="text-xs font-medium text-gray-600">Travel</Text>
                </Pressable>

                <Pressable className="items-center min-w-[4.5rem] gap-2 opacity-60 active:opacity-100">
                  <View className="w-16 h-16 bg-white border border-gray-200 rounded-2xl items-center justify-center">
                    <MaterialIcons name="shopping-bag" size={28} color="#4b5563" />
                  </View>
                  <Text className="text-xs font-medium text-gray-600">Shopping</Text>
                </Pressable>

                <Pressable className="items-center min-w-[4.5rem] gap-2 opacity-60 active:opacity-100">
                  <View className="w-16 h-16 bg-white border border-gray-200 rounded-2xl items-center justify-center">
                    <MaterialIcons name="home" size={28} color="#4b5563" />
                  </View>
                  <Text className="text-xs font-medium text-gray-600">Rent</Text>
                </Pressable>
                
                <Pressable className="items-center min-w-[4.5rem] gap-2 opacity-60 active:opacity-100">
                  <View className="w-16 h-16 bg-white border border-gray-200 rounded-2xl items-center justify-center">
                    <MaterialIcons name="movie" size={28} color="#4b5563" />
                  </View>
                  <Text className="text-xs font-medium text-gray-600">Movies</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>

          {/* Friends Selection */}
          <View>
            <View className="flex-row justify-between items-end mb-4 px-1">
              <Text className="text-[#010101]/60 text-xs font-bold uppercase tracking-wider">With whom?</Text>
              <Pressable>
                <Text className="text-[#9A92E0] font-medium text-sm">Select All</Text>
              </Pressable>
            </View>

            <View className="gap-3">
              {/* Selected Friend */}
              <Pressable className="flex-row items-center justify-between p-3 pl-4 bg-white rounded-2xl border border-[#BAB2FF]/50 shadow-sm">
                <View className="flex-row items-center gap-4">
                  <View className="w-10 h-10 rounded-full bg-blue-100 items-center justify-center">
                    <Text className="text-blue-600 font-bold text-sm">J</Text>
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#010101]">Jay</Text>
                    <Text className="text-xs text-gray-500">jay@email.com</Text>
                  </View>
                </View>
                <View className="w-6 h-6 bg-[#BAB2FF] rounded-full items-center justify-center mr-1">
                  <MaterialIcons name="check" size={16} color="white" />
                </View>
              </Pressable>

              {/* Unselected Friend */}
              <Pressable className="flex-row items-center justify-between p-3 pl-4 bg-transparent rounded-2xl border border-transparent active:bg-white/50">
                <View className="flex-row items-center gap-4">
                  <View className="w-10 h-10 rounded-full bg-pink-100 items-center justify-center">
                    <Text className="text-pink-500 font-bold text-sm">MR</Text>
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#010101]">Mike Ross</Text>
                    <Text className="text-xs text-gray-500">mike.ross@email.com</Text>
                  </View>
                </View>
                <View className="w-6 h-6 border-2 border-gray-300 rounded-full mr-1" />
              </Pressable>

              {/* You (Payer) */}
              <View className="flex-row items-center justify-between p-3 pl-4 bg-transparent rounded-2xl border border-transparent">
                <View className="flex-row items-center gap-4">
                  <View className="w-10 h-10 rounded-full bg-orange-100 items-center justify-center">
                    <Text className="text-orange-600 font-bold text-sm">V</Text>
                  </View>
                  <View>
                    <Text className="text-sm font-bold text-[#010101]">Viraj</Text>
                    <Text className="text-xs text-gray-500">You</Text>
                  </View>
                </View>
                <View className="bg-[#010101]/10 px-2 py-1 rounded mr-1">
                  <Text className="text-[10px] font-bold tracking-wide text-[#010101]/60">PAYER</Text>
                </View>
              </View>
            </View>
          </View>

        </ScrollView>

        {/* FLOATING SAVE BUTTON */}
        <View className="absolute bottom-0 left-0 w-full p-6 bg-[#FDFAF1]/95 pt-8 pb-8 z-40">
          <Pressable 
            onPress={() => router.back()} 
            className="w-full bg-[#010101] py-4 rounded-xl flex-row items-center justify-center gap-2 shadow-xl active:opacity-80 active:scale-[0.98] transition-transform"
          >
            <Text className="text-[#FDFAF1] font-bold text-lg tracking-widest">
              SAVE EXPENSE
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="#FDFAF1" />
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}