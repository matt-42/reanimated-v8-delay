import { StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';

export default function App() {
  const val = useSharedValue(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={styles.container}>

        <TouchableOpacity onPress={() => {
          val.value = val.value === 0 ? withTiming(100) : withTiming(0);
        }}><Text style={{padding: 10, borderColor: "black", borderWidth: 1}}>Press me</Text></TouchableOpacity>

        <Animated.View style={useAnimatedStyle(() => ({ left: val.value }))}>
          <Text>Hello !</Text>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
