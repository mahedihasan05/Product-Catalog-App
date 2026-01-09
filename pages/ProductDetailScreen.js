import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import { useState } from "react";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
    Alert.alert(
      "Success",
      "Added to Cart"
    );
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>

      <Button title="Add to Cart" onPress={addToCart} />

      <Text style={styles.cartText}>
        Cart Items: {cartCount}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: "green",
    marginBottom: 20,
  },
  cartText: {
    marginTop: 10,
    fontSize: 16,
  },
});
