import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductListScreen from "./pages/ProductListScreen";
import ProductDetailScreen from "./pages/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductListScreen}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
