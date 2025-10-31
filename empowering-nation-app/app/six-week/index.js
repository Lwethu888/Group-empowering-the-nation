import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Local images
const courseImages = {
  childminding: require('../../assets/images/childminding.jpg'),
  cooking: require('../../assets/images/cooking.jpg'),
  'garden-maintenance': require('../../assets/images/gardenmaintenance.jpg'),
};

// Course data
const shortCourses = [
  {
    id: 'childminding',
    title: 'Childminding',
    image: courseImages.childminding,
    content:
      'This course provides skills for professional child care and development. Focused on child safety, routine planning, hygiene, and early stimulation activities. Why it’s valuable to employers: Parents can trust their helper to care for kids responsibly and with more confidence, which means less stress for the whole household',
  },
  {
    id: 'cooking',
    title: 'Cooking',
    image: courseImages.cooking,
    content:
      'Learn essential cooking techniques and nutrition in this hands-on course. Learners are taught how to plan meals, cook basic recipes, and handle food safely. Why it’s valuable to employers: Healthier home-cooked meals, tailored to the family’s needs — and fewer takeaways or food waste.',
  },
  {
    id: 'garden-maintenance',
    title: 'Garden Maintenance',
    image: courseImages['garden-maintenance'],
    content:
      'Master lawn care, plant management, and seasonal gardening. Teaches proper lawn care, weeding, pruning, pest control, and seasonal maintenance. Why it’s valuable to employers: A tidy, thriving garden with less effort from the employer — and better plant care throughout the year.',
  },
];

export default function SixWeekCourses() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Six-Week Courses</Text>
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

      {/* Main Heading */}
      <Text style={styles.heading}>Select a Course</Text>

      {/* Course List */}
      <FlatList
        data={shortCourses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseButton}
            onPress={() =>
              router.push({
                pathname: `/six-week/${item.id}`,
                params: {
                  title: item.title,
                  content: item.content,
                  image: item.id,
                },
              })
            }
          >
            <View style={styles.courseContent}>
              <Image source={item.image} style={styles.courseImage} resizeMode="cover" />
              <Text style={styles.courseButtonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Home Button */}
      <TouchableOpacity style={styles.homeButton} onPress={() => router.push('/')}>
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

      {/* Footer with Icons */}
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

// Styles
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
    textAlign: 'center',
    flex: 1,
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
    color: '#003049',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 25,
    color: '#222',
    textAlign: 'center',
    marginTop: 20,
  },
  courseButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  courseContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  courseButtonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
  homeButton: {
    marginHorizontal: 20,
    marginTop: 10,
	marginBottom: 16,
    backgroundColor: '#003049',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  homeButtonText: {
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
