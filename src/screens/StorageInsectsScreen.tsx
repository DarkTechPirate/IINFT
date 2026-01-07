import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type StorageInsectsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'StorageInsects'
>;

interface Props {
  navigation: StorageInsectsScreenNavigationProp;
}

export default function StorageInsectsScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Storage Insects</Text>
        <Text style={styles.headerDescription}>
          Two main categories of insects that affect stored grains
        </Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.card, styles.primaryCard]}
          onPress={() => navigation.navigate('PrimaryInsectsList')}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Text style={styles.iconText}>🦗</Text>
            </View>
            <Text style={styles.cardTitle}>Primary Insects</Text>
          </View>
          <Text style={styles.cardDescription}>
            Insects that can attack whole, sound grains. They bore into kernels
            and develop inside them. Most damaging to stored grains.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.viewButton}>View List ›</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, styles.secondaryCard]}
          onPress={() => navigation.navigate('SecondaryInsectsList')}
        >
          <View style={styles.cardHeader}>
            <View style={styles.cardIcon}>
              <Text style={styles.iconText}>🐜</Text>
            </View>
            <Text style={styles.cardTitle}>Secondary Insects</Text>
          </View>
          <Text style={styles.cardDescription}>
            Insects that cannot attack whole grains. They feed on broken,
            damaged kernels, grain dust, and moldy products.
          </Text>
          <View style={styles.cardFooter}>
            <Text style={styles.viewButton}>View List ›</Text>
          </View>
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
    padding: 24,
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
  primaryCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#D32F2F',
  },
  secondaryCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  cardDescription: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
  },
  cardFooter: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  viewButton: {
    fontSize: 16,
    color: '#3B82F6',
    fontWeight: '600',
  },
});
