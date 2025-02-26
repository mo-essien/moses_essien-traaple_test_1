import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HomeScreen from './views/home';
import FoodDetailsScreen from './views/food_details';
import CartScreen from './views/cart';
import CheckoutScreen from './views/checkout';

const Stack = createStackNavigator();

const Layout = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {children}
      </ScrollView>
    </View>
  );
};

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <HomeScreen navigation={navigation} />
  </View>
);

const Cart = ({ navigation }) => (
  <Layout title="Cart">
    <CartScreen navigation={navigation} />
  </Layout>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
          <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    flexGrow: 1,
    padding: 16,
  },
});
