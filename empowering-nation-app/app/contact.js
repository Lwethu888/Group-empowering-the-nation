import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const courses = [
  { id: 'first aid', title: 'First Aid', fee: 1500 },
  { id: 'sewing', title: 'Sewing', fee: 1500 },
  { id: 'landscaping', title: 'Landscapping', fee: 1500 },
  { id: 'life skills', title: 'Life Skills', fee: 1500 },
  { id: 'garden maintenance', title: 'Garden Maintenance', fee: 750 },
];

const locations = [
  {
    title: 'Johannesburg Office',
    latitude: -26.2041,
    longitude: 28.0473,
  },
  {
    title: 'Cape Town Branch',
    latitude: -33.9249,
    longitude: 18.4241,
  },
  {
    title: 'Durban Office',
    latitude: -29.8587,
    longitude: 31.0218,
  },
];

export default function Contact() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCourse = (id) => {
    setSelectedCourses((prev) =>
      prev.includes(id) ? prev.filter((courseId) => courseId !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let total = selectedCourses.reduce((sum, id) => {
      const course = courses.find((c) => c.id === id);
      return sum + (course ? course.fee : 0);
    }, 0);

    if (selectedCourses.length > 2) {
      total *= 0.9; // 10% discount
    }

    const vat = total * 0.15;
    const totalWithVAT = total + vat;

    return { total, vat, totalWithVAT };
  };

  const onSubmit = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      Alert.alert('Please fill in all your contact details.');
      return;
    }
    if (selectedCourses.length === 0) {
      Alert.alert('Please select at least one course.');
      return;
    }

    const { total, vat, totalWithVAT } = calculateTotal();

    Alert.alert(
      'Invoice Summary',
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n` +
        `Selected Courses:\n${selectedCourses
          .map((id) => {
            const c = courses.find((course) => course.id === id);
            return `- ${c.title} (R${c.fee})`;
          })
          .join('\n')}\n\n` +
        `Subtotal: R${total.toFixed(2)}\nDiscount: ${
          selectedCourses.length > 2 ? '10%' : '0%'
        }\nVAT (15%): R${vat.toFixed(2)}\n\n` +
        `Total Fee: R${totalWithVAT.toFixed(2)}\n\nA consultant will contact you shortly!`
    );
  };

  const openURL = (url) => Linking.openURL(url);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Contact Us</Text>

        <Image source={require('../assets/Empoweringthenationlogo.jpg')} style={styles.logo} />
      </View>

      {/* Dropdown menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild><Text style={styles.menuItem}>Home</Text></Link>
          <Link href="/six-month" asChild><Text style={styles.menuItem}>Six‑Month Courses</Text></Link>
          <Link href="/six-week" asChild><Text style={styles.menuItem}>Six‑Week Courses</Text></Link>
          <Link href="/calculator" asChild><Text style={styles.menuItem}>Fee Calculator</Text></Link>
        </View>
      )}

      <Image source={require('../assets/Empoweringthenationlogo.jpg')} style={styles.banner} />

      {/* Contact Details */}
      <View style={{ marginTop: menuOpen ? 10 : 20 }}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>info@empoweringnation.org</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoText}>+27 123 456 789</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoText}>123 Empowerment Ave, Johannesburg</Text>
        </View>

        <Text style={styles.formHeading}>Your Contact Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.formHeading}>Select Courses</Text>
        {courses.map((course) => (
          <TouchableOpacity
            key={course.id}
            style={styles.checkboxContainer}
            onPress={() => toggleCourse(course.id)}
          >
            <View
              style={[
                styles.checkbox,
                selectedCourses.includes(course.id) && styles.checkboxSelected,
              ]}
            />
            <Text style={styles.checkboxLabel}>
              {course.title} (R{course.fee})
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Request Consultant Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>

      {/* Maps Section */}
      <View style={styles.mapsSection}>
        {locations.map((loc, idx) => (
          <View key={idx} style={styles.mapContainer}>
            <Text style={styles.mapHeading}>{loc.title}</Text>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: loc.latitude,
                longitude: loc.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
                title={loc.title}
              />
            </MapView>
          </View>
        ))}
      </View>

      {/* Footer with Icons */}
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
    </ScrollView>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: '#f9f9f9',
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#003049',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  menuButton: { paddingRight: 10 },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  menuDropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    marginBottom: 20,
    elevation: 3,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: '#007AFF',
  },
  infoContainer: { marginBottom: 10 },
  infoLabel: { fontWeight: '600', color: '#333' },
  infoText: { fontSize: 16, color: '#555' },
  formHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 12,
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#003049',
    marginRight: 12,
  },
  checkboxSelected: { backgroundColor: '#003049' },
  checkboxLabel: { fontSize: 16, color: '#333' },
  submitButton: {
    backgroundColor: '#003049',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 17,
  },
  backButton: {
    paddingVertical: 12,
    borderRadius: 10,
    borderColor: '#003049',
    borderWidth: 2,
    marginBottom: 25,
  },
  backButtonText: {
    color: '#003049',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  mapsSection: { marginTop: 30 },
  mapContainer: { marginBottom: 30 },
  mapHeading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  map: {
    width: width - 50,
    height: 250,
    borderRadius: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#003049',
    paddingTop: 16,
    backgroundColor: '#003049',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    marginBottom: 8,
    color: '#fff',
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
    alignSelf: 'center',
  },
});
