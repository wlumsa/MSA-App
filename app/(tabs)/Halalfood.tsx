import React, { useEffect, useState, useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { getHalalDirectory } from "../../Utils/datafetching";
import { supabase } from "../../lib/supabase"; 
import SearchBar from "../components/SearchBar"; 

const cuisineOptions = [
  "All Cuisines", "Chinese", "Persian", "Shawarma", "Burgers", "Bangladeshi",
  "Chinese-Indo-Fusion", "Pakistani-Food", "Chicken-and-Waffles", "Kabob",
  "Uyghur", "Chicken", "Indian-Fusion-Food", "Pizza"
];

const slaughterMethodOptions = ["All Methods", "Hand", "Machine", "Both", "N/A"];

const HalalFood = () => {
  const [halalFood, setHalalFood] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [selectedMethod, setSelectedMethod] = useState("All Methods");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHalalDirectory();
      setHalalFood(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredData = useMemo(() => {
    return halalFood.filter((item) => {
      const matchesCategory = selectedCuisine === "All Cuisines" || item.category?.toLowerCase() === selectedCuisine.toLowerCase();
      const matchesMethod = selectedMethod === "All Methods" || item.slaughtered?.toLowerCase() === selectedMethod.toLowerCase();
      const matchesSearch = item.name?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesMethod && matchesSearch;
    });
  }, [halalFood, selectedCuisine, selectedMethod, searchQuery]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Best Halal Restaurants</Text>

      {/* Use the SearchBar component here */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Filters */}
      <View style={styles.filterContainer}>
        <Text>Select Cuisine:</Text>
        <FlatList
          data={cuisineOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.filterButton, selectedCuisine === item && styles.selectedButton]}
              onPress={() => setSelectedCuisine(item)}
            >
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.filterContainer}>
        <Text>Select Slaughter Method:</Text>
        <FlatList
          data={slaughterMethodOptions}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.filterButton, selectedMethod === item && styles.selectedButton]}
              onPress={() => setSelectedMethod(item)}
            >
              <Text style={styles.filterText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Restaurant List */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.address}>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  loaderContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  filterContainer: { marginBottom: 10 },
  filterButton: { padding: 8, marginRight: 8, borderRadius: 5, backgroundColor: "#f0f0f0" },
  selectedButton: { backgroundColor: "#007bff" },
  filterText: { fontSize: 14, fontWeight: "600" },
  card: { padding: 16, marginVertical: 8, backgroundColor: "#f8f8f8", borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  address: { fontSize: 14, color: "#555" },
});

export default HalalFood;
