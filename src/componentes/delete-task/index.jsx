import { Modal, View, Text, Button } from "react-native";
import {styles} from "./styles"
const DeleteTask = ({isVisble,setIsVisible,onHandleDelete,selectedTak}) => {
  return (
    <Modal visible={isVisble} animationType="fade">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Detalle de Tarea</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>
            Estas seguro de eliminar la tarea?
          </Text>
          <Text style={styles.detailTask}>{selectedTak?.value}</Text>
        </View>
        <View style={styles.modalButtonConatiner}>
          <Button
            title="Cancelar"
            color="black"
            onPress={() => setIsVisible(false)}
          />
          <Button
            title="Eliminar"
            color="red"
            onPress={() => onHandleDelete(selectedTak?.id)}
          />
        </View>
      </View>
    </Modal>
  );
};
export default DeleteTask;
