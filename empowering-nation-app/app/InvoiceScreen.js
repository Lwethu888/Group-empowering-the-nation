// InvoiceScreen.js
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default function InvoiceScreen() {
  const { name, phone, email, selectedCourses } = useLocalSearchParams();
  const router = useRouter();

  const courses = JSON.parse(selectedCourses || '[]');

  const subtotal = courses.reduce((sum, c) => sum + c.price, 0);

  let discountRate = 0;
  if (courses.length === 2) discountRate = 0.05;
  else if (courses.length === 3) discountRate = 0.10;
  else if (courses.length > 3) discountRate = 0.15;

  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discountAmount;
  const vat = discountedSubtotal * 0.15;
  const total = discountedSubtotal + vat;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Invoice Summary</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>👤 Contact Information</Text>
        <Text style={styles.detailText}>Name: <Text style={styles.info}>{name}</Text></Text>
        <Text style={styles.detailText}>Phone: <Text style={styles.info}>{phone}</Text></Text>
        <Text style={styles.detailText}>Email: <Text style={styles.info}>{email}</Text></Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>📚 Selected Courses</Text>
        {courses.map((course, index) => (
          <View key={index} style={styles.courseRow}>
            <Text style={styles.courseLabel}>{course.label}</Text>
            <Text style={styles.coursePrice}>R{course.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>💵 Fee Breakdown</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Subtotal</Text>
          <Text style={styles.value}>R{subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>Discount ({(discountRate * 100).toFixed(0)}%)</Text>
          <Text style={[styles.value, { color: '#c1121f' }]}>‑R{discountAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>After Discount</Text>
          <Text style={styles.value}>R{discountedSubtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.label}>VAT (15%)</Text>
          <Text style={styles.value}>R{vat.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total (Incl. VAT)</Text>
          <Text style={styles.totalValue}>R{total.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back to Calculator</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9', padding: 20 },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003049',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#003049',
    marginBottom: 12,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 6,
    color: '#444',
  },
  info: {
    fontWeight: '600',
    color: '#000',
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  courseLabel: {
    fontSize: 16,
    color: '#333',
  },
  coursePrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003049',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#444',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#003049',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#007AFF',
  },
  backButton: {
    backgroundColor: '#003049',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
