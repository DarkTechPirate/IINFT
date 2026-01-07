import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type CurativeMeasureScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CurativeMeasure'>;

interface Props {
  navigation: CurativeMeasureScreenNavigationProp;
}

export default function CurativeMeasureScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Curative Measure</Text>
        <Text style={styles.headerDescription}>
          Methods to control and eliminate existing insect infestations
        </Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ChemicalMethod')}
          activeOpacity={0.7}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Chemical Method</Text>
            <Text style={styles.cardDescription}>
              Use of chemical insecticides and fumigants for pest control
            </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('NonChemicalMethod')}
          activeOpacity={0.7}
        >
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Non Chemical Method</Text>
            <Text style={styles.cardDescription}>
              Physical and biological methods for controlling insect pests
            </Text>
          </View>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  cardContent: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  arrow: {
    fontSize: 24,
    color: '#3B82F6',
    fontWeight: 'bold',
  },
});
