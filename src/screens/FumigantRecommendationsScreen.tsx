import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function FumigantRecommendationsScreen() {
  const [showModal, setShowModal] = useState(true);
  const [showMalathionModal, setShowMalathionModal] = useState(false);
  const [grainQuantity, setGrainQuantity] = useState('');
  const [result, setResult] = useState<{ grams: string; tablets: string } | null>(null);
  
  // Malathion calculator states
  const [stackLength, setStackLength] = useState('');
  const [stackBreadth, setStackBreadth] = useState('');
  const [stackHeight, setStackHeight] = useState('');
  const [numberOfStacks, setNumberOfStacks] = useState('');
  const [malathionResult, setMalathionResult] = useState<{ surfaceArea: string; malathion: string } | null>(null);

  const calculateDosage = () => {
    const quantity = parseFloat(grainQuantity);
    if (isNaN(quantity) || quantity <= 0) {
      return;
    }
    
    // Quantity (grams) of phosphine tablets = 0.009 × Grain weight (kg)
    const grams = (0.009 * quantity).toFixed(3);
    // No. of tablets required = 0.003 × Grain weight (kg)
    const tablets = (0.003 * quantity).toFixed(3);
    
    setResult({ grams, tablets });
  };

  const calculateMalathion = () => {
    const L = parseFloat(stackLength);
    const B = parseFloat(stackBreadth);
    const H = parseFloat(stackHeight);
    const stacks = parseFloat(numberOfStacks);
    
    if (isNaN(L) || isNaN(B) || isNaN(H) || isNaN(stacks) || L <= 0 || B <= 0 || H <= 0 || stacks <= 0) {
      return;
    }
    
    // Show Malathion guidelines modal on first calculation
    if (!malathionResult) {
      setShowMalathionModal(true);
    }
    
    // Total surface Area = ((L*B + 2(L*H) + 2(B*H)) ÷ 10.763) * number of stacks
    const surfaceArea = ((L * B + 2 * (L * H) + 2 * (B * H)) / 10.763) * stacks;
    
    // Quantity of Malathion required = Total surface Area * 0.3
    const malathion = surfaceArea * 0.3;
    
    setMalathionResult({
      surfaceArea: surfaceArea.toFixed(3),
      malathion: malathion.toFixed(3)
    });
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalTitle}>Fumigation Guidelines</Text>
              <Text style={styles.modalText}>
                Fumigation is a controlled treatment used to eliminate insects inside stored grains.
              </Text>
              <Text style={styles.modalText}>
                In this method, a fumigant such as aluminium phosphide is applied, which releases phosphine gas (PH₃). This gas penetrates deep inside grain masses and kills all life stages of insects such as eggs, larvae, pupae, and adults.
              </Text>

              <Text style={styles.modalSubtitle}>When Should You Use Fumigation?</Text>
              <Text style={styles.modalBullet}>• When internal infestation is suspected</Text>
              <Text style={styles.modalBullet}>• When live insects are detected by monitoring traps or cameras</Text>
              <Text style={styles.modalBullet}>• When grain stores are sealed and airtight</Text>
              <Text style={styles.modalBullet}>• For bulk storage in godowns, silos, warehouses, and bags under cover</Text>

              <Text style={styles.modalSubtitle}>Important Safety Guidelines</Text>
              <Text style={styles.modalBullet}>• Use fumigation only in airtight enclosures</Text>
              <Text style={styles.modalBullet}>• Never enter a fumigated area without proper ventilation</Text>
              <Text style={styles.modalBullet}>• Do not inhale or directly touch the tablets</Text>
              <Text style={styles.modalBullet}>• Keep tablets away from children, food, and water sources</Text>
              <Text style={styles.modalBullet}>• Only trained or authorized personnel should handle fumigants</Text>
              <Text style={styles.modalBullet}>• After treatment, ensure proper aeration before opening the storage</Text>

              <Text style={styles.modalSubtitle}>Exposure Period</Text>
              <Text style={styles.modalBullet}>• Recommended fumigation duration: 5–7 days</Text>
              <Text style={styles.modalBullet}>• Aerate for 24–48 hours before handling grain</Text>

              <TouchableOpacity
                style={styles.goToCalculatorButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.goToCalculatorText}>Go to Calculator</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Malathion Guidelines Modal */}
      <Modal
        visible={showMalathionModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowMalathionModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowMalathionModal(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.modalTitle}>Malathion Treatment Guidelines</Text>
              <Text style={styles.modalText}>
                Malathion is a contact insecticide used to control external insect infestation in stored grains and storage structures. Unlike phosphine fumigation, Malathion does not release gas or penetrate grain kernels. Instead, it kills insects that come in direct contact with the sprayed or dusted surface.
              </Text>

              <Text style={styles.modalSubtitle}>When Should You Use Malathion?</Text>
              <Text style={styles.modalBullet}>• For surface infestations or crawling insects seen outside grain bags</Text>
              <Text style={styles.modalBullet}>• For field-to-storage transition treatment to prevent initial infestation</Text>
              <Text style={styles.modalBullet}>• For warehouse structure spraying before grain arrival</Text>
              <Text style={styles.modalBullet}>• For routine preventive treatment in godowns, silos, and storage rooms</Text>

              <Text style={styles.modalSubtitle}>Important Safety Guidelines</Text>
              <Text style={styles.modalBullet}>• Do not spray directly on consumable grains intended for immediate milling or cooking</Text>
              <Text style={styles.modalBullet}>• Use only for external surfaces, floors, walls, and around stacks</Text>
              <Text style={styles.modalBullet}>• Wear gloves and a mask during mixing and spraying</Text>
              <Text style={styles.modalBullet}>• Do not mix with other pesticides unless recommended</Text>
              <Text style={styles.modalBullet}>• Store Malathion away from food, feed, and children</Text>
              <Text style={styles.modalBullet}>• Avoid treatment in occupied residential environments</Text>

              <Text style={styles.modalSubtitle}>Re-entry and Handling</Text>
              <Text style={styles.modalBullet}>• Allow 6–8 hours drying time after spraying</Text>
              <Text style={styles.modalBullet}>• Do not stack grain until surfaces are fully dry</Text>
              <Text style={styles.modalBullet}>• Recommended treatment interval: once every 45–60 days, based on monitoring results</Text>

              <TouchableOpacity
                style={styles.goToCalculatorButton}
                onPress={() => setShowMalathionModal(false)}
              >
                <Text style={styles.goToCalculatorText}>Continue to Calculator</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      <ScrollView style={styles.mainContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Fumigant Calculator</Text>
          <Text style={styles.headerDescription}>
            Calculate phosphine dosage for grain fumigation
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.calculatorCard}>
            <Text style={styles.cardTitle}>Enter Grain Quantity</Text>
            <Text style={styles.cardSubtitle}>Enter the quantity in kilograms (kg)</Text>
            
            <TextInput
              style={styles.input}
              placeholder="e.g., 5000"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={grainQuantity}
              onChangeText={setGrainQuantity}
            />

            <TouchableOpacity
              style={styles.calculateButton}
              onPress={calculateDosage}
            >
              <Text style={styles.calculateButtonText}>Calculate</Text>
            </TouchableOpacity>

            {result && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Dosage Required:</Text>
                
                <View style={styles.resultCard}>
                  <Text style={styles.resultLabel}>Quantity of Phosphine Tablets</Text>
                  <Text style={styles.resultValue}>{result.grams} grams</Text>
                </View>

                <View style={styles.resultCard}>
                  <Text style={styles.resultLabel}>Number of Tablets Required</Text>
                  <Text style={styles.resultValue}>{result.tablets} tablets</Text>
                </View>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.viewGuidelinesButton}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.viewGuidelinesText}>📋 View Fumigation Guidelines</Text>
          </TouchableOpacity>

          {/* Malathion Calculator */}
          <View style={[styles.calculatorCard, { marginTop: 24 }]}>
            <Text style={styles.cardTitle}>Malathion Calculator</Text>
            <Text style={styles.cardSubtitle}>Calculate quantity of Malathion required for stack treatment</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Enter the length of the stack (in feet)</Text>
              <TextInput
                style={styles.input}
                placeholder="Length (ft)"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={stackLength}
                onChangeText={setStackLength}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Enter the breadth of the stack (in feet)</Text>
              <TextInput
                style={styles.input}
                placeholder="Breadth (ft)"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={stackBreadth}
                onChangeText={setStackBreadth}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Enter the height of the stack (in feet)</Text>
              <TextInput
                style={styles.input}
                placeholder="Height (ft)"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={stackHeight}
                onChangeText={setStackHeight}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Enter the number of stacks</Text>
              <TextInput
                style={styles.input}
                placeholder="Number of stacks"
                placeholderTextColor="#94A3B8"
                keyboardType="numeric"
                value={numberOfStacks}
                onChangeText={setNumberOfStacks}
              />
            </View>

            <TouchableOpacity
              style={styles.calculateButton}
              onPress={calculateMalathion}
            >
              <Text style={styles.calculateButtonText}>Calculate Malathion</Text>
            </TouchableOpacity>

            {malathionResult && (
              <View style={styles.resultContainer}>
                <Text style={styles.resultTitle}>Results:</Text>

                <View style={styles.resultCard}>
                  <Text style={styles.resultLabel}>Total Surface Area</Text>
                  <Text style={styles.resultValue}>{malathionResult.surfaceArea} sq ft</Text>
                </View>

                <View style={[styles.resultCard, styles.highlightCard]}>
                  <Text style={styles.resultLabel}>Quantity of Malathion Required</Text>
                  <Text style={styles.resultValue}>{malathionResult.malathion} liters</Text>
                </View>

                <TouchableOpacity
                  style={styles.viewGuidelinesButton}
                  onPress={() => setShowMalathionModal(true)}
                >
                  <Text style={styles.viewGuidelinesText}>📋 View Malathion Guidelines</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  mainContent: {
    flex: 1,
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
  calculatorCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#1E293B',
    marginBottom: 16,
  },
  calculateButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  calculateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 8,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  resultCard: {
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  resultLabel: {
    fontSize: 14,
    color: '#1E40AF',
    marginBottom: 6,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  viewGuidelinesButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3B82F6',
  },
  viewGuidelinesText: {
    color: '#3B82F6',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    maxHeight: '85%',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 18,
    color: '#64748B',
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 16,
    marginTop: 8,
  },
  modalSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 20,
    marginBottom: 12,
  },
  modalText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
    marginBottom: 12,
  },
  modalBullet: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 24,
    paddingLeft: 8,
    marginBottom: 4,
  },
  goToCalculatorButton: {
    backgroundColor: '#10B981',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  goToCalculatorText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  highlightCard: {
    backgroundColor: '#DCFCE7',
    borderWidth: 2,
    borderColor: '#10B981',
  },
  inputGroup: {
    marginBottom: 4,
  },
  inputLabel: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 8,
  },
});
