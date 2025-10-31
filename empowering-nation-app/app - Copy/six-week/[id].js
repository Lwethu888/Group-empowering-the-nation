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

// Map image id to local image
const imageMap = {
  childminding: require('../../assets/images/childminding.jpg'),
  cooking: require('../../assets/images/cooking.jpg'),
  'garden-maintenance': require('../../assets/images/gardenmaintenance.jpg'),
};

export default function ShortCourseDetail() {
  const router = useRouter();
  const { id, title, image, content } = useLocalSearchParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const openURL = (url) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Short Course Details</Text>
        <Image
          source={require('../../assets/Empoweringthenationlogo.jpg')}
          style={styles.logo}
        />
      </View>

      {/* Dropdown Menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild>
            <Text style={styles.menuItem}>Home</Text>
          </Link>
          <Link href="/six-month" asChild>
            <Text style={styles.menuItem}>Six-Month Courses</Text>
          </Link>
          <Link href="/six-week" asChild>
            <Text style={styles.menuItem}>Six-Week Courses</Text>
          </Link>
          <Link href="/contact" asChild>
            <Text style={styles.menuItem}>Contact</Text>
          </Link>
        </View>
      )}

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={imageMap[image]} style={styles.banner} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{content}</Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Follow us:</Text>
        <View style={styles.socialLinks}>
          <TouchableOpacity
            onPress={() =>
              openURL('https://www.facebook.com/share/15UKVaU5om/?mibextid=wwXIfr')
            }
          >
            <Ionicons name="logo-facebook" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openURL('https://x.com/empoweringthen?s=11')}>
            <Ionicons name="logo-twitter" size={28} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openURL(
                'https://www.instagram.com/empoweringthenation2025?igsh=cTNvODRwM29ucWxr&utm_source=qr'
              )
            }
          >
            <Ionicons name="logo-instagram" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          © 2025 Empowering the Nation. All Rights Reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
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
  logo: { width: 40, height: 40, borderRadius: 20 },
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
    color: '#007AFF',
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
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#555',
    lineHeight: 26,
    marginBottom: 40,
    textAlign: 'center',
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
    borderColor: '#ddd',
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
  socialLinks: {
    flexDirection: 'row',
    gap: 25,
    marginBottom: 12,
  },
});
