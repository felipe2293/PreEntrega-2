import { useState } from "react";
import { Text, View, Button, Modal } from "react-native";

import { DeleteTask, InputTask, ListDetail, TaskItem } from "./componentes";
import { styles } from "./styles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [borderColor, setBorderColor] = useState("#C5C9E7");
  const [isVisble, setIsVisible] = useState(false);
  const [selectedTak, setSelectedTask] = useState(null);
  const onHandlerFocus = () => {
    setBorderColor("#212121");
  };
  const onHandlerBlur = () => {
    setBorderColor("#C5C9E7");
  };
  const onHandlerChangeText = (text) => {
    setTask(text);
  };
  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task,
      },
    ]);
    setTask("");
  };
  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };
  const renderItem = ({ item }) => (
    <TaskItem item={item} onPressItem={onHandlerModal} />
  );
  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <InputTask
        borderColor={borderColor}
        onHandlerBlur={onHandlerBlur}
        onHandlerFocus={onHandlerFocus}
        onHandlerChangeText={onHandlerChangeText}
        onHandlerCreateTask={onHandlerCreateTask}
        task={task}
      />
      <ListDetail renderItem={renderItem} tasks={tasks} />
      <DeleteTask
        isVisble={isVisble}
        onHandleDelete={onHandleDelete}
        selectedTak={selectedTak}
        setIsVisible={setIsVisible}
      />
    </View>
  );
}
