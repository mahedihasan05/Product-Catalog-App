import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: "green",
  },
});
