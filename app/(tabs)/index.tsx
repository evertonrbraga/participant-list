import React, { useState } from "react";
import {
  Alert,
  FlatList,
  NativeSyntheticEvent,
  StatusBar,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Participant from "@/components/Participant";

export default function HomeScreen() {
  const [name, setName] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  function handleAddParticipant() {
    if (participants.includes(name)) {
      return Alert.alert("O participante já existe");
    }
    setParticipants((prevState) => [...prevState, name]);
    setName("");
  }

  function handleChange(event: NativeSyntheticEvent<TextInputChangeEventData>) {
    setName(event.nativeEvent.text);
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.eventName}>Nome do Evento</ThemedText>
        <ThemedText style={styles.eventDate}>
          Terça, 17 de Setembro de 2024
        </ThemedText>

        <ThemedView style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
            onChange={handleChange}
            value={name}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleAddParticipant}
          >
            <ThemedText style={styles.buttonText}>+</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <FlatList
          data={participants}
          keyExtractor={(participant) => participant}
          renderItem={({ item }) => (
            <Participant
              key={item}
              onRemove={() => handleRemoveParticipant(item)}
              name={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ThemedText style={styles.empty}>
              Nenhum participante na lista
            </ThemedText>
          )}
        />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  input: {
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
    backgroundColor: "#31cf67",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  form: {
    marginTop: 36,
    marginBottom: 50,
    width: "100%",
    flexDirection: "row",
  },
  empty: {
    textAlign: "center",
  },
});
