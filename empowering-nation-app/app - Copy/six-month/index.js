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

// ✅ Local images
const courseImages = {
  'first-aid': require('../../assets/images/firstaid.jpg'),
  'sewing': require('../../assets/images/logo.png'),
  'landscaping': require('../../assets/images/landscapping.jpg'),
  'life-skills': require('../../assets/images/lifeskills.jpg'),
};

// ✅ Course data
const courses = [
  {
    id: 'first-aid',
    title: 'First Aid - R1500',
    image: courseImages['first-aid'],
    content:
      'Learn essential first aid skills: CPR, wound care, emergency response, and more. Learners are equipped to handle basic medical situations at home. From cuts and burns to choking or fainting, knowing what to do can make a big difference. Why it’s valuable to employers: It gives families peace of mind knowing there’s someone trained to respond in case of emergencies, especially where there are kids, elderly people, or pets.',
  },
  {
    id: 'sewing',
    title: 'Sewing - R1500',
    image: courseImages.sewing,
    content:
      'This course teaches how to mend clothes, make small alterations, and even create household items like cushions or curtains. Why it’s valuable to employers: You save money on tailoring, and you have someone who can quickly sort out torn school uniforms or fix-up home textiles.',
  },
  {
    id: 'landscaping',
    title: 'Landscaping - R1500',
    image: courseImages.landscaping,
    content:
      'Trainees learn how to design, maintain, and upgrade gardens into beautiful outdoor spaces. Why it’s valuable to employers: Your property looks well-kept and welcoming. A good garden can even boost the value of your home.',
  },
  {
    id: 'life-skills',
    title: 'Life Skills - R1500',
    image: courseImages['life-skills'],
    content:
      'Covers essential topics like communication, money management, timekeeping, problem-solving, and professionalism. Why it’s valuable to employers: You work with someone who’s more organised, respectful, and easy to communicate with — making everyday tasks smoother.',
  },
];

export default function SixMonthCourses() {
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
        <Text style={styles.headerTitle}>Six‑Month Courses</Text>
        <Image
          source={require('../../assets/Empoweringthenationlogo.jpg')}
          style={styles.logo}
        />
      </View>

      {/* Dropdown Menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild>
            <TouchableOpacity>
              <Text style={styles.menuItem}>Home</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/six-month" asChild>
            <TouchableOpacity>
              <Text style={styles.menuItem}>Six‑Month Courses</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/six-week" asChild>
            <TouchableOpacity>
              <Text style={styles.menuItem}>Six‑Week Courses</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity>
              <Text style={styles.menuItem}>Contact</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}

      {/* Page Title */}
      <Text style={styles.heading}>Select a Course</Text>

      {/* Course List */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.courseButton}
            activeOpacity={0.7}
            onPress={() =>
              router.push({
                pathname: `/six-month/${item.id}`,
                params: {
                  title: item.title,
                  content: item.content,
                  image: item.id,
                },
              })
            }
          >
            <View style={styles.courseContent}>
              <Image
                source={item.image}
                style={styles.courseImage}
                resizeMode="cover"
              />
              <Text style={styles.courseButtonText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Home Button */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => router.push('/')}
        activeOpacity={0.7}
      >
        <Text style={styles.homeButtonText}>Home</Text>
      </TouchableOpacity>

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
    marginTop: 50,
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
