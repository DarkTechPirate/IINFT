import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

interface InfestationSource {
  id: number;
  title: string;
  content: string[];
}

const infestationSources: InfestationSource[] = [
  {
    id: 1,
    title: 'Field Infestation (Pre-Harvest)',
    content: [
      '• Insects such as rice weevil (Sitophilus oryzae), maize weevil (Sitophilus zeamais), and Angoumois grain moth (Sitotroga cerealella) infest grains while still in the field before harvest.',
      '• These field carry-over pests lay eggs on maturing grains, and infestation continues into storage.',
      '• Delayed harvesting increases exposure time and allows greater egg laying by field insects.',
      '• Poor field sanitation and presence of crop residues harbor insect populations.',
    ],
  },
  {
    id: 2,
    title: 'Contaminated Storage Structures',
    content: [
      '• Residual insect populations from previous storage cycles remain hidden in cracks, crevices, and corners of godowns.',
      '• Wooden structures, gunny bags, and bamboo bins provide ideal hiding spots for dormant insects and eggs.',
      '• Failure to clean and disinfect storage structures before new stock arrival leads to immediate cross-infestation.',
      '• Old grain dust, debris, and spillage serve as breeding grounds for secondary pests.',
    ],
  },
  {
    id: 3,
    title: 'Infested Packaging Materials',
    content: [
      '• Used gunny bags, jute sacks, and second-hand containers often carry hidden eggs, larvae, or adult insects.',
      '• Packaging materials stored in infested areas become contaminated before use.',
      '• Recycled bags from previous grain storage without proper treatment spread infestation to fresh stock.',
    ],
  },
  {
    id: 4,
    title: 'Transportation and Handling',
    content: [
      '• Transport vehicles (trucks, railway wagons, ships) previously used for grain carry residual infestation.',
      '• Loading and unloading equipment such as conveyors, elevators, and hoppers harbor insects in joints and crevices.',
      '• Cross-contamination occurs when infested and clean lots are transported together.',
      '• Long transit times in poorly ventilated vehicles promote insect multiplication.',
    ],
  },
  {
    id: 5,
    title: 'Processing Equipment and Mills',
    content: [
      '• Flour mills, rice mills, and processing units accumulate grain dust and residues that support insect breeding.',
      '• Equipment such as cleaners, graders, and packaging machines have hidden areas where insects thrive.',
      '• Continuous operation without regular cleaning allows insect populations to build up.',
    ],
  },
  {
    id: 6,
    title: 'Nearby Infested Sources',
    content: [
      '• Proximity to other infested storage facilities, grain markets, or agricultural areas increases infestation risk.',
      '• Flying insects like moths can migrate from nearby sources to clean storage.',
      '• Rodents and birds can carry insects and contaminated grain between locations.',
      '• Poor waste management near storage areas attracts and harbors pest populations.',
    ],
  },
  {
    id: 7,
    title: 'Environmental Conditions',
    content: [
      '• Warm temperatures (25-35°C) and high humidity (60-80% RH) accelerate insect reproduction and development.',
      '• Poor ventilation creates hotspots in grain bulk where insects multiply rapidly.',
      '• Moisture migration in stored grain due to temperature differentials provides favorable micro-environments.',
      '• Seasonal changes, especially onset of monsoon, trigger increased insect activity.',
    ],
  },
  {
    id: 8,
    title: 'Human Activities and Poor Practices',
    content: [
      '• Mixing new grain with old infested stock spreads infestation throughout the lot.',
      '• Inadequate drying of grain before storage (moisture >12%) promotes insect development.',
      '• Delayed pest control measures allow small infestations to become severe outbreaks.',
      '• Improper stacking (bags touching walls, no dunnage) restricts inspection and fumigation effectiveness.',
      '• Lack of regular monitoring fails to detect early infestation signs.',
    ],
  },
];

const SourcesOfInfestationScreen: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Sources of Infestation</Text>
      <Text style={styles.subtitle}>Tap on a source to view details</Text>

      {infestationSources.map((source) => (
        <View key={source.id} style={styles.sourceCard}>
          <TouchableOpacity
            style={styles.sourceButton}
            onPress={() => toggleExpand(source.id)}
            activeOpacity={0.7}
          >
            <View style={styles.sourceHeader}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{source.id}</Text>
              </View>
              <Text style={styles.sourceTitle}>{source.title}</Text>
            </View>
            <Text style={styles.expandIcon}>
              {expandedId === source.id ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {expandedId === source.id && (
            <View style={styles.contentContainer}>
              {source.content.map((text, index) => (
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
  sourceCard: {
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
  sourceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  sourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  numberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sourceTitle: {
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
    backgroundColor: '#FFFBEB',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#FDE68A',
  },
  contentText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default SourcesOfInfestationScreen;
