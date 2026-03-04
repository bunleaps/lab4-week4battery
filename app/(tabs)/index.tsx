import { BatteryState, useBatteryLevel, useBatteryState } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const batteryLevel = useBatteryLevel();
  const batteryState = useBatteryState();

  const getStateLabel = (state: BatteryState) => {
    switch (state) {
      case BatteryState.CHARGING:
        return "Charging";
      case BatteryState.FULL:
        return "Fully Charged";
      case BatteryState.UNPLUGGED:
        return "Unplugged";
      default:
        return "Unknown";
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Battery Level: {batteryLevel}</Text>
      <Text style={styles.label}>Status: {getStateLabel(batteryState)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
});
