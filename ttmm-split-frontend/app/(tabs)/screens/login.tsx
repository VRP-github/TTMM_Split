import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter, Link } from 'expo-router';
import { 
  useFonts, 
  Manrope_400Regular, 
  Manrope_500Medium, 
  Manrope_600SemiBold, 
  Manrope_700Bold,
  Manrope_800ExtraBold 
} from '@expo-google-fonts/manrope';

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Load fonts and assign them names
  let [fontsLoaded] = useFonts({
    'Manrope-Regular': Manrope_400Regular,
    'Manrope-Medium': Manrope_500Medium,
    'Manrope-SemiBold': Manrope_600SemiBold,
    'Manrope-Bold': Manrope_700Bold,
    'Manrope-ExtraBold': Manrope_800ExtraBold,
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 bg-[#010101]">
      <StatusBar barStyle="light-content" />
      
      {/* Visual Decorative Elements */}
      <View className="absolute top-0 right-0 w-32 h-32 bg-[#BAB2FF] rounded-bl-full opacity-90" />

      <SafeAreaView edges={['top']} className="flex-1">
        <View className="px-8 pt-6 pb-10">
        
          {/* Top Bar with Back Button */}
          <View className="flex-row items-center justify-between mb-12">
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
          </View>
          
          {/* Main Typographic Headline */}
          <View>
            <Text 
              className="text-white text-[56px] leading-[60px] tracking-tighter" 
              style={{ fontFamily: 'Manrope-ExtraBold' }}
            >
              Welcome
            </Text>
            <Text 
              className="text-[#BAB2FF] text-[56px] leading-[60px] tracking-tighter" 
              style={{ fontFamily: 'Manrope-ExtraBold' }}
            >
              Back.
            </Text>
            
            {/* Subtle Sub-line for extra style */}
            <View className="w-12 h-1 bg-[#BAB2FF] rounded-full mt-4 opacity-50" />
          </View>
        </View>

        {/* Main Content Panel (Cream Section) */}
        <View className="flex-1 bg-[#FDFAF1] rounded-t-[40px] overflow-hidden">
          <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
          >
            <ScrollView 
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, padding: 32 }}
            >
              <Text 
                className="text-slate-900 text-2xl mb-8"
                style={{ fontFamily: 'Manrope-Bold' }}
              >
                Log In
              </Text>

              {/* Form Container */}
              <View>
                
                {/* Modern Email Input */}
                <View className="mb-6">
                  <Text 
                    className="text-slate-500 text-[11px] uppercase tracking-widest px-1 mb-2"
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Email Address
                  </Text>
                  <View className="bg-slate-100/80 rounded-2xl px-4 flex-row items-center border border-slate-200/50">
                    <TextInput 
                      className="flex-1 py-4 text-slate-900 text-base"
                      placeholder="name@example.com"
                      placeholderTextColor="#94a3b8"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      style={{ fontFamily: 'Manrope-Medium' }}
                    />
                  </View>
                </View>

                {/* Modern Password Input */}
                <View className="mb-8">
                  <View className="flex-row justify-between items-center px-1 mb-2">
                    <Text 
                      className="text-slate-500 text-[11px] uppercase tracking-widest"
                      style={{ fontFamily: 'Manrope-Bold' }}
                    >
                      Password
                    </Text>
                    <TouchableOpacity>
                      <Text 
                        className="text-[#2c13ec] text-xs"
                        style={{ fontFamily: 'Manrope-SemiBold' }}
                      >
                        Forgot?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="bg-slate-100/80 rounded-2xl px-4 flex-row items-center border border-slate-200/50">
                    <TextInput 
                      className="flex-1 py-4 text-slate-900 text-base"
                      placeholder="••••••••"
                      placeholderTextColor="#94a3b8"
                      secureTextEntry={!showPassword}
                      style={{ fontFamily: 'Manrope-Medium' }}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                      <MaterialIcons 
                        name={showPassword ? "visibility" : "visibility-off"} 
                        size={20} 
                        color="#94a3b8" 
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Login Button */}
                <Link href="/(tabs)/home_dashboard" asChild>
                    <TouchableOpacity 
                    activeOpacity={0.8}
                    className="bg-[#010101] py-5 rounded-2xl items-center shadow-lg mb-6"
                    >
                    <Text 
                        className="text-white text-lg"
                        style={{ fontFamily: 'Manrope-Bold' }}
                    >
                        Log In
                    </Text>
                    </TouchableOpacity>
                </Link>
                

                {/* Divider */}
                <View className="flex-row items-center mb-6">
                  <View className="flex-1 h-[1px] bg-slate-200" />
                  <Text 
                    className="px-3 text-slate-500 text-[10px] uppercase tracking-widest"
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Or continue with
                  </Text>
                  <View className="flex-1 h-[1px] bg-slate-200" />
                </View>

                {/* Social Buttons */}
                <View className="flex-row gap-4 mb-10">
                  <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-slate-200 py-3 rounded-xl shadow-sm">
                    <Image 
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }} 
                      className="w-5 h-5 mr-2"
                    />
                    <Text className="text-slate-700" style={{ fontFamily: 'Manrope-SemiBold' }}>Google</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity className="flex-1 flex-row items-center justify-center bg-white border border-slate-200 py-3 rounded-xl shadow-sm">
                    <MaterialIcons name="apple" size={22} color="black" style={{ marginRight: 4 }} />
                    <Text className="text-slate-700" style={{ fontFamily: 'Manrope-SemiBold' }}>Apple</Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Bottom Link */}
              <View className="mt-auto items-center">
                <Text className="text-slate-500 text-sm" style={{ fontFamily: 'Manrope-Regular' }}>
                  Don't have an account?{' '}
                  <Text 
                    onPress={() => router.push('/(tabs)/screens/signup')} // Link to your sign up route
                    className="text-[#010101]" 
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Create Account
                  </Text>
                </Text>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </View>
  );
}