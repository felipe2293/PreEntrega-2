import { FlatList } from "react-native";

import { styles } from "./styles";

const ListDetail = ({ tasks, renderItem }) => {
  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      style={styles.ListContainer}
      contentContainerStyle={styles.list}
      alwaysBounceVertical={false}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ListDetail;
