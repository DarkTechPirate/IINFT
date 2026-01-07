import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import { theme } from '../styles/theme';

export default function LiveInsectDetectionScreen() {
  const handleOpenCamera = () => {
    Alert.alert(
      'Live Detection',
      'This feature uses AI-powered image recognition to identify storage insects. Point your camera at the suspected insect for identification.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Open Camera', onPress: () => {
          // In a full implementation, this would open the camera with ML model
          Alert.alert('Coming Soon', 'AI-powered insect detection will be available in the next update.');
        }},
      ]
    );
  };

  const detectionTips = [
    {
      id: 1,
      title: 'Capture Clear Images',
      description: 'Ensure good lighting and focus on the insect. Try to capture the insect from multiple angles.',
      icon: '📸',
    },
    {
      id: 2,
      title: 'Include Size Reference',
      description: 'Place a coin or ruler near the insect to help determine its size for accurate identification.',
      icon: '📏',
    },
    {
      id: 3,
      title: 'Note the Location',
      description: 'Record where you found the insect - on grain surface, inside kernel, in cracks, or flying.',
      icon: '📍',
    },
    {
      id: 4,
      title: 'Observe Behavior',
      description: 'Note if the insect is crawling, flying, feeding, or appears dormant.',
      icon: '👁️',
    },
    {
      id: 5,
      title: 'Check for Damage Signs',
      description: 'Look for holes in grains, powder/dust, webbing, or unusual odors nearby.',
      icon: '🔍',
    },
  ];

  const quickIdentifiers = [
    { name: 'Rice Weevil', key: 'Snout/beak, 3mm, brown, circular holes in grain' },
    { name: 'Pulse Beetle', key: 'Heart-shaped abdomen, spots, eggs on pulse surface' },
    { name: 'Lesser Grain Borer', key: 'Cylindrical, head hidden from above, 3mm' },
    { name: 'Khapra Beetle', key: 'Hairy larvae, oval adult, feeds on germ' },
    { name: 'Red Flour Beetle', key: 'Flat, reddish-brown, 3-4mm, in flour/dust' },
    { name: 'Rice Moth', key: 'Gray moth, 15mm wingspan, webbing on grain' },
    { name: 'Indian Meal Moth', key: 'Two-toned wings (white/reddish), webbing' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Live Insect Detection</Text>
        <Text style={styles.headerDescription}>
          Identify storage insects using AI-powered image recognition
        </Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.cameraButton} onPress={handleOpenCamera}>
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.cameraButtonText}>Start Detection</Text>
          <Text style={styles.cameraSubtext}>Tap to open camera</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detection Tips</Text>
          {detectionTips.map((tip) => (
            <View key={tip.id} style={styles.tipCard}>
              <View style={styles.tipIcon}>
                <Text style={styles.tipIconText}>{tip.icon}</Text>
              </View>
              <View style={styles.tipContent}>
                <Text style={styles.tipTitle}>{tip.title}</Text>
                <Text style={styles.tipDescription}>{tip.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Identification Keys</Text>
          <View style={styles.identifierContainer}>
            {quickIdentifiers.map((item, index) => (
              <View key={index} style={styles.identifierCard}>
                <Text style={styles.identifierName}>{item.name}</Text>
                <Text style={styles.identifierKey}>{item.key}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoIcon}>💡</Text>
          <Text style={styles.infoText}>
            For accurate identification, collect specimen samples and consult with entomologists at your nearest agricultural university or research station.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    backgroundColor: '#1E3A8A',
    padding: 24,
    paddingTop: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    color: '#BFDBFE',
    lineHeight: 20,
  },
  content: {
    padding: 16,
  },
  cameraButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  cameraIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  cameraButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cameraSubtext: {
    fontSize: 14,
    color: '#BFDBFE',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  tipCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  tipIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tipIconText: {
    fontSize: 20,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 18,
  },
  identifierContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  identifierCard: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  identifierName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E3A8A',
    marginBottom: 4,
  },
  identifierKey: {
    fontSize: 13,
    color: '#64748B',
  },
  infoBox: {
    backgroundColor: '#FEF3C7',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 13,
    color: '#92400E',
    lineHeight: 20,
  },
});
