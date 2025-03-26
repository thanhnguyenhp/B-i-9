import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function ProfileScreen() {
  const { user, signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user?.avatar }} style={styles.avatar} />
      </View>

      {/* Info */}
      <View style={styles.info}>
        <Text style={styles.name}>{user?.name || 'User Name'}</Text>
        <Text style={styles.role}>{user?.role || 'Mobile Developer'}</Text>
        <Text style={styles.bio}>
          {user?.bio || 'I have above 5 years of experience in native mobile apps development, now I am learning React Native'}
        </Text>
        
        <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#fff' },
  header: { backgroundColor: '#00aaff', width: '100%', alignItems: 'center', paddingVertical: 30 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#fff' },
  info: { alignItems: 'center', padding: 20 },
  name: { fontSize: 22, fontWeight: 'bold' },
  role: { color: 'blue', fontSize: 16 },
  bio: { textAlign: 'center', marginVertical: 10, paddingHorizontal: 20 },
  signOutButton: { backgroundColor: 'orange', padding: 10, borderRadius: 10, marginTop: 20 },
  signOutText: { color: 'white', fontSize: 16 }
});
