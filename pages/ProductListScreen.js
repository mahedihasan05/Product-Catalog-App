import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const PRODUCTS = [
  {
    id: "1",
    name: "Shoes",
    price: "$50",
    image: "https://i.imgur.com/1bX5QH6.png",
  },
  {
    id: "2",
    name: "Watch",
    price: "$80",
    image: "https://i.imgur.com/8Km9tLL.png",
  },
  {
    id: "3",
    name: "Bag",
    price: "$40",
    image: "https://i.imgur.com/QCNbOAo.png",
  },
];

export default function ProductListScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search product..."
        style={styles.search}
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                product: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});
