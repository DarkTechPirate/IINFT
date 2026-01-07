import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function ChemicalMethodScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chemical Method</Text>
        <Text style={styles.headerDescription}>
          Chemical methods consist of prophylactic spraying of recommended chemicals followed by curative treatment using fumigants.
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Prophylactic Spraying</Text>
          </View>
          <Text style={styles.sectionText}>
            Prophylactic spraying using Malathion 50% EC once in 15 days helps to control flying/crawling insects. Spraying is done during evening hours since flying insects are more active during dawn and dusk. Prior to spraying, any spillage of grains should be cleaned to prevent contamination.{'\n\n'}
            Deltamethrin 2.5% WP @ 120g in 3 litres of water provides solution for 100 sq.m area. Necessary PPE (gloves, mask, goggles) must be worn during spraying.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Steps for Spraying</Text>
          </View>
          <Text style={styles.subSectionTitle}>Preparation</Text>
          <Text style={styles.sectionText}>
            Measure area and calculate dosage required
          </Text>
          <Text style={styles.subSectionTitle}>Mixing</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Mix wettable powder with required water, stir thoroughly</Text>
            <Text style={styles.bulletPoint}>• Do not mix different insecticides unless label permits</Text>
            <Text style={styles.bulletPoint}>• Never prepare near children, animals, or food</Text>
            <Text style={styles.bulletPoint}>• Do not eat or drink during spraying</Text>
          </View>
          <Text style={styles.subSectionTitle}>Spraying</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Check sprayer condition (clean, leak-free, proper pressure)</Text>
            <Text style={styles.bulletPoint}>• Avoid bare hands for measuring chemicals</Text>
            <Text style={styles.bulletPoint}>• Dispose leftover solution safely</Text>
            <Text style={styles.bulletPoint}>• Wash hands thoroughly after spraying</Text>
            <Text style={styles.bulletPoint}>• Keep godowns open for ventilation before entry</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Curative - Aluminium Phosphide Fumigation</Text>
          </View>
          <Text style={styles.sectionText}>
            ALP releases phosphine (PH₃) gas when exposed to moisture. Highly toxic to pests. Carried out under airtight conditions.
          </Text>
          <Text style={styles.subSectionTitle}>Dosage</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Cover fumigation: 9g/MT (3 tablets/MT)</Text>
            <Text style={styles.bulletPoint}>• Shed fumigation: 360-420g/100m³</Text>
          </View>
          <Text style={styles.subSectionTitle}>Exposure Period</Text>
          <Text style={styles.sectionText}>7 days for most pests, 10 days for Laemophloeus sp.</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Cover Fumigation Steps</Text>
          </View>
          <Text style={styles.subSectionTitle}>1. Preparation</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Select flat, clean site away from residential areas</Text>
            <Text style={styles.bulletPoint}>• Operators wear gloves, masks, protective clothing</Text>
          </View>
          <Text style={styles.subSectionTitle}>2. Stacking</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Arrange bags neatly, minimize gaps</Text>
            <Text style={styles.bulletPoint}>• Height: 15-20ft for cartons, 10-12ft for bags</Text>
            <Text style={styles.bulletPoint}>• Leave 2-3ft between stacks</Text>
            <Text style={styles.bulletPoint}>• Use pallets to prevent moisture absorption</Text>
            <Text style={styles.bulletPoint}>• Cover with gas-proof PE/MLCL/PVC sheets</Text>
          </View>
          <Text style={styles.subSectionTitle}>3. Fumigant Placement</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Calculate cubic meters, apply 3-5g/m³</Text>
            <Text style={styles.bulletPoint}>• Place in paper envelopes or perforated containers</Text>
            <Text style={styles.bulletPoint}>• Avoid direct contact with grain or moisture</Text>
          </View>
          <Text style={styles.subSectionTitle}>4. Sealing</Text>
          <Text style={styles.sectionText}>
            Seal cover on floor using sand snakes. Ensure tight seal, no holes or loose areas.
          </Text>
          <Text style={styles.subSectionTitle}>5. Monitoring</Text>
          <Text style={styles.sectionText}>
            Check gas leakage using detector. Monitor phosphine concentration using gas monitor at top, middle, and front.
          </Text>
          <Text style={styles.subSectionTitle}>6. Aeration</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Remove seals after exposure period</Text>
            <Text style={styles.bulletPoint}>• Ventilate for 24-48 hours</Text>
            <Text style={styles.bulletPoint}>• Use phosphine detector to confirm safe levels</Text>
          </View>
          <Text style={styles.subSectionTitle}>7. Post-Fumigation</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Inspect for pest mortality</Text>
            <Text style={styles.bulletPoint}>• Dispose ALP residues safely</Text>
            <Text style={styles.bulletPoint}>• Document dosage, time, results</Text>
          </View>
          <View style={styles.warningBox}>
            <Text style={styles.warningText}>
              Note: Operation must be supervised by accredited fumigation operator under NSPM 22
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Shed Fumigation Steps</Text>
          </View>
          <Text style={styles.subSectionTitle}>1. Preparation</Text>
          <Text style={styles.sectionText}>Clear shed, seal cracks/gaps with mud, tape, or plastic</Text>
          <Text style={styles.subSectionTitle}>2. Dosage</Text>
          <Text style={styles.sectionText}>Measure cubic capacity, apply 3g ALP per cubic meter</Text>
          <Text style={styles.subSectionTitle}>3. Placement & Sealing</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Distribute tablets evenly in perforated containers</Text>
            <Text style={styles.bulletPoint}>• Seal doors, windows, vents with plastic/tape</Text>
            <Text style={styles.bulletPoint}>• Maintain for 7 days</Text>
          </View>
          <Text style={styles.subSectionTitle}>4. Aeration & Checks</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Open shed completely, ventilate 24-48 hours</Text>
            <Text style={styles.bulletPoint}>• Monitor gas levels before re-entry</Text>
            <Text style={styles.bulletPoint}>• Check pest mortality, dispose residues safely</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Safety Precautions</Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Keep ALP away from moisture/damp surfaces</Text>
            <Text style={styles.bulletPoint}>• Aerate 24-48 hours before re-entry</Text>
            <Text style={styles.bulletPoint}>• Only certified personnel should fumigate</Text>
            <Text style={styles.bulletPoint}>• Always use gloves, masks, protective clothing</Text>
            <Text style={styles.bulletPoint}>• Never enter during fumigation</Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Alert Signals</Text>
          </View>
          <Text style={styles.sectionText}>
            Display warning placards at all entrances stating:{'\n'}"DANGER – FUMIGATION IN PROGRESS"{'\n'}"DO NOT ENTER"
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
    backgroundColor: '#ffffff',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  headerDescription: {
    fontSize: 14,
    color: '#64748B',
  },
  content: {
    padding: 16,
  },
  warningBox: {
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#F59E0B',
    marginBottom: 16,
  },
  warningText: {
    fontSize: 14,
    color: '#92400E',
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginTop: 12,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
  },
  bulletContainer: {
    marginTop: 8,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 24,
    paddingLeft: 8,
  },
});
