import * as React from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useLogs } from "./LogsProvider";
import { LogItem } from "./LogItem";

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    flex: 3,
  },
  sideContainer: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contentView: {
    paddingBottom: 50,
  },
});

const LogsHeader: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <View style={styles.header}>
      <View style={styles.sideContainer}>
        <Button title="Back" onPress={onClose} />
      </View>
      <Text style={styles.headerText}>State Logs</Text>
      <View style={styles.sideContainer} />
    </View>
  );
};

export const LogsModal: React.FC<{ visible: boolean; onClose: () => void }> = ({
  visible,
  onClose,
}) => {
  const logs = useLogs();

  return (
    <Modal visible={visible} animationType={"slide"}>
      <SafeAreaView style={styles.view}>
        <LogsHeader onClose={onClose} />
        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentView}
        >
          {logs.map((log, index) => {
            const isCurrent = index === logs.length - 1;
            return <LogItem key={index} value={log} isCurrent={isCurrent} />;
          })}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
