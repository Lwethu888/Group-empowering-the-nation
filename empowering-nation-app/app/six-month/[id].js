import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Map the id passed to its local image
const imageMap = {
  'first-aid': require('../../assets/images/firstaid.jpg'),
  'sewing': require('../../assets/images/logo.png'),
  'landscaping': require('../../assets/images/landscapping.jpg'),
  'life-skills': require('../../assets/images/lifeskills.jpg'),
};

export default function CourseDetail() {
  const router = useRouter();
  const { id, title, image, content } = useLocalSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const formatTitle = (str) =>
    str
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const openURL = (url) => {
    Linking.openURL(url);
  };

  const displayTitle = title ?? formatTitle(id);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Course Details</Text>
        <Image
          source={require('../../assets/Empoweringthenationlogo.jpg')}
          style={styles.logo}
        />
      </View>

      {/* Dropdown menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild>
            <Text style={styles.menuItem}>Home</Text>
          </Link>
          <Link href="/six-month" asChild>
            <Text style={styles.menuItem}>Six‑Month Courses</Text>
          </Link>
          <Link href="/six-week" asChild>
            <Text style={styles.menuItem}>Six‑Week Courses</Text>
          </Link>
          <Link href="/contact" asChild>
            <Text style={styles.menuItem}>Contact</Text>
          </Link>
        </View>
      )}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={imageMap[image]} style={styles.banner} />
        <Text style={styles.title}>{displayTitle}</Text>
        <Text style={styles.description}>{content}</Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Updated Footer with Icons */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Follow us:</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => openURL('https://www.facebook.com/share/15UKVaU5om/?mibextid=wwXIfr')}>
            <Ionicons name="logo-facebook" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL('https://x.com/empoweringthen?s=11')}>
            <Ionicons name="logo-twitter" size={28} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => openURL('https://www.instagram.com/empoweringthenation2025?igsh=cTNvODRwM29ucWxr&utm_source=qr')}>
            <Ionicons name="logo-instagram" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>© 2025 Empowering the Nation. All Rights Reserved.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#003049',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
    marginLeft: -28,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuDropdown: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  menuItem: {
    paddingVertical: 10,
    fontSize: 16,
    color: '#003049',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  content: {
    padding: 25,
    flexGrow: 1,
    justifyContent: 'center',
  },
  banner: {
    width: 200,
    height: 200,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#555',
    lineHeight: 26,
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    backgroundColor: '#003049',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#003049',
    padding: 16,
    backgroundColor: '#003049',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 25,
    marginBottom: 12,
  },
});
