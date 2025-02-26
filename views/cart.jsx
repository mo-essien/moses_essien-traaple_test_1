import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import NavBackButton from '../components/nav_back_button';

export default function CartScreen({ navigation }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <NavBackButton navigation={navigation} />
      <FlatList
        data={cart}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => dispatch(removeFromCart(item.id))}>
              <Text style={styles.removeItem}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${total.toFixed(2)}</Text>
        <Button title="Checkout" onPress={() => navigation.navigate('Checkout')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  itemName: {
    flex: 1.875,
    fontSize: 18,
  },
  itemPrice: {
    flex: .5,
    fontSize: 16,
    color: '#888',
  },
  deleteButton: {
    flex: .625
  },
  removeItem: {
    color: '#ff6347',
  },
  totalContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
