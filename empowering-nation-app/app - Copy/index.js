import { Ionicons } from '@expo/vector-icons'; // For menu icon & social icons
import { Link } from 'expo-router';
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

export default function HomeScreen() {
  const [menuOpen, setMenuOpen] = useState(false);

  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header with Menu Icon and Logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Empowering the Nation</Text>
        <Image source={require('../assets/Empoweringthenationlogo.jpg')} style={styles.headerLogo} />
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
          <Link href="/calculator" asChild>
            <Text style={styles.menuItem}>Calculate Fees</Text>
          </Link>
          <Link href="/contact" asChild>
            <Text style={styles.menuItem}>Contact</Text>
          </Link>
        </View>
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Image source={require('../assets/Empoweringthenationlogo.jpg')} style={styles.banner} />

        <Text style={styles.title}>Empowering the Nation</Text>
        <Text style={styles.description}>
          Empowering the Nation is a small business created to give domestic workers and gardeners the chance to upskill, improve their job opportunities, and build better futures. Founded by Precious Radebe in 2022. The goal behind the course is to help domestic workers be more marketable, helping gardeners, nannies and helpers gain more skills that will make them stand out. At Empowering The Nations, we offer training that is affordable, practical, and easy to access. We believe everyone deserves the chance to grow, no matter where they start. Our courses are designed with care, keeping in mind the busy lives and needs of our learners. We offer courses that are 6 months and six weeks long, we do however, encourage that our customers book both courses to further upskill themselves. This also helps in having additional skills, therefore, ensuring a better salary for the domestic workers, and more skills and quality for the household that find themselves with the domestic workers that have taken any of the course with us.
        </Text>

        <View style={styles.buttonGroup}>
          <Link href="/six-month" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Six-Month Courses</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/six-week" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Six-Week Courses</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/calculator" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Calculate Fees</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Contact Us</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>

      {/* Footer with icon-based social media links */}
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
    backgroundColor: '#f5f5f5',
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
    marginLeft: 16,
    flex: 1,
    textAlign: 'center',
  },
  headerLogo: {
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#003049',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
  banner: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
});
