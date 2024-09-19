import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function Participant({ name, onRemove }: Props) {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.name}>{name}</ThemedText>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <ThemedText style={styles.buttonText}>-</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: "100%",
    flexDirection: "row",
  },
  name: {
    height: 50,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 12,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
