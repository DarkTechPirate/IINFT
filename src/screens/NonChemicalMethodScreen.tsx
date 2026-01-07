import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function NonChemicalMethodScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Non Chemical Method</Text>
        <Text style={styles.headerDescription}>
          Physical and biological methods for controlling insect pests
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>CO₂ Fumigation for Organic Commodities</Text>
          </View>
          <Text style={styles.sectionText}>
            CO₂ fumigation is a chemical-free, eco-friendly method for pest control. It's a sustainable post-harvest preservation method for organic commodities. Sealed environment elevates CO₂ and lowers oxygen, causing pest suffocation and mortality. Approved for quarantine and pre-shipment use in India under NSPM-25.
          </Text>
          
          <Text style={styles.subSectionTitle}>Requirements</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Airtight structure (chamber, cocoon, or silo)
            </Text>
            <Text style={styles.bulletPoint}>
              • Food-grade CO₂ gas cylinder
            </Text>
            <Text style={styles.bulletPoint}>
              • CO₂ pressure regulator with flexible pipe
            </Text>
            <Text style={styles.bulletPoint}>
              • CO₂ analyser
            </Text>
            <Text style={styles.bulletPoint}>
              • Pressure relief valve or U-tube manometer
            </Text>
          </View>

          <Text style={styles.subSectionTitle}>CO₂ Treatment in Small Silo</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Examine silo for leaks, seal all openings
            </Text>
            <Text style={styles.bulletPoint}>
              • Carry out pressure test (pressure should halve in more than 3 mins)
            </Text>
            <Text style={styles.bulletPoint}>
              • Turn on CO₂ valve until inlet tube frosts</Text>
            <Text style={styles.bulletPoint}>
              • Continue until 60-80% CO₂ concentration at top
            </Text>
            <Text style={styles.bulletPoint}>
              • Maintain 35% CO₂ for 15 days for effective fumigation
            </Text>
          </View>

          <Text style={styles.subSectionTitle}>CO₂ Treatment in Cocoon</Text>
          <Text style={styles.sectionText}>
            The Cocoon™ is a hermetic storage unit that protects commodities from pests. It creates airtight, moisture-tight environment. CO₂ can be flushed through inlet port at base, displacing air through partially opened zipper at top.
          </Text>
          <Text style={styles.subSectionTitle}>Safe Storage Considerations</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Use clean, dry grains (10-12% moisture)
            </Text>
            <Text style={styles.bulletPoint}>
              • Fill completely, prevent sharp objects
            </Text>
            <Text style={styles.bulletPoint}>
              • Ensure sufficient CO₂ gas supply
            </Text>
            <Text style={styles.bulletPoint}>
              • Monitor O₂ and CO₂ levels
            </Text>
            <Text style={styles.bulletPoint}>
              • Adequate manpower for handling/monitoring
            </Text>
          </View>

          <Text style={styles.subSectionTitle}>Benefits of CO₂ Fumigation</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Eco-friendly and sustainable
            </Text>
            <Text style={styles.bulletPoint}>
              • Effective pest control without chemical residues
            </Text>
            <Text style={styles.bulletPoint}>
              • Preserves product integrity and nutrition
            </Text>
            <Text style={styles.bulletPoint}>
              • Ideal for organic exports
            </Text>
            <Text style={styles.bulletPoint}>
              • Compatible with hermetic storage
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Hermetic Storage of Food Grains</Text>
          </View>
          <Text style={styles.sectionText}>
            Hermetic technology uses gas- and moisture-impermeable materials to enhance shelf life. Provides airtight environment preventing oxygen and moisture entry, protecting from pests, mould, and spoilage. Successful for rice, wheat, maize, pulses, and spices.
          </Text>

          <Text style={styles.subSectionTitle}>Creation of Hermetic Containers</Text>
          <Text style={styles.sectionText}>
            Existing storage can be converted by ensuring proper sealing. Metal drums, plastic barrels, and hermetic bags can be used. Affordable and accessible solution using locally available materials.
          </Text>

          <Text style={styles.subSectionTitle}>Construction Steps</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Use airtight containers (food-grade plastic/metal bins)
            </Text>
            <Text style={styles.bulletPoint}>
              • Inner liner: HDPE or multilayer plastic bags
            </Text>
            <Text style={styles.bulletPoint}>
              • Rubber gasket or silicone sealant for lid
            </Text>
            <Text style={styles.bulletPoint}>
              • Optional: oxygen absorber, moisture absorber
            </Text>
            <Text style={styles.bulletPoint}>
              • Vacuum or heat sealer if using inner liners
            </Text>
          </View>

          <Text style={styles.subSectionTitle}>Hermetic Bags</Text>
          <Text style={styles.sectionText}>
            Made of polyethylene and woven polypropylene. Two layers: inner HDPE (transparent, sealed atmosphere) and outer woven polypropylene (opaque, durability). Affordable alternative to rigid hermetic systems.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Types of Hermetic Storage Systems</Text>
          </View>

          <Text style={styles.subSectionTitle}>1. IRRI Super Bag</Text>
          <Text style={styles.sectionText}>
            Affordable hermetic solution for farmers. Used as liner inside storage bags. Reduces losses and maintains quality by limiting air and moisture movement.
          </Text>
          <Text style={styles.subSectionTitle}>Benefits:</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Extends seed germination 6-12 months
            </Text>
            <Text style={styles.bulletPoint}>
              • Controls insects without chemicals (O₂ drops to 5%)
            </Text>
            <Text style={styles.bulletPoint}>
              • Increases head rice recovery by 10%
            </Text>
          </View>
          <Text style={styles.subSectionTitle}>Usage:</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Dry grains below 12% moisture
            </Text>
            <Text style={styles.bulletPoint}>
              • Place super bag inside conventional bag
            </Text>
            <Text style={styles.bulletPoint}>
              • Fill, remove air, twist and tie securely
            </Text>
            <Text style={styles.bulletPoint}>
              • Check regularly for leaks or insects
            </Text>
          </View>

          <Text style={styles.subSectionTitle}>2. Hermetic Cocoon</Text>
          <Text style={styles.sectionText}>
            Size ranges 1-2,000 tons. PVC container with airtight zipper. Oxygen drops from 21% to below 5% in 10-15 days due to grain and insect respiration.
          </Text>
          <Text style={styles.subSectionTitle}>Safe Storage:</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Clean, dry grain (12% moisture)
            </Text>
            <Text style={styles.bulletPoint}>
              • Seal tightly per manufacturer instructions
            </Text>
            <Text style={styles.bulletPoint}>
              • Monitor O₂ levels daily until stable, then weekly
            </Text>
            <Text style={styles.bulletPoint}>
              • Avoid frequent opening
            </Text>
            <Text style={styles.bulletPoint}>
              • Protect against rodent damage
            </Text>
          </View>

          <Text style={styles.subSectionTitle}>3. Silo Bags</Text>
          <Text style={styles.sectionText}>
            Three polyethylene layers (~250 micron). White outer reflects sunlight, black inner blocks light. 60m long, 3m diameter, up to 200 tonnes capacity. Originally developed in Argentina for grain storage.
          </Text>
          <Text style={styles.subSectionTitle}>Safe Storage:</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Proper ground preparation (level, no sharp objects)
            </Text>
            <Text style={styles.bulletPoint}>
              • Safe moisture: maize ≤15%, soybeans ≤13%, wheat ≤12%
            </Text>
            <Text style={styles.bulletPoint}>
              • Cool grains before bagging if dried with heat
            </Text>
            <Text style={styles.bulletPoint}>
              • Avoid overfilling to prevent rupture
            </Text>
            <Text style={styles.bulletPoint}>
              • Regular CO₂ monitoring
            </Text>
            <Text style={styles.bulletPoint}>
              • Promptly repair punctures with designated sealants
            </Text>
          </View>
          <Text style={styles.subSectionTitle}>Limitations:</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Requires specialized loading/unloading equipment
            </Text>
            <Text style={styles.bulletPoint}>
              • High cost, may need rental
            </Text>
            <Text style={styles.bulletPoint}>
              • Vulnerable to environmental extremes
            </Text>
            <Text style={styles.bulletPoint}>
              • Cannot be aerated
            </Text>
            <Text style={styles.bulletPoint}>
              • Single-use, requires responsible disposal/recycling
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Other Physical Methods</Text>
          </View>
          <Text style={styles.subSectionTitle}>Temperature Control</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Cold treatment: Below 15°C slows development
            </Text>
            <Text style={styles.bulletPoint}>
              • Heat treatment: Above 50°C kills all life stages
            </Text>
          </View>
          <Text style={styles.subSectionTitle}>Moisture Control</Text>
          <Text style={styles.sectionText}>Dry to below 12%, use proper aeration</Text>
          <Text style={styles.subSectionTitle}>Physical Barriers</Text>
          <Text style={styles.sectionText}>Diatomaceous earth, inert dusts damage insect cuticle</Text>
          <Text style={styles.subSectionTitle}>Mechanical Methods</Text>
          <Text style={styles.sectionText}>Regular turning, sieving, cleaning equipment</Text>
          <Text style={styles.subSectionTitle}>Biological Control</Text>
          <Text style={styles.sectionText}>Natural enemies, biopesticides, botanical insecticides</Text>
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
  subSection: {
    marginBottom: 16,
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
