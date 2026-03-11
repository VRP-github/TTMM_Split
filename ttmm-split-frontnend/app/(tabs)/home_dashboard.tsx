import { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image, Platform, StatusBar, useWindowDimensions, Modal, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { 
  useFonts, 
  Manrope_400Regular, 
  Manrope_500Medium, 
  Manrope_600SemiBold, 
  Manrope_700Bold,
  Manrope_800ExtraBold 
} from '@expo-google-fonts/manrope';

export default function HomeDashboard() {
  const { width } = useWindowDimensions();
  const avatarSize = Math.min(96, Math.max(56, Math.round(width * 0.12)));
  
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  // Load fonts
  let [fontsLoaded] = useFonts({
    'Manrope-Regular': Manrope_400Regular,
    'Manrope-Medium': Manrope_500Medium,
    'Manrope-SemiBold': Manrope_600SemiBold,
    'Manrope-Bold': Manrope_700Bold,
    'Manrope-ExtraBold': Manrope_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <> 
      <SafeAreaView 
        className="flex-1 bg-black"
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
      >
        <View className="flex-1 bg-[#BAB2FF] relative">
          <ScrollView className="flex-1 bg-[#BAB2FF]" showsVerticalScrollIndicator={false}>
            
            {/* --- STYLIST MODERN HEADER --- */}
            <View className="bg-black pt-4 px-6 pb-12 relative overflow-hidden">
              
              {/* Profile & Identity Section */}
              <View className="flex-row items-center justify-between mb-5 z-30">
                <View className="flex-row items-center gap-3">
                  <View className="relative">
                    <Image
                      source={{ uri: 'https://i.pravatar.cc/150?img=1' }}
                      style={{ 
                        width: avatarSize + 10, 
                        height: avatarSize + 10, 
                        borderRadius: (avatarSize + 10) / 2, 
                        borderWidth: 3, 
                        borderColor: '#BAB2FF' 
                      }}
                      resizeMode="cover"
                    />
                    <View className="absolute -bottom-1 -right-1 bg-black p-1 rounded-full border border-white/10">
                      <MaterialIcons name="verified" size={16} color="#BAB2FF" />
                    </View>
                  </View>
                  
                  <View>
                    <Text className="text-xs text-[#BAB2FF] font-bold uppercase tracking-wider mb-0.5" style={{ fontFamily: 'Manrope-Bold' }}>Welcome back</Text>
                    <Text className="text-2xl font-bold text-white tracking-tighter leading-none" style={{ fontFamily: 'Manrope-ExtraBold' }}>Viraj Patel</Text>
                  </View>
                </View>

                <Pressable 
                  onPress={() => {
                    setNotificationVisible(true);
                    setHasUnreadNotifications(false);
                  }} 
                  className="w-12 h-12 bg-white/5 rounded-2xl items-center justify-center border border-white/10 active:opacity-50 relative"
                >
                  <MaterialIcons name="notifications-none" size={24} color="white" />
                  {hasUnreadNotifications && (
                    <View className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#BAB2FF] rounded-full border-2 border-black" />
                  )}
                </Pressable>
              </View>

              {/* Floating Context Label */}
              <View className="absolute bottom-6 left-6 z-30">
                <Text className="text-[14px] text-gray-500 font-medium tracking-wide" style={{ fontFamily: 'Manrope-Medium' }}>Monthly Summary</Text>
              </View>
            </View>

            {/* BALANCE CARDS SECTION (Soft Purple) */}
            <View className="rounded-t-[3rem] flex-1 pt-12 pb-10 px-6 mt-[-40px] bg-[#BAB2FF] shadow-2xl">
              
              {/* --- EXACT REPLICA CARDS --- */}
              <View className="flex-row justify-between gap-4 mb-8">
                
                {/* You Owe Card */}
                <View 
                  className="flex-1 rounded-[32px] p-5 justify-between overflow-hidden relative"
                  style={{ backgroundColor: '#1C1C1E', height: 160 }}
                >
                  {/* Large Faint Watermark (Coin) */}
                  <View className="absolute -bottom-6 -right-6" style={{ opacity: 0.04 }}>
                     <MaterialIcons name="monetization-on" size={120} color="white" />
                  </View>
                  
                  {/* Top Row: Icon + Text */}
                  <View className="flex-row items-center gap-3">
                    <View 
                      className="w-10 h-10 rounded-full items-center justify-center"
                      style={{ backgroundColor: '#2C2C2E' }}
                    >
                      <MaterialIcons name="south-west" size={20} color="#BAB2FF" />
                    </View>
                    <Text className="text-white/80 text-[15px]" style={{ fontFamily: 'Manrope-Medium' }}>
                      You owe
                    </Text>
                  </View>
                  
                  {/* Bottom Row: Amount */}
                  <Text className="text-[28px] text-white tracking-tight" style={{ fontFamily: 'Manrope-ExtraBold' }}>
                    $450.00
                  </Text>
                </View>

                {/* Owed to You Card */}
                <View 
                  className="flex-1 rounded-[32px] p-5 justify-between overflow-hidden relative"
                  style={{ backgroundColor: '#1C1C1E', height: 160 }}
                >
                  {/* Large Faint Watermark (Piggy Bank) */}
                  <View className="absolute -bottom-6 -right-6" style={{ opacity: 0.04 }}>
                     <MaterialIcons name="savings" size={110} color="white" />
                  </View>
                  
                  {/* Top Row: Icon + Text */}
                  <View className="flex-row items-center gap-3">
                    <View 
                      className="w-10 h-10 rounded-full items-center justify-center"
                      style={{ backgroundColor: '#2C2C2E' }}
                    >
                      <MaterialIcons name="north-east" size={20} color="#BAB2FF" />
                    </View>
                    <Text className="text-white/80 text-[15px] leading-tight" style={{ fontFamily: 'Manrope-Medium' }}>
                      Owed to{"\n"}you
                    </Text>
                  </View>
                  
                  {/* Bottom Row: Amount */}
                  <Text className="text-[28px] text-white tracking-tight" style={{ fontFamily: 'Manrope-ExtraBold' }}>
                    $128.50
                  </Text>
                </View>

              </View>
              {/* --- END EXACT REPLICA CARDS --- */}

              {/* QUICK ACTIONS */}
              <View className="flex-row justify-between mb-4 px-1">
                {[
                  { label: 'Pay Friend', icon: 'check', color: 'black', route: '/(tabs)/screens/settle_up' },
                  { label: 'History', icon: 'receipt-long', color: 'black', route: undefined },
                  { label: 'Remind', icon: 'notifications-active', color: 'black', route: '/(tabs)/screens/add_reminder' },
                  { label: 'Groups', icon: 'groups', color: 'white', bg: 'bg-black', route: undefined },
                ].map((item, index) => (
                  <View key={index} className="items-center gap-3">
                    {item.route ? (
                      <Link href={item.route as any} asChild>
                        <Pressable className={`w-[78px] h-[78px] ${item.bg || 'bg-[#FDFAF1]'} rounded-3xl items-center justify-center active:scale-95 transition-transform`}>
                          {item.icon === 'check' ? (
                            <View className="w-10 h-10 bg-black rounded-full items-center justify-center">
                              <MaterialIcons name={item.icon as any} size={18} color="#FDFAF1" />
                            </View>
                          ) : (
                            <MaterialIcons name={item.icon as any} size={32} color={item.color} />
                          )}
                        </Pressable>
                      </Link>
                    ) : (
                      <Pressable className={`w-[78px] h-[78px] ${item.bg || 'bg-[#FDFAF1]'} rounded-3xl items-center justify-center active:scale-95 transition-transform`}>
                        {item.icon === 'check' ? (
                          <View className="w-10 h-10 bg-black rounded-full items-center justify-center">
                            <MaterialIcons name={item.icon as any} size={18} color="#FDFAF1" />
                          </View>
                        ) : (
                          <MaterialIcons name={item.icon as any} size={32} color={item.color} />
                        )}
                      </Pressable>
                    )}
                    <Text className="text-[10px] text-black uppercase tracking-[1.5px]" style={{ fontFamily: 'Manrope-ExtraBold' }}>{item.label}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* LISTS SECTION (Cream Background) */}
            <View className="bg-[#FDFAF1] rounded-t-[3rem] flex-1 pt-10 pb-32 px-8 shadow-sm">
              <View className="flex-row justify-between items-center mb-6">
                <Text className="text-lg text-black tracking-tight" style={{ fontFamily: 'Manrope-Bold' }}>Active Groups</Text>
                <TouchableOpacity><Text className="text-xs text-[#2c13ec]" style={{ fontFamily: 'Manrope-Bold' }}>See all</Text></TouchableOpacity>
              </View>

              {/* List Items (Simplified for full code brevity) */}
              <View className="mb-6 space-y-4">
                <View className="flex-row items-center justify-between py-2">
                  <View className="flex-row items-center gap-4">
                    <View className="w-14 h-14 rounded-2xl bg-purple-100 items-center justify-center">
                      <MaterialIcons name="flight" size={28} color="#9333ea" />
                    </View>
                    <View>
                      <Text className="text-black text-sm" style={{ fontFamily: 'Manrope-Bold' }}>Bali Trip 2024</Text>
                      <Text className="text-xs text-gray-400" style={{ fontFamily: 'Manrope-Medium' }}>4 members</Text>
                    </View>
                  </View>
                  <Text className="text-green-600 text-sm" style={{ fontFamily: 'Manrope-Bold' }}>+$320.00</Text>
                </View>

                <View className="flex-row items-center justify-between py-2">
                  <View className="flex-row items-center gap-4">
                    <View className="w-14 h-14 rounded-2xl bg-orange-100 items-center justify-center">
                      <MaterialIcons name="home" size={28} color="#ea580c" />
                    </View>
                    <View>
                      <Text className="text-black text-sm" style={{ fontFamily: 'Manrope-Bold' }}>Apartment 4B</Text>
                      <Text className="text-xs text-gray-400" style={{ fontFamily: 'Manrope-Medium' }}>2 members</Text>
                    </View>
                  </View>
                  <Text className="text-red-500 text-sm" style={{ fontFamily: 'Manrope-Bold' }}>-$85.50</Text>
                </View>
              </View>

              <Text className="text-lg text-black tracking-tight mb-6" style={{ fontFamily: 'Manrope-Bold' }}>Recent Friends</Text>
              <View className="flex-row items-center justify-between py-2">
                <View className="flex-row items-center gap-4">
                  <View className="w-14 h-14 rounded-full bg-blue-50 items-center justify-center border border-blue-100">
                    <MaterialIcons name="person" size={28} color="#2563eb" />
                  </View>
                  <Text className="text-black text-sm" style={{ fontFamily: 'Manrope-Bold' }}>Jay</Text>
                </View>
                <Text className="text-green-600 text-sm" style={{ fontFamily: 'Manrope-Bold' }}>+$45.00</Text>
              </View>
            </View>
          </ScrollView>

          {/* FLOATING BOTTOM NAVIGATION */}
          <View className="absolute bottom-8 w-full items-center px-6" pointerEvents="box-none">
            <View className="bg-black w-full max-w-[320px] h-[76px] rounded-[32px] flex-row justify-between items-center px-10 shadow-2xl">
              <Pressable className="active:opacity-100"><MaterialIcons name="grid-view" size={28} color="#BAB2FF" /></Pressable>
              <Link href="./screens/add_finances" asChild>
                <Pressable className="bg-[#BAB2FF] w-12 h-12 rounded-2xl items-center justify-center"><MaterialIcons name="add" size={32} color="black" /></Pressable>
              </Link>
              <Pressable className="opacity-50"><MaterialIcons name="person-outline" size={28} color="white" /></Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* NOTIFICATION MODAL */}
      <Modal animationType="slide" transparent={true} visible={isNotificationVisible} onRequestClose={() => setNotificationVisible(false)}>
        <View className="flex-1 bg-[#010101]">
          <SafeAreaView className="flex-1">
            <View className="pt-6 px-8 pb-4 flex-row justify-between items-center">
              <Text className="text-[32px] text-white tracking-tighter" style={{ fontFamily: 'Manrope-Bold' }}>Notifications</Text>
              <Pressable onPress={() => setNotificationVisible(false)}><MaterialIcons name="close" size={28} color="white" /></Pressable>
            </View>
            <ScrollView className="px-6 pt-4">
                <View className="bg-white/5 border border-white/10 rounded-[2rem] p-5 flex-row items-center gap-4 mb-4">
                    <View className="w-12 h-12 bg-[#BAB2FF]/20 rounded-2xl items-center justify-center">
                        <MaterialIcons name="add" size={24} color="#BAB2FF" />
                    </View>
                    <View className="flex-1">
                        <Text className="text-white text-[15px]" style={{ fontFamily: 'Manrope-Medium' }}><Text style={{ fontFamily: 'Manrope-Bold' }}>Sarah</Text> added Dinner bill</Text>
                        <Text className="text-gray-500 text-[12px] mt-1" style={{ fontFamily: 'Manrope-Regular' }}>Just now</Text>
                    </View>
                </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}