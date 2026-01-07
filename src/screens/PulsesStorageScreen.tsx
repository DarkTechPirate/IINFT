import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const PulsesStorageScreen: React.FC = () => {
  const guidelines = [
    {
      id: 1,
      title: 'Definitions of Various Refractions for Pulses',
      points: [
        '• Pulses (Whole): Means whole seeds of legumes such as chana, tur, urad, moong, and masoor in undamaged condition.',
        '• Dal (Split Pulses): Split halves of pulses, with or without husk.',
        '• Foreign Matter: Dust, stones, husk, chaff, sticks, weed seeds, and any other non-edible residue.',
        '• Other Foodgrains: Any cereal or millet mixed unintentionally with pulses.',
        '• Damaged Grains: Grains affected internally by moisture, heat, fungus, or microbial action, materially affecting quality.',
        '• Slightly Damaged/Touched: Superficially affected grains where only the seed coat or tip is damaged.',
        '• Discoloured Grains: Grains showing abnormal colour due to improper drying, immaturity, weather damage, or fungal activity.',
        '• Immature/Shrivelled Grains: Underdeveloped, wrinkled or shrivelled grains with low density.',
        '• Weevilled Grains: Grains partially or wholly bored by insects.',
        '• Insect-Damaged Grains: Any pulse grain visibly affected by adult or larval insects.',
        '• Egg-Spotted Grains: Grains having insect egg deposits on the surface (common in pulses).',
        '• Poisonous Weed Seeds: Seeds of Dhatura, Akra/Vicia spp., and other toxic weeds—strictly limited.',
      ],
    },
    {
      id: 2,
      title: 'Moisture Content',
      points: [
        '• The maximum permissible moisture content for safe storage of pulses is 12%.',
        '• Moisture between 12–14% is accepted with value cut, while above 14% the lot is rejected.',
      ],
    },
    {
      id: 3,
      title: 'Stack Height',
      points: [
        'Pulses should be stored in stacks not exceeding:',
        '• Whole pulse – in layers: 12 and in Meters: 4.2',
        '• Milled pulse – in layers: 12 and in Meters: 3',
        '• Adequate ventilation must be maintained to avoid heating, and stacks should not touch walls to prevent moisture migration.',
      ],
    },
    {
      id: 4,
      title: 'Dunnage',
      points: [
        'Best dunnage materials include:',
        '• Wooden crates',
        '• Double-layer bamboo mats with polythene sheet',
        '• Elevated platforms',
        'This prevents moisture migration from the floor and protects pulses during long-term storage.',
      ],
    },
    {
      id: 5,
      title: 'Sampling of Pulses',
      points: [
        '• A representative composite sample must be drawn according to BIS 14818:2000.',
        '• Use clean, dry tools to avoid contamination.',
        '• Samples must represent the entire lot across bags.',
        '• Prepare a 2.5 kg composite sample, then reduce to a 250 g test sample using a sample divider or coning and quartering.',
        'This test sample is used for all refractions and moisture analysis.',
      ],
    },
    {
      id: 6,
      title: 'Analysis Procedure - Determination of Foreign Matter',
      points: [
        '• Record total weight of the test sample.',
        '• Sieve the sample using appropriate perforated sieves.',
        '• Collect all material retained as foreign matter.',
        '• Weigh and calculate the percentage of foreign matter.',
      ],
    },
    {
      id: 7,
      title: 'Determination of Other Refractions',
      points: [
        '• Spread foreign-matter-free sample on a clean enamel plate.',
        '• Take exactly 20 g from different points.',
        'Pick refractions in the standard order:',
        '  1. Other foodgrains',
        '  2. Damaged',
        '  3. Discoloured',
        '  4. Insect-damaged',
        '  5. Weevilled',
        '  6. Immature/Shrivelled',
        '  7. Slightly damaged',
        '  8. Egg-spotted grains',
        '• Calculate percentage: (Weight of refraction / 20 g) × 100',
        'Analysis should be done twice and the average reported.',
      ],
    },
    {
      id: 8,
      title: 'Categorization of Pulses Based on Refractions',
      points: [
        'Pulses are generally classified into categories depending on the extent of:',
        '• Damaged grains',
        '• Discoloured grains',
        '• Shrivelled grains',
        '• Weevilled grains',
        'Lots crossing the limits of weevilled grains (more than 1%), toxic seeds, or moisture >14% are REJECTED.',
      ],
    },
    {
      id: 9,
      title: 'Storage Pests Affecting Pulses',
      points: [
        '• Cowpea Weevil / Pulse Beetle (Callosobruchus spp.): Major pest; adults lay eggs on seeds; larvae bore into grains. Causes hollowing and powdery residues. Rapid breeding at warm temperatures.',
        '• Pea Weevil (Bruchids): One generation/year; attacks peas and chickpeas; larvae remain inside seeds.',
        '• Red Flour Beetle (Tribolium castaneum): Secondary pest feeding on broken/damaged pulses; causes off-odour.',
        '• Flat Grain Beetle (Laemophloeus/Psocoptera): Feeds on fine dust and residues; indicates poor hygiene.',
        '• Rice Moth (Corcyra cephalonica): Larvae produce webbing and contaminate stored pulses.',
      ],
    },
    {
      id: 10,
      title: 'Additional Storage Considerations',
      points: [
        'Aeration Cooling:',
        '• Essential for pulses stored above 12% moisture',
        '• Prevents mould, hot-spots, and seed darkening',
        '• Extends safe storage life by lowering temperature',
        '• Fan airflow of 2–3 L/s/tonne is sufficient for cooling',
        '',
        'Mechanical Damage Prevention:',
        '• Use belt conveyors instead of augers',
        '• Run augers full and slow',
        '• Avoid dropping grains from height',
        '• Handle pulses gently; chickpea "beaks" break easily',
        '',
        'Safe Storage Times:',
        '• At 12% moisture & 10°C: pulses safe for >9 months',
        '• At 14% moisture & 20°C: safe for only ~3 months',
        '• Lentils & chickpeas stored warm darken and lose grade rapidly',
      ],
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Pulses Storage Guidelines</Text>
      
      <View style={styles.introBox}>
        <Text style={styles.introTitle}>Overview</Text>
        <Text style={styles.introText}>
          The definitions, storage practices, sampling protocols, refraction analysis, moisture limits, and pest management for pulses have been prepared by compiling and interpreting information from authoritative sources, including the Handbook of Quality Control – Storage & Research (Department of Food and Public Distribution, Government of India), BIS Standard IS 14818:2000 for sampling of cereals and pulses, the Grain Storage Fact Sheet (GSFS-8) on storing pulses, and technical guidance from the Saskatchewan Pulse Growers and the Canadian Grain Commission also referred Warehousing (Development & Regulation) Act, 2007.
        </Text>
        <Text style={[styles.introText, { marginTop: 12 }]}>
          <Text style={styles.boldText}>Scientific Family:</Text> Leguminosae (Fabaceae)
        </Text>
        <Text style={styles.introText}>
          Pulses are the dried edible seeds of leguminous plants and are consumed either whole or as split dal. They include commonly used varieties such as chana, tur, urad, moong, and masoor. In processing, pulses may be split into dal with or without husk, and their quality is determined by purity, absence of damage, and freedom from insect infestation. These characteristics help classify pulses as Fit for Fair Average Quality (FAQ) during procurement.
        </Text>
      </View>

      {guidelines.map((guideline) => (
        <View key={guideline.id} style={styles.guidelineBox}>
          <View style={styles.guidelineHeader}>
            <View style={styles.numberBadge}>
              <Text style={styles.numberText}>{guideline.id}</Text>
            </View>
            <Text style={styles.guidelineTitle}>{guideline.title}</Text>
          </View>
          <View style={styles.guidelineContent}>
            {guideline.points.map((point, index) => (
              <Text key={index} style={styles.guidelinePoint}>
                {point}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8E1',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#F59E0B',
    marginBottom: 16,
    textAlign: 'center',
  },
  introBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#92400E',
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
  },
  boldText: {
    fontWeight: '700',
    color: '#92400E',
  },
  guidelineBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  guidelineHeader: {
    backgroundColor: '#FEF3C7',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FDE68A',
  },
  numberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  guidelineTitle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#92400E',
  },
  guidelineContent: {
    padding: 16,
  },
  guidelinePoint: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 6,
  },
});

export default PulsesStorageScreen;
