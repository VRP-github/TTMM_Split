import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { 
  useFonts, 
  Manrope_400Regular, 
  Manrope_500Medium, 
  Manrope_700Bold, 
  Manrope_800ExtraBold 
} from '@expo-google-fonts/manrope';

export default function TTMMSplitLanding() {
  // Load fonts natively
  let [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} className="flex-1 bg-[#010101]">
      <StatusBar barStyle="light-content" backgroundColor="#010101" />
      
      <View className="flex-1 justify-between relative">
        
        {/* Header */}
        <View className="px-6 pt-4 z-30">
          <View className="flex-row items-center gap-2">
            {/* FIX APPLIED HERE: Moved the purple shadow to the style prop */}
          </View>
        </View>

        {/* Hero Section - CREATIVE & STYLIZED */}
        <View className="flex-1 items-center justify-center px-6 z-10 relative mt-4 pb-16">
          
          {/* --- FLOATING BACKGROUND ELEMENTS --- */}
          {/* Floating Element 1: Pizza Bill */}
          <View className="absolute top-4 right-2 bg-[#1A1A1A]/80 border border-white/10 rounded-full px-4 py-2 flex-row items-center rotate-[12deg] z-0 shadow-xl">
            <Text className="text-xl mr-2">🍕</Text>
            <View>
              <Text className="text-white text-[10px] uppercase tracking-wider" style={{ fontFamily: 'Manrope_700Bold' }}>Dinner</Text>
              <Text className="text-[#BAB2FF] text-sm" style={{ fontFamily: 'Manrope_800ExtraBold' }}>$84.50</Text>
            </View>
          </View>

          {/* Floating Element 2: Uber Ride */}
          <View className="absolute bottom-18 left-0 bg-[#1A1A1A]/80 border border-[#BAB2FF]/30 rounded-full px-4 py-2 flex-row items-center -rotate-[8deg] z-0 shadow-xl">
            <View className="mr-2">
              <Text className="text-white text-[10px] uppercase tracking-wider" style={{ fontFamily: 'Manrope_700Bold' }}>Uber</Text>
              <Text className="text-white text-sm" style={{ fontFamily: 'Manrope_800ExtraBold' }}>$22.00</Text>
            </View>
            <Image 
              className="h-6 w-6 rounded-full border border-[#BAB2FF]" 
              source={{ uri: "https://i.pravatar.cc/100?img=5" }} 
            />
          </View>

          {/* Floating Element 3: Avatar Bubble */}
          <View 
            className="absolute top-24 left-6 border-2 border-[#BAB2FF]/40 rounded-full p-2 -rotate-[15deg] z-0 bg-[#1A1A1A] shadow-lg"
            style={{ shadowColor: '#BAB2FF', shadowOpacity: 0.3, shadowRadius: 10 }}
            >
            <View className="h-10 w-10 rounded-full bg-[#BAB2FF] items-center justify-center border-2 border-[#010101]">
                <MaterialIcons name="attach-money" size={24} color="#010101" />
            </View>
            </View>

          <View className="z-20 items-center w-full max-w-lg mt-12">
            
            {/* Sleek Pill Badge */}
            <View className="flex-row items-center bg-[#BAB2FF]/10 px-5 py-2 rounded-full mb-8 border border-[#BAB2FF]/30">
              <View className="h-2 w-2 rounded-full bg-[#BAB2FF] mr-2" />
              <Text 
                className="text-[#BAB2FF] text-xs tracking-widest uppercase"
                style={{ fontFamily: 'Manrope_700Bold' }}
              >
                No More Math
              </Text>
            </View>

            {/* Main Headline */}
            <Text 
              className="text-white text-[56px] text-center mb-6 leading-[62px]"
              style={{ 
                fontFamily: 'Manrope_800ExtraBold',
                textShadowColor: 'rgba(168, 85, 247, 0.45)', 
                textShadowOffset: { width: 0, height: 4 }, 
                textShadowRadius: 35, 
              }}
            >
              Split Expenses,{'\n'}Not <Text style={{ color: '#BAB2FF' }}>Friendships</Text>.
            </Text>
            
            {/* Subtext */}
            <Text 
              className="text-slate-400 text-lg text-center leading-8 px-2"
              style={{ fontFamily: 'Manrope_500Medium' }}
            >
              Track shared costs, split bills fairly, and settle up with your squad in just a tap.
            </Text>

          </View>
        </View>

        {/* Premium Footer Section */}
        {/* FIX APPLIED HERE: Replaced arbitrary complex shadow with safe React Native styles */}
        <View 
          className="bg-[#FDFAF1] rounded-t-[40px] px-6 pt-10 pb-[70px] items-center z-30"
          style={{ 
            shadowColor: '#BAB2FF', 
            shadowOffset: { width: 0, height: -10 }, 
            shadowOpacity: 0.1, 
            shadowRadius: 20,
            elevation: 10 // For Android shadow support
          }}
        >

          <View className="w-full max-w-md gap-4">
            <Link href="/(tabs)/screens/signup" asChild>
                <TouchableOpacity className="w-full py-[18px] bg-[#010101] rounded-full items-center shadow-xl flex-row justify-center">
                <Text 
                    className="text-white text-lg mr-2"
                    style={{ fontFamily: 'Manrope_700Bold' }} 
                >
                    Get Started
                </Text>
                <MaterialIcons name="arrow-forward" size={20} color="#BAB2FF" />
                </TouchableOpacity>
            </Link>
            
            
            <Link href="/(tabs)/screens/login" asChild>
              <TouchableOpacity className="items-center py-2 mt-2">
                <Text 
                  className="text-[#010101] text-base"
                  style={{ fontFamily: 'Manrope_700Bold' }} 
                >
                 Already have an account? <Text className="underline decoration-2 text-[#2c13ec]">Log In</Text>
                </Text>
              </TouchableOpacity>
            </Link>
          </View>

          {/* Trust Indicators */}
          <View className="pt-8 items-center gap-3">
            <View className="flex-row">
              <Image 
                className="h-10 w-10 rounded-full border-2 border-[#FDFAF1] z-30 bg-slate-200" 
                source={{ uri: "https://i.pravatar.cc/100?img=1" }} 
              />
              <Image 
                className="h-10 w-10 rounded-full border-2 border-[#FDFAF1] z-20 -ml-3 bg-slate-300" 
                source={{ uri: "https://i.pravatar.cc/100?img=2" }} 
              />
              <Image 
                className="h-10 w-10 rounded-full border-2 border-[#FDFAF1] z-10 -ml-3 bg-slate-400" 
                source={{ uri: "https://i.pravatar.cc/100?img=3" }} 
              />
              <View className="h-10 w-10 rounded-full border-2 border-[#FDFAF1] bg-[#BAB2FF] items-center justify-center -ml-3 z-0">
                <Text className="text-[10px] text-[#010101]" style={{ fontFamily: 'Manrope_800ExtraBold' }}>
                  +20
                </Text>
              </View>
            </View>
            <Text 
              className="text-[#010101]/50 text-[11px] uppercase tracking-[0.2em]"
              style={{ fontFamily: 'Manrope_800ExtraBold' }} 
            >
              Trusted by many groups
            </Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}