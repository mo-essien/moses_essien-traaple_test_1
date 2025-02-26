import React, {useState} from 'react';
import { View, Text, StyleSheet , Image, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import NavBackButton from '../components/nav_back_button';
import { TouchableOpacity } from 'react-native';

export default function FoodDetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const [isAddedToCart, setIsAddedToCart] = useState(false)
  const dispatch = useDispatch();

  const addFoodToCart = () => {
    dispatch(addToCart(item))
    setIsAddedToCart((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NavBackButton navigation={navigation} />
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
          <Text style={styles.cartText}>Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemDetailsContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {
        isAddedToCart ?
        <View style={styles.buttonGroup}>
          <Button title="Return to Menu" onPress={ () => navigation.navigate('Home') } />
          <Button title="Proceed to Cart" onPress={ () => navigation.navigate('Cart') } />
        </View> :
        <Button title="Add to Cart" onPress={ addFoodToCart } />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cartButton: {
    backgroundColor: '#0000FF',
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetailsContainer: {
    flexGrow: 1
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  price: {
    fontSize: 20,
    color: '#888',
  },
  description: {
    fontSize: 16,
    marginVertical: 16,
  },
  buttonGroup: {
    gap: 16
  }
});
