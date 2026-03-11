import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StatusBar, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { 
  useFonts, 
  Manrope_400Regular, 
  Manrope_500Medium, 
  Manrope_600SemiBold, 
  Manrope_700Bold,
  Manrope_800ExtraBold 
} from '@expo-google-fonts/manrope';

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

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
      
      {/* Visual Decorative Element - Matching Login Style */}
      <View className="absolute top-0 right-0 w-32 h-32 bg-[#BAB2FF] rounded-bl-full opacity-90" />

      <SafeAreaView edges={['top']} className="flex-1">
        {/* Stylist Header Section */}
        <View className="px-8 pt-6 pb-10">
          <View className="flex-row items-center justify-between mb-12">
            <TouchableOpacity onPress={() => router.back()}>
              <MaterialIcons name="arrow-back" size={28} color="white" />
            </TouchableOpacity>
          </View>
          
          <View>
            <Text 
              className="text-white text-[56px] leading-[60px] tracking-tighter" 
              style={{ fontFamily: 'Manrope-ExtraBold' }}
            >
              Start
            </Text>
            <Text 
              className="text-[#BAB2FF] text-[56px] leading-[60px] tracking-tighter" 
              style={{ fontFamily: 'Manrope-ExtraBold' }}
            >
              Fresh.
            </Text>
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
                Create Account
              </Text>

              {/* Form Fields */}
              <View>
                {/* Modern Full Name Input */}
                <View className="mb-6">
                  <Text 
                    className="text-slate-500 text-[11px] uppercase tracking-widest px-1 mb-2" 
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Full Name
                  </Text>
                  <View className="bg-slate-100/80 rounded-2xl px-4 border border-slate-200/50">
                    <TextInput 
                      className="py-4 text-slate-900 text-base"
                      placeholder="John Doe"
                      placeholderTextColor="#94a3b8"
                      style={{ fontFamily: 'Manrope-Medium' }}
                    />
                  </View>
                </View>

                {/* Modern Email Address Input */}
                <View className="mb-6">
                  <Text 
                    className="text-slate-500 text-[11px] uppercase tracking-widest px-1 mb-2" 
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Email Address
                  </Text>
                  <View className="bg-slate-100/80 rounded-2xl px-4 border border-slate-200/50">
                    <TextInput 
                      className="py-4 text-slate-900 text-base"
                      placeholder="hello@example.com"
                      placeholderTextColor="#94a3b8"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      style={{ fontFamily: 'Manrope-Medium' }}
                    />
                  </View>
                </View>

                {/* Modern Password Field */}
                <View className="mb-6">
                  <Text 
                    className="text-slate-500 text-[11px] uppercase tracking-widest px-1 mb-2" 
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Password
                  </Text>
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

                {/* Terms Checkbox */}
                <TouchableOpacity 
                  onPress={() => setAgreed(!agreed)}
                  className="flex-row items-start py-2 mb-8"
                  activeOpacity={0.7}
                >
                  <View 
                    className="w-5 h-5 rounded border-2 items-center justify-center mr-3 mt-0.5"
                    style={{ 
                        backgroundColor: agreed ? '#010101' : 'transparent',
                        borderColor: agreed ? '#010101' : '#cbd5e1'
                    }}
                  >
                    {agreed && <Ionicons name="checkmark" size={14} color="white" />}
                  </View>
                  <Text className="flex-1 text-sm text-slate-500 leading-5" style={{ fontFamily: 'Manrope-Medium' }}>
                    I agree to the <Text className="text-[#010101] underline">Terms</Text> and <Text className="text-[#010101] underline">Privacy Policy</Text>.
                  </Text>
                </TouchableOpacity>

                {/* Sign Up Button */}
                <TouchableOpacity 
                  activeOpacity={0.8}
                  className="bg-[#010101] py-5 rounded-2xl items-center shadow-lg mb-8"
                >
                  <Text 
                    className="text-white text-lg" 
                    style={{ fontFamily: 'Manrope-Bold' }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Log In Link */}
              <View className="mt-auto items-center">
                <Text className="text-slate-500 text-sm" style={{ fontFamily: 'Manrope-Regular' }}>
                  Already have an account?{' '}
                  <Text 
                    className="text-[#010101]" 
                    style={{ fontFamily: 'Manrope-Bold' }}
                    onPress={() => router.push('/(tabs)/screens/login')}
                  >
                    Log In
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