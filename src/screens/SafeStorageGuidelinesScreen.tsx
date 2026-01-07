import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

interface Guideline {
  id: number;
  title: string;
  content: string[];
}

const storageGuidelines: Guideline[] = [
  {
    id: 1,
    title: 'Pre-Storage Preparation',
    content: [
      '• Clean and repair storage structures thoroughly before storing new grain.',
      '• Seal all cracks, crevices, holes, and gaps in walls, floors, and ceilings.',
      '• Apply residual insecticide spray (Malathion 50 EC @ 10ml/L) on walls and floors 15 days before storage.',
      '• Ensure proper whitewashing of walls to eliminate hidden pests.',
      '• Remove all old grain residues, dust, and debris from the storage area.',
      '• Sun-dry the storage structure if possible to reduce humidity.',
    ],
  },
  {
    id: 2,
    title: 'Grain Drying Requirements',
    content: [
      '• Dry grains to safe moisture levels before storage: Cereals (10-12%), Pulses (9-10%), Oilseeds (6-8%).',
      '• Use mechanical dryers or sun drying on clean cemented floors.',
      '• Check moisture content using moisture meters before bagging.',
      '• Never store freshly harvested or moist grain directly.',
      '• Proper drying prevents mold growth and reduces insect reproduction rates.',
    ],
  },
  {
    id: 3,
    title: 'Proper Stacking Methods',
    content: [
      '• Use dunnage (wooden crates/pallets) to keep bags 15-20 cm above the floor.',
      '• Maintain 60 cm distance between stacks and walls for inspection and air circulation.',
      '• Stack bags in a proper pattern (3-2-3 or 2-3-2) for stability.',
      '• Limit stack height to 4-5 meters for gunny bags, 3 meters for HDPE bags.',
      '• Keep central alley of 1-1.5 meters between stack rows for movement and inspection.',
      '• Mark stacks with date of receipt, variety, and quantity.',
    ],
  },
  {
    id: 4,
    title: 'Temperature and Humidity Control',
    content: [
      '• Maintain storage temperature below 25°C if possible (insects become inactive below 15°C).',
      '• Keep relative humidity below 65% to prevent mold and reduce insect activity.',
      '• Ensure proper ventilation through vents, exhaust fans, or natural air movement.',
      '• Use dehumidifiers in humid climates or during monsoon season.',
      '• Monitor temperature and humidity regularly using thermometers and hygrometers.',
      '• Address any hotspots immediately as they indicate insect activity or moisture problems.',
    ],
  },
  {
    id: 5,
    title: 'Regular Monitoring and Inspection',
    content: [
      '• Inspect storage weekly for signs of insect activity, damage, or unusual odors.',
      '• Use probe traps and pheromone traps for early detection of pests.',
      '• Check grain temperature at multiple depths - rising temperature indicates infestation.',
      '• Sample grain from different locations and sieve for insects.',
      '• Maintain inspection records with date, observations, and actions taken.',
      '• Train storage personnel in pest identification and detection methods.',
    ],
  },
  {
    id: 6,
    title: 'Hermetic Storage (Airtight)',
    content: [
      '• Use hermetic bags (PICS bags, GrainPro SuperGrainBags) for insect-free storage.',
      '• Hermetic storage kills insects through oxygen depletion and CO2 buildup.',
      '• Ensure bags are properly sealed without any punctures or holes.',
      '• Store hermetic bags away from rodents and sharp objects.',
      '• Suitable for long-term storage (6-12 months) without chemical treatment.',
      '• Check seals regularly for any damage or air leakage.',
    ],
  },
  {
    id: 7,
    title: 'Use of Protective Treatments',
    content: [
      '• Apply neem leaf powder or neem oil coating for organic protection.',
      '• Use edible oils (groundnut, coconut) @ 5-10 ml/kg for pulse storage.',
      '• Mix activated clay or diatomaceous earth @ 1-2% with grain for physical protection.',
      '• For chemical protection, use approved insecticides like Deltamethrin 2.5 WP.',
      '• Ensure proper mixing and coverage when applying treatments.',
      '• Follow recommended dosages and safety precautions.',
    ],
  },
  {
    id: 8,
    title: 'Fumigation Guidelines',
    content: [
      '• Fumigate only when infestation is detected or as preventive measure for long storage.',
      '• Use Aluminium Phosphide tablets (3g) @ 3 tablets per tonne of grain.',
      '• Ensure proper sealing of storage structure using polythene sheets.',
      '• Maintain exposure period of 5-7 days for effective kill.',
      '• Ventilate thoroughly (24-48 hours) before entry or grain usage.',
      '• Fumigation should be done only by trained personnel with proper safety equipment.',
      '• Never fumigate grain meant for immediate consumption or seed purpose.',
    ],
  },
  {
    id: 9,
    title: 'First-In-First-Out (FIFO) Principle',
    content: [
      '• Always use older stock before newer arrivals to prevent prolonged storage.',
      '• Label all bags/stacks with date of receipt clearly.',
      '• Arrange storage to allow easy access to older stock.',
      '• Rotate stock regularly to prevent accumulation of old grain.',
      '• Dispose of heavily infested or damaged grain promptly.',
    ],
  },
  {
    id: 10,
    title: 'Sanitation and Hygiene',
    content: [
      '• Keep storage premises clean and free from spillage.',
      '• Remove and dispose of sweepings, dust, and debris regularly.',
      '• Control rodents using traps, baits, and proper facility management.',
      '• Prevent bird entry by sealing openings and using nets.',
      '• Maintain drainage to prevent water accumulation near storage.',
      '• Trim vegetation around storage structures to reduce pest harborage.',
    ],
  },
];

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type SafeStorageGuidelinesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SafeStorageGuidelines'>;

interface Props {
  navigation: SafeStorageGuidelinesScreenNavigationProp;
}

const SafeStorageGuidelinesScreen: React.FC<Props> = ({ navigation }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const storageCategories = [
    {
      id: 1,
      title: 'Pulses Storage',
      icon: '🫘',
      description: 'Guidelines for safe storage of pulses',
      screen: 'PulsesStorage' as const,
    },
    {
      id: 2,
      title: 'Spices Storage',
      icon: '🌶️',
      description: 'Guidelines for safe storage of spices',
      screen: 'SpicesStorage' as const,
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Safe Storage Guidelines</Text>
      <Text style={styles.subtitle}>Select a category to view specific guidelines</Text>
      
      <View style={styles.categoriesSection}>
        {storageCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => navigation.navigate(category.screen)}
          >
            <View style={styles.categoryIcon}>
              <Text style={styles.categoryIconText}>{category.icon}</Text>
            </View>
            <View style={styles.categoryContent}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
              <Text style={styles.categoryDescription}>{category.description}</Text>
            </View>
            <Text style={styles.categoryArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.generalTitle}>General Storage Guidelines</Text>
      <Text style={styles.subtitle}>Tap on a guideline to view details</Text>

      {storageGuidelines.map((guideline) => (
        <View key={guideline.id} style={styles.guidelineCard}>
          <TouchableOpacity
            style={styles.guidelineButton}
            onPress={() => toggleExpand(guideline.id)}
            activeOpacity={0.7}
          >
            <View style={styles.guidelineHeader}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{guideline.id}</Text>
              </View>
              <Text style={styles.guidelineTitle}>{guideline.title}</Text>
            </View>
            <Text style={styles.expandIcon}>
              {expandedId === guideline.id ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {expandedId === guideline.id && (
            <View style={styles.contentContainer}>
              {guideline.content.map((text, index) => (
                <Text key={index} style={styles.contentText}>
                  {text}
                </Text>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 16,
  },
  categoriesSection: {
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  categoryIconText: {
    fontSize: 24,
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 13,
    color: '#64748B',
  },
  categoryArrow: {
    fontSize: 28,
    color: '#059669',
    fontWeight: 'bold',
  },
  generalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#059669',
    marginTop: 8,
    marginBottom: 4,
  },
  guidelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  guidelineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  guidelineHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  numberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#059669',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  guidelineTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E293B',
    flex: 1,
  },
  expandIcon: {
    fontSize: 12,
    color: '#64748B',
    marginLeft: 8,
  },
  contentContainer: {
    backgroundColor: '#ECFDF5',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#A7F3D0',
  },
  contentText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default SafeStorageGuidelinesScreen;
