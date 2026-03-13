import { useState, useEffect } from 'react';
import { View, Text, Pressable, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PayFriendScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState<string>('5345.29');
  const [showCursor, setShowCursor] = useState<boolean>(true);
  const balance = '65,860.45';

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    } else if (key === '.') {
      if (!amount.includes('.')) setAmount((prev) => prev + '.');
    } else {
      setAmount((prev) => (prev === '0' ? key : prev + key));
    }
  };

  const formatAmount = (val: string) => {
    const [int, dec] = val.split('.');
    const formattedInt = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return dec !== undefined ? `${formattedInt}.${dec}` : formattedInt;
  };

  return (
    <SafeAreaView
      className="flex-1 bg-black"
      style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
    >
      <View className="flex-1 bg-black relative">
        
        {/* HEADER */}
        <View className="px-6 py-4 flex-row items-center gap-6 z-20">
          <Pressable 
            onPress={() => router.canGoBack() ? router.back() : router.navigate('/(tabs)/home_dashboard')} 
            className="active:opacity-50 p-2 -ml-2"
          >
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text className="text-[20px] font-medium text-white tracking-wide">
            Pay Friend
          </Text>
        </View>

        {/* MAIN CONTENT AREA */}
        <View className="flex-1 bg-[#FDFAF1] rounded-t-[2.5rem] mt-4 px-6 pt-6 pb-8">
          
          {/* Recipient Card */}
          <View className="flex-row items-center justify-between bg-white rounded-3xl p-4 shadow-sm border border-gray-100 mb-8">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 rounded-full bg-[#6B4EFF] items-center justify-center">
                <Text className="text-white text-[15px] font-bold">SB</Text>
              </View>
              <View>
                <Text className="font-bold text-black text-[16px]">Sahil Bibhar</Text>
                <Text className="text-gray-400 text-[13px] mt-0.5">1234 567 890</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#9CA3AF" />
          </View>

          {/* Amount Display */}
          <View className="items-center justify-center mt-4">
            <View className="flex-row items-center justify-center">
              <Text className="text-[38px] text-gray-400 font-medium mr-1 -mt-4">$</Text>
              <Text className="text-[64px] font-bold text-[#111111] tracking-tight">
                {formatAmount(amount)}
              </Text>
              {/* Blinking Cursor */}
              <View
                className="w-[3px] h-[54px] bg-[#6B4EFF] ml-1 rounded-full"
                style={{ opacity: showCursor ? 1 : 0 }}
              />
            </View>
            
            <Text className="text-[14px] text-gray-400 font-medium mt-3">
              Your balance: ${balance}
            </Text>
            
            {/* USD Pill */}
            <View className="bg-gray-100 rounded-full px-4 py-1.5 mt-4">
              <Text className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">
                USD
              </Text>
            </View>
          </View>

          {/* Keypad */}
          <View className="mt-auto mb-6">
            <View className="flex-row flex-wrap justify-center">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'backspace'].map((key) => (
                <Pressable
                  key={key}
                  onPress={() => handleKeyPress(key)}
                  className="w-[33%] h-[72px] items-center justify-center active:bg-black/5 rounded-full"
                >
                  {key === 'backspace' ? (
                    <MaterialIcons name="backspace" size={24} color="#111111" />
                  ) : (
                    <Text className="text-[26px] text-[#111111] font-medium">{key}</Text>
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          {/* Pay Now Button */}
          <Pressable className="w-full bg-black py-5 rounded-[1.5rem] items-center justify-center active:scale-[0.98] transition-transform">
            <Text className="text-white font-bold text-[17px]">
              Pay Now
            </Text>
          </Pressable>

        </View>
      </View>
    </SafeAreaView>
  );
}