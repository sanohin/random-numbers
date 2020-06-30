import * as React from "react";
import { Modal } from "react-native";
import { useLogs } from "./LogsProvider";
import { LogItem } from "./LogItem";

export const LogsModal: React.FC<{ visible: boolean }> = ({ visible }) => {
  const logs = useLogs();

  return (
    <Modal visible={visible}>
      {logs.map((log, index) => {
        return <LogItem key={index} value={log} index={index + 1} />;
      })}
    </Modal>
  );
};
