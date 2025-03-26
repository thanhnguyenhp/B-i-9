import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const categories = [
  { id: '1', name: 'Pizza', image: require('../assets/logo.png') },
  { id: '2', name: 'Burgers', image: require('../assets/Flag.png') },
  { id: '3', name: 'Steak', image: require('../assets/icon.png') }
];

const popularItems = [
  { id: '1', name: 'Food 1', price: '$1', image: require('../assets/Flag.png') },
  { id: '2', name: 'Food 2', price: '$3', image: require('../assets/Flag.png') }
];

const saleOffItems = [
  { id: '1', name: 'Food 3', price: '$2', discount: '10% OFF', image: require('../assets/Flag.png') }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Explorer</Text>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
      </View>

      {/* Top Categories */}
      <Text style={styles.sectionTitle}>Top Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text>{item.name}</Text>
          </View>
        )}
      />

      {/* Popular Items */}
      <View style={styles.rowHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />

      {/* Sale-off Items */}
      <View style={styles.rowHeader}>
        <Text style={styles.sectionTitle}>Sale-off Items</Text>
        <TouchableOpacity><Text style={styles.viewAll}>View all</Text></TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={saleOffItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.foodItem}>
            <Image source={item.image} style={styles.foodImage} />
            <Text>{item.name}</Text>
            <Text style={styles.discount}>{item.discount}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold' },
  searchBar: { flexDirection: 'row', marginVertical: 10, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 },
  searchInput: { flex: 1, height: 40 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  rowHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  viewAll: { color: 'orange' },
  categoryItem: { alignItems: 'center', marginRight: 15 },
  categoryImage: { width: 60, height: 60, borderRadius: 10 },
  foodItem: { marginRight: 15, alignItems: 'center' },
  foodImage: { width: 100, height: 100, borderRadius: 10 },
  discount: { color: 'red', fontWeight: 'bold' }
});
