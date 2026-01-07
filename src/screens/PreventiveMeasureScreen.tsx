import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function PreventiveMeasureScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Preventive Measure</Text>
        <Text style={styles.headerDescription}>
          It aims to manage stored pests focus on minimizing pest infestation before it begins, to ensure the grain quality and to reduce economic losses.
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Store House Hygiene and Sanitation</Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • It is important to clean the entire store or warehouse before loading the food grains to prevent the cross contamination from old residues, dust, and pest eggs
            </Text>
            <Text style={styles.bulletPoint}>
              • Remove foreign materials such as plant debris, husks, straw, chaff and inert materials such as sand, stones, mud balls, soil particles and broken grains that attract pests
            </Text>
            <Text style={styles.bulletPoint}>
              • White wash the walls, clean the floors, and ceilings using recommended insecticides to eliminate pests
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Detection and Monitoring of Stored Pests</Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Regular inspection of food grains at weekly intervals to check the activity of the pests
            </Text>
            <Text style={styles.bulletPoint}>
              • Use of traps to monitor the pests and flying insects
            </Text>
            <Text style={styles.bulletPoint}>
              • Remove spilled grains to avoid attracting pests
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Grain Aeration and Proper Grain Handling Methods</Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Grain aeration helps to prevent insect infestations by lowering the grain temperature, which slows the insect development and reproduction
            </Text>
            <Text style={styles.bulletPoint}>
              • It prevents creation of hotspots by avoiding warm, moist pockets in the storage area that attract insects and promotes mould growth
            </Text>
            <Text style={styles.bulletPoint}>
              • It controls moisture migration by stabilizing temperature and it reduces condensation and moisture build-up
            </Text>
            <Text style={styles.bulletPoint}>
              • Aeration is a safe, chemical-free method that aligns with Integrated Pest Management (IPM) strategies
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Drying of Grains</Text>
          </View>
          <Text style={styles.sectionText}>
            Drying of grains reduces the moisture content to a safe level for storage, which helps to prevent spoilage, mould growth, and insect infestation. Dry the grains to safe moisture levels (10–12%) before storage to prevent insect and fungal infestation.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Maintenance of Storage Structure</Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Seal the cracks and crevices of the walls and floors to prevent pest entry
            </Text>
            <Text style={styles.bulletPoint}>
              • Install mesh screens on windows and ventilators to prevent the entry of flying insects and rodents
            </Text>
            <Text style={styles.bulletPoint}>
              • Use rodent-proof storage structure / containers to prevent contamination
            </Text>
            <Text style={styles.bulletPoint}>
              • Repair any damaged insulation or ventilation systems that could harbour pests
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Stacking and Handling Practices</Text>
          </View>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>
              • Stacking should be carried out on wooden dunnage at least 0.5 meters from walls. It helps to provide proper aeration and prevents moisture migration from the floor
            </Text>
            <Text style={styles.bulletPoint}>
              • Limit the stack height to 15 bags and maintain 2–3 meters spacing between rows for ventilation and inspection
            </Text>
            <Text style={styles.bulletPoint}>
              • Avoid using hooks on bags to prevent tearing and exposure
            </Text>
          </View>
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
  bulletContainer: {
    marginTop: 8,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 24,
    paddingLeft: 8,
  },
  sectionText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
  },
});
