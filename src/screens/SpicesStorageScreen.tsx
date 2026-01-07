import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

const SpicesStorageScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Spices Storage Guidelines</Text>
      
      <View style={styles.introBox}>
        <Text style={styles.introTitle}>Guidelines Overview</Text>
        <Text style={styles.introText}>
          The guidelines on the quality, handling, grading, and analysis of spices were developed based on authoritative sources including the Spices Board India Guidelines on Quality Improvement, FSSAI (Food Safety and Standards Authority of India) regulatory standards, and relevant amendments to the FSS (Food Products Standards) Regulations, 2011 and referred Warehousing (Development & Regulation) Act, 2007. Thus, all the information provided here reflects the standard guidelines prescribed by competent authorities for maintaining spice quality and safety across the value chain from harvesting and processing to storage, analysis, and export.
        </Text>
      </View>

      {/* Section 1 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>1</Text>
          </View>
          <Text style={styles.guidelineTitle}>General Description</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.guidelinePoint}>
            Spices are dried aromatic plant parts used to impart flavour, colour, and aroma. According to the Spices Board India, spices must be clean, dried, mature, free from contaminants, extraneous matter, mould, insects, and adulterants, and must meet national/international quality standards.
          </Text>
        </View>
      </View>

      {/* Section 2 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>2</Text>
          </View>
          <Text style={styles.guidelineTitle}>Quality Improvement Guidelines</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.sectionSubtitle}>A. Pre-Processing Level</Text>
          <Text style={styles.guidelinePoint}>• Harvest at full physiological maturity</Text>
          <Text style={styles.guidelinePoint}>• Dry immediately after harvesting</Text>
          <Text style={styles.guidelinePoint}>• Maintain hygienic drying platforms</Text>
          <Text style={styles.guidelinePoint}>• Avoid drying spices on soil to prevent contamination</Text>
          <Text style={styles.guidelinePoint}>• Maintain moisture content as per recommended limits</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>B. Processing Level</Text>
          <Text style={styles.guidelinePoint}>• Use clean water for washing</Text>
          <Text style={styles.guidelinePoint}>• Avoid metal contamination from machinery</Text>
          <Text style={styles.guidelinePoint}>• Remove defective, mouldy, damaged units</Text>
          <Text style={styles.guidelinePoint}>• Maintain good manufacturing practices (GMP)</Text>
          <Text style={styles.guidelinePoint}>• Ensure proper grinding conditions to avoid overheating in powdered spices</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>C. Storage & Handling</Text>
          <Text style={styles.guidelinePoint}>• Store in dry, clean, ventilated rooms</Text>
          <Text style={styles.guidelinePoint}>• Use food-grade bags (jute bags lined with polyethylene or HDPE bags)</Text>
          <Text style={styles.guidelinePoint}>• Avoid direct floor contact (use pallets)</Text>
          <Text style={styles.guidelinePoint}>• Avoid mixing old and new stock</Text>
          <Text style={styles.guidelinePoint}>• Ensure stack height is safe and does not crush spices</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>D. Export-Level Standards</Text>
          <Text style={styles.guidelinePoint}>Ensure compliance with:</Text>
          <Text style={styles.guidelinePoint}>  • ISO standards</Text>
          <Text style={styles.guidelinePoint}>  • ESA (European Spice Association)</Text>
          <Text style={styles.guidelinePoint}>  • FSSAI standards</Text>
          <Text style={styles.guidelinePoint}>• Control aflatoxin, microbial load, and foreign matter</Text>
        </View>
      </View>

      {/* Section 3 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>3</Text>
          </View>
          <Text style={styles.guidelineTitle}>Definitions of Refractions</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Whole Spices:</Text> Unbroken dried seeds, pods, bark, roots, or fruits.</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Ground Spices:</Text> Powdered forms (turmeric, chilli, coriander powder).</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Extraneous Vegetable Matter (EVM):</Text> Non-harmful plant parts NOT belonging to the spice itself (e.g., stalks, stems, leaves, chaff).</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Foreign Matter:</Text> Non-edible contaminants including stones, sand, soil, metal pieces, dead insects, plastic or paper pieces.</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Defective / Damaged Units:</Text> Mouldy, immature, discoloured, insect-bitten, shrivelled.</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Light Berries / Immature Seeds:</Text> Underdeveloped or lightweight units (common in pepper, coriander).</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Volatile Oil Content:</Text> Essential oil component responsible for flavour and aroma; Spices Board and FSSAI specify minimum values.</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Aflatoxin Levels:</Text> Highly regulated in chilli, nutmeg, turmeric.</Text>
        </View>
      </View>

      {/* Section 4 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>4</Text>
          </View>
          <Text style={styles.guidelineTitle}>Moisture Content Requirements</Text>
        </View>
        <View style={styles.guidelineContent}>
          <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeaderCell}>Category</Text>
              <Text style={styles.tableHeaderCell}>Safe Moisture Level</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Whole spices</Text>
              <Text style={styles.tableCell}>≤ 10–12%</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Ground spices</Text>
              <Text style={styles.tableCell}>≤ 8–10%</Text>
            </View>
            <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.tableCell}>High oil spices</Text>
              <Text style={styles.tableCell}>≤ 7–8%</Text>
            </View>
          </View>
          <Text style={[styles.guidelinePoint, { marginTop: 12, fontStyle: 'italic' }]}>
            Excess moisture leads to mould, aflatoxin, insect attack, and caking.
          </Text>
        </View>
      </View>

      {/* Section 5 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>5</Text>
          </View>
          <Text style={styles.guidelineTitle}>Stack Height</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.guidelinePoint}>Spices should be stored in stacks not exceeding:</Text>
          <Text style={styles.guidelinePoint}>• Whole spices (chillies) in bag – in layers: 3-4 and in Meters: 2.4 - 3</Text>
          <Text style={styles.guidelinePoint}>• Whole spices – in layers: 15 and in Meters: 4 - 4.3</Text>
          <Text style={styles.guidelinePoint}>
            Adequate ventilation must be maintained to avoid heating, and stacks should not touch walls to prevent moisture migration.
          </Text>
        </View>
      </View>

      {/* Section 6 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>6</Text>
          </View>
          <Text style={styles.guidelineTitle}>Dunnage</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.guidelinePoint}>To prevent moisture absorption:</Text>
          <Text style={styles.guidelinePoint}>• Wooden pallets</Text>
          <Text style={styles.guidelinePoint}>• Bamboo mats</Text>
          <Text style={styles.guidelinePoint}>• Polythene-lined platforms</Text>
          <Text style={styles.guidelinePoint}>• Keep 15–20 cm above floor</Text>
        </View>
      </View>

      {/* Section 7 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>7</Text>
          </View>
          <Text style={styles.guidelineTitle}>Sampling Procedure</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.sectionSubtitle}>Composite Sampling</Text>
          <Text style={styles.guidelinePoint}>• Draw samples from top, middle and bottom bags</Text>
          <Text style={styles.guidelinePoint}>• Combine to form 2.5 kg composite sample</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>Working Sample</Text>
          <Text style={styles.guidelinePoint}>• Whole spices: 250 g</Text>
          <Text style={styles.guidelinePoint}>• Powdered spices: 50 g</Text>
        </View>
      </View>

      {/* Section 8 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>8</Text>
          </View>
          <Text style={styles.guidelineTitle}>Analysis Procedure</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.sectionSubtitle}>A. Foreign Matter</Text>
          <Text style={styles.guidelinePoint}>• Pass sample through sieves</Text>
          <Text style={styles.guidelinePoint}>• Separate stones, dust, extraneous objects</Text>
          <Text style={styles.guidelinePoint}>• Weigh and calculate %</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>B. Extraneous Vegetable Matter (EVM)</Text>
          <Text style={styles.guidelinePoint}>• Remove stalks, stems, leaves</Text>
          <Text style={styles.guidelinePoint}>• Determine % by weight</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>C. Defective Units</Text>
          <Text style={styles.guidelinePoint}>Separate and weigh:</Text>
          <Text style={styles.guidelinePoint}>  • Mouldy</Text>
          <Text style={styles.guidelinePoint}>  • Shrivelled</Text>
          <Text style={styles.guidelinePoint}>  • Damaged</Text>
          <Text style={styles.guidelinePoint}>  • Immature</Text>
          <Text style={styles.guidelinePoint}>  • Insect-damaged</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>D. Chemical Quality Tests</Text>
          <Text style={styles.guidelinePoint}>Depending on spice:</Text>
          <Text style={styles.guidelinePoint}>  • Volatile Oil: e.g., clove, cinnamon</Text>
          <Text style={styles.guidelinePoint}>  • Curcumin %: turmeric</Text>
          <Text style={styles.guidelinePoint}>  • Capsaicin %: chilli</Text>
          <Text style={styles.guidelinePoint}>  • Piperine %: pepper</Text>
          <Text style={styles.guidelinePoint}>  • Aflatoxin: chilli, turmeric, nutmeg</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>E. Adulteration Detection</Text>
          <Text style={styles.guidelinePoint}>• Sudan dyes (chilli)</Text>
          <Text style={styles.guidelinePoint}>• Metanil yellow (turmeric)</Text>
          <Text style={styles.guidelinePoint}>• Papaya seeds (pepper)</Text>
          <Text style={styles.guidelinePoint}>• Argemone seeds (mustard)</Text>
          <Text style={styles.guidelinePoint}>• Starch / talc (powdered spices)</Text>
        </View>
      </View>

      {/* Section 9 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>9</Text>
          </View>
          <Text style={styles.guidelineTitle}>Grading / Categorization of Spices</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.guidelinePoint}>Spices Board India recommends grading based on:</Text>
          <Text style={styles.guidelinePoint}>• Foreign matter</Text>
          <Text style={styles.guidelinePoint}>• EVM content</Text>
          <Text style={styles.guidelinePoint}>• Damaged units</Text>
          <Text style={styles.guidelinePoint}>• Volatile oil percentage</Text>
          <Text style={styles.guidelinePoint}>• Aroma, colour, flavour</Text>
          <Text style={styles.guidelinePoint}>• Extraneous matter</Text>
          <Text style={styles.guidelinePoint}>• Purity (for powders)</Text>
          
          <View style={[styles.tableContainer, { marginTop: 12 }]}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeaderCell}>Grade</Text>
              <Text style={styles.tableHeaderCell}>Description</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>A – Premium</Text>
              <Text style={styles.tableCell}>Highest volatile oil, minimal defects</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>B – Standard</Text>
              <Text style={styles.tableCell}>Acceptable EVM & defects, good aroma</Text>
            </View>
            <View style={[styles.tableRow, { borderBottomWidth: 0 }]}>
              <Text style={styles.tableCell}>C – Commercial</Text>
              <Text style={styles.tableCell}>Lower aroma, higher defects</Text>
            </View>
          </View>
          
          <Text style={[styles.guidelinePoint, { marginTop: 12 }]}>Special grades:</Text>
          <Text style={styles.guidelinePoint}>• ASTA (American Spice Trade Association)</Text>
          <Text style={styles.guidelinePoint}>• ESA (European Spice Association)</Text>
        </View>
      </View>

      {/* Section 10 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>10</Text>
          </View>
          <Text style={styles.guidelineTitle}>Storage Pests in Spices</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.guidelinePoint}>Major pests:</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Lasioderma serricorne</Text> – Cigarette beetle (major pest of spices)</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Tribolium castaneum</Text> – Red flour beetle</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Plodia interpunctella</Text> – Indian meal moth</Text>
          <Text style={styles.guidelinePoint}>• <Text style={styles.boldText}>Sitophilus spp.</Text> – may infest spice blends</Text>
          <Text style={[styles.guidelinePoint, { marginTop: 8, fontStyle: 'italic' }]}>
            Spices rich in oils (clove, nutmeg) are particularly sensitive to insect attack.
          </Text>
        </View>
      </View>

      {/* Section 11 */}
      <View style={styles.guidelineBox}>
        <View style={styles.guidelineHeader}>
          <View style={styles.numberBadge}>
            <Text style={styles.numberText}>11</Text>
          </View>
          <Text style={styles.guidelineTitle}>Special Quality Issues in Spices</Text>
        </View>
        <View style={styles.guidelineContent}>
          <Text style={styles.sectionSubtitle}>Aflatoxin Contamination</Text>
          <Text style={styles.guidelinePoint}>High-risk spices:</Text>
          <Text style={styles.guidelinePoint}>  • Chilli</Text>
          <Text style={styles.guidelinePoint}>  • Nutmeg</Text>
          <Text style={styles.guidelinePoint}>  • Turmeric</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>Pesticide Residues</Text>
          <Text style={styles.guidelinePoint}>Spices Board recommends:</Text>
          <Text style={styles.guidelinePoint}>  • GAP (Good Agricultural Practices)</Text>
          <Text style={styles.guidelinePoint}>  • GMP (Good Manufacturing Practices)</Text>
          <Text style={styles.guidelinePoint}>  • Regular monitoring</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>Loss of Aroma</Text>
          <Text style={styles.guidelinePoint}>Due to:</Text>
          <Text style={styles.guidelinePoint}>  • Sunlight exposure</Text>
          <Text style={styles.guidelinePoint}>  • High temperature</Text>
          <Text style={styles.guidelinePoint}>  • Poor packaging</Text>
          <Text style={styles.guidelinePoint}>  • Long storage</Text>
          
          <Text style={[styles.sectionSubtitle, { marginTop: 12 }]}>Colour Adulteration</Text>
          <Text style={styles.guidelinePoint}>Common in:</Text>
          <Text style={styles.guidelinePoint}>  • Chilli: Sudan dyes</Text>
          <Text style={styles.guidelinePoint}>  • Turmeric: Lead chromate</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF2F2',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 16,
    textAlign: 'center',
  },
  introBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#DC2626',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  introTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#991B1B',
    marginBottom: 8,
  },
  introText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
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
    backgroundColor: '#FEE2E2',
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FECACA',
  },
  numberBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#DC2626',
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
    color: '#991B1B',
  },
  guidelineContent: {
    padding: 16,
  },
  sectionSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#DC2626',
    marginBottom: 6,
  },
  guidelinePoint: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 6,
  },
  boldText: {
    fontWeight: '700',
    color: '#991B1B',
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FEE2E2',
    fontWeight: '700',
    fontSize: 13,
    color: '#991B1B',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    fontSize: 13,
    color: '#374151',
  },
});

export default SpicesStorageScreen;
