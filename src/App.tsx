import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store/store";
import { LogsModal, ReduxLogsProvider } from "./logs";
import { GenerateButton, NumbersList } from "./numbers";

export default function App() {
  const [logsOpen, setOpen] = React.useState(false);

  return (
    <StoreProvider store={store}>
      <ReduxLogsProvider>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NumbersList />
          <GenerateButton />
          <Button title={"Show Log"} onPress={() => setOpen((v) => !v)} />
          <LogsModal visible={logsOpen} onClose={() => setOpen(false)} />
        </View>
      </ReduxLogsProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
