import React, { useState, useCallback } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { debounce } from "lodash";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(
    debounce((term) => {
      if (onSearch) onSearch(term);
    }, 200),
    []
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          handleSearch(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8, // mx-2 (Tailwind equivalent)
    borderRadius: 12, // rounded-xl (Tailwind equivalent)
    backgroundColor: "#f0f0f0", // bg-base-100 (adjust as needed)
    paddingHorizontal: 16, // px-4 (Tailwind equivalent)
    height: 40,
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    paddingVertical: 5,
  },
});

export default SearchBar;
