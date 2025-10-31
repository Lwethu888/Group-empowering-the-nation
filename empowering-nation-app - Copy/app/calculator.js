import { Ionicons } from '@expo/vector-icons';  
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

export default function FeeCalculator() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Contact form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  // Course switches
  const [course1, setCourse1] = useState(false);
  const [course2, setCourse2] = useState(false);
  const [course3, setCourse3] = useState(false);
  const [course4, setCourse4] = useState(false);
  const [course5, setCourse5] = useState(false);
  const [course6, setCourse6] = useState(false);
  const [course7, setCourse7] = useState(false);

  const courses = [
    { id: 1, label: 'First Aid', price: 1500, selected: course1, setter: setCourse1 },
    { id: 2, label: 'Sewing', price: 1500, selected: course2, setter: setCourse2 },
    { id: 3, label: 'Landscaping', price: 1500, selected: course3, setter: setCourse3 },
    { id: 4, label: 'Life Skills', price: 1500, selected: course4, setter: setCourse4 },
    { id: 5, label: 'Childminding', price: 750, selected: course5, setter: setCourse5 },
    { id: 6, label: 'Cooking', price: 750, selected: course6, setter: setCourse6 },
    { id: 7, label: 'Garden Maintenance', price: 750, selected: course7, setter: setCourse7 },
  ];

  const selectedCourses = courses.filter(course => course.selected);
  const courseCount = selectedCourses.length;

  const subtotal = selectedCourses.reduce((sum, c) => sum + c.price, 0);

  let discountRate = 0;
  if (courseCount === 2) discountRate = 0.05;
  else if (courseCount === 3) discountRate = 0.10;
  else if (courseCount > 3) discountRate = 0.15;

  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discountAmount;
  const vat = discountedSubtotal * 0.15;
  const totalWithVAT = discountedSubtotal + vat;

  const openURL = (url) => {
    Linking.openURL(url);
  };

  const onSubmit = () => {
    if (!name.trim() || !phone.trim() || !email.trim()) {
      Alert.alert('Missing information', 'Please fill in all your contact details.');
      return;
    }
    if (courseCount === 0) {
      Alert.alert('No courses selected', 'Please select at least one course.');
      return;
    }

    // Navigate to InvoiceScreen and pass data
    router.push({
      pathname: '/InvoiceScreen',
      params: {
        name,
        phone,
        email,
        selectedCourses: JSON.stringify(selectedCourses),
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fee Calculator & Invoice</Text>
        <Image
          source={require('../assets/Empoweringthenationlogo.jpg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Dropdown Menu */}
      {menuOpen && (
        <View style={styles.menuDropdown}>
          <Link href="/" asChild><Text style={styles.menuItem}>Home</Text></Link>
          <Link href="/six-month" asChild><Text style={styles.menuItem}>Six‑Month Courses</Text></Link>
          <Link href="/six-week" asChild><Text style={styles.menuItem}>Six‑Week Courses</Text></Link>
          <Link href="/contact" asChild><Text style={styles.menuItem}>Contact</Text></Link>
        </View>
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Your Contact Details</Text>
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

        <Text style={styles.heading}>Select Courses</Text>
        {courses.map((course, index) => (
          <View style={styles.switchRow} key={index}>
            <Text style={styles.courseText}>{course.label} (R{course.price})</Text>
            <Switch
              value={course.selected}
              onValueChange={course.setter}
              trackColor={{ false: '#ccc', true: '#007AFF' }}
              thumbColor={course.selected ? '#fff' : '#f4f3f4'}
            />
          </View>
        ))}

        <View style={{ marginTop: 30 }}>
          <Text style={styles.totalText}>Selected Courses: {courseCount}</Text>
          <Text style={styles.totalText}>Subtotal: R{subtotal.toFixed(2)}</Text>
          <Text style={styles.totalText}>Discount ({(discountRate*100).toFixed(0)}%): ‑R{discountAmount.toFixed(2)}</Text>
          <Text style={styles.totalText}>Subtotal After Discount: R{discountedSubtotal.toFixed(2)}</Text>
          <Text style={styles.totalText}>VAT (15%): R{vat.toFixed(2)}</Text>
          <Text style={[styles.totalText, { fontWeight: '700', marginTop: 10 }]}>
            Total Fees (Incl. VAT): R{totalWithVAT.toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={onSubmit} activeOpacity={0.8}>
          <Text style={styles.submitButtonText}>Generate Invoice</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Follow us:</Text>

        {/* Social Media Icons Added Here */}
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
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    backgroundColor: '#003049', paddingVertical: 14, paddingHorizontal: 16,
  },
  headerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  logo: { width: 35, height: 35 },
  menuDropdown: {
    backgroundColor: '#fff', paddingVertical: 10, paddingHorizontal: 20,
    borderBottomWidth: 1, borderColor: '#ccc',
  },
  menuItem: {
    paddingVertical: 10, fontSize: 16, color: '#003049', borderBottomWidth: 0.5, borderColor: '#ddd',
  },
  content: { padding: 25 },
  heading: { fontSize: 22, fontWeight: '700', marginBottom: 20, textAlign: 'center', color: '#222' },
  input: {
    height: 50, borderColor: '#ccc', borderWidth: 1, borderRadius: 8,
    paddingHorizontal: 12, marginBottom: 20, fontSize: 16,
    backgroundColor: '#fff',
  },
  switchRow: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    marginVertical: 12, paddingHorizontal: 10,
  },
  courseText: { fontSize: 18, color: '#333' },
  totalText: {
    fontSize: 18, fontWeight: '600', marginTop: 10, textAlign: 'center', color: '#003049',
  },
  submitButton: {
    marginTop: 30, backgroundColor: '#007AFF', paddingVertical: 15, borderRadius: 10,
    alignItems: 'center', elevation: 2,
  },
  submitButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  backButton: {
    marginTop: 20, backgroundColor: '#003049', paddingVertical: 15, borderRadius: 10,
    alignItems: 'center', elevation: 2,
  },
  backButtonText: { color: '#fff', fontSize: 18, fontWeight: '700' },
  footer: {
    borderTopWidth: 1, borderColor: '#ddd', padding: 16, backgroundColor: '#003049',
    alignItems: 'center',
  },
  footerText: { fontSize: 14, color: '#fff', marginBottom: 8, textAlign: 'center' },
  socialIcons: {
    flexDirection: 'row',
    gap: 25,
    marginBottom: 12,
  },
});
