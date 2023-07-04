import { View, TextInput, Button } from "react-native";

import { styles } from "./styles";
const inputTask = ({
  borderColor,
  onHandlerFocus,
  onHandlerBlur,
  onHandlerChangeText,
  onHandlerCreateTask,
  task,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { borderColor }]}
        placeholder="Ingrese nueva tarea preventiva"
        autoCapitalize="none"
        autoCorrect={false}
        cursorColor="#424D9E"
        onFocus={onHandlerFocus}
        onBlur={onHandlerBlur}
        onChangeText={onHandlerChangeText}
        value={task}
      />
      <Button
        disabled={task.length === 0}
        title="Agregar"
        color="#424D9E"
        onPress={onHandlerCreateTask}
      />
    </View>
  );
};

export default inputTask;
