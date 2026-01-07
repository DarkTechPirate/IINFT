import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

interface DetectionMethod {
  id: number;
  title: string;
  content: string[];
}

const detectionMethods: DetectionMethod[] = [
  {
    id: 1,
    title: 'Visual Examination',
    content: [
      '• This is the preliminary method used to inspect grain samples for visible signs of infestation.',
      '• Damaged or discoloured grains lose their natural lustre and appear dull. Sometimes presence of eggs can be seen on the grain surface especially in case of pulses. Black gram and green gram eggs can be prominently seen on the surface of the grains.',
      '• Grains can be analysed for the presence of insects through damage by holes or broken grains.',
      '• Internal infestation can be seen by cutting open the grains for the presence of various stages of insects such as egg, larva, pupa and adults.',
    ],
  },
  {
    id: 2,
    title: 'Sieving and Microscopic Examination',
    content: [
      'Grains are passed through mesh screens usually (2 mm sieve) for most of the insects that separates adult insects, larvae and eggs except pulse beetle, Khapra beetle and tamarind beetle. In case of whole pulses use 3 mm sieve. Observe the residues under microscope for the examination of egg stages of the insect.',
    ],
  },
  {
    id: 3,
    title: 'Damage and Emergence Hole Inspection',
    content: [
      '• This method provides a quick estimate of deterioration by identifying germ‑eaten kernels and insect emergence holes.',
      '• It does not reveal internal damage hidden within the grain.',
      '• A 100 g sample is spread on a glass plate, and damaged kernels (with holes by borers) are manually picked and the percentage of insect‑damaged grains can be calculated.',
    ],
  },
  {
    id: 4,
    title: 'Monitoring Insects Through Insect Traps',
    content: [
      '• Insect traps developed by Tamil Nadu Agricultural University (TNAU) can be used for detecting and monitoring stored pests.',
      '• Probe trap, stack probe trap and indicator devices can be used to monitor the stored pests.',
      '• UV light traps can attract the flying insects present in and around the warehouses during night time.',
    ],
  },
  {
    id: 5,
    title: 'Acid Fuchsin Staining Method',
    content: [
      '• In this method, grain samples are first soaked in warm water for about 5 minutes to soften the outer surface.',
      '• The soaked grains are then immersed in an acid fuchsin dye solution prepared by mixing 50 ml of glacial acetic acid, 950 ml of distilled water, and 0.5 g of acid fuchsin.',
      '• Samples are kept in the stain for 2–5 minutes, after which excess dye is removed by washing under tap water.',
      '• When the grains are examined under a microscope, egg plugs appear bright cherry red, allowing clear identification of hidden eggs.',
      '• Feeding punctures and mechanical injuries take on a light pink coloration, helping distinguish between insect damage and physical cracks.',
    ],
  },
  {
    id: 6,
    title: 'Gentian Violet Staining Method',
    content: [
      '• An aqueous stock solution of gentian violet 1% is prepared by dissolving the dye in 50 ml of 95% ethanol.',
      '• Grain samples are immersed in this staining solution for about two minutes to allow the dye to penetrate the outer layers.',
      '• After staining, the grains are examined under a microscope to detect hidden infestation.',
      '• Egg plugs appear as distinct purple‑coloured spots, which helps to differentiate insect eggs from normal grain surface features.',
    ],
  },
  {
    id: 7,
    title: 'Gelatinization Method',
    content: [
      '• In this technique, grain samples are boiled for about ten minutes in a 10% sodium hydroxide (NaOH) solution.',
      '• The alkaline treatment softens the grain structure and makes the kernels translucent.',
      '• Once translucent, any internal infestation such as hidden larvae, feeding tunnels, or egg plugs becomes clearly visible through the grain.',
      '• This method is especially useful for detecting internal feeders that cannot be identified through external examination.',
    ],
  },
  {
    id: 8,
    title: 'Cracking–Flotation Method',
    content: [
      '• In this method, cleaned grains are coarsely ground to break the kernels and release any internal insects or larvae.',
      '• The ground sample is then soaked in a water–alcohol mixture or boiling water to loosen the insect bodies from the grain fragments.',
      '• After soaking, the mixture is combined with gasoline or mineral oil, which forms an upper oil layer in the container.',
      '• Insect bodies, being lighter and hydrophobic, float to the oil layer while grain particles settle below.',
      '• The floating insects are collected onto filter paper, dried, and counted to estimate internal infestation levels.',
    ],
  },
  {
    id: 9,
    title: 'Ninhydrin Colour Reaction Method',
    content: [
      '• This method uses ninhydrin‑impregnated filter paper (0.7% solution in acetone) as a chemical indicator to detect hidden insect infestation.',
      '• When wheat kernels containing insects are crushed onto the treated paper, the insect body fluids react with ninhydrin and produce a distinct purple or violet stain.',
      '• The method is highly sensitive and can detect even small quantities of insect contamination.',
      '• It is specifically suitable for mechanized detection, and a specialized device called the "Ashman Simon Hidden Infestation Detector" automates this process by crushing kernels along a treated paper strip for rapid visual detection.',
    ],
  },
];

const MethodsOfDetectionScreen: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.title}>Methods of Detection</Text>
      <Text style={styles.subtitle}>Tap on a method to view details</Text>

      {detectionMethods.map((method) => (
        <View key={method.id} style={styles.methodCard}>
          <TouchableOpacity
            style={styles.methodButton}
            onPress={() => toggleExpand(method.id)}
            activeOpacity={0.7}
          >
            <View style={styles.methodHeader}>
              <View style={styles.numberBadge}>
                <Text style={styles.numberText}>{method.id}</Text>
              </View>
              <Text style={styles.methodTitle}>{method.title}</Text>
            </View>
            <Text style={styles.expandIcon}>
              {expandedId === method.id ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {expandedId === method.id && (
            <View style={styles.contentContainer}>
              {method.content.map((text, index) => (
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
  methodCard: {
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
  methodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  numberBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  numberText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  methodTitle: {
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
    backgroundColor: '#F8FAFC',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  contentText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 8,
  },
});

export default MethodsOfDetectionScreen;
