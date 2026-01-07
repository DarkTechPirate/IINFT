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

type KnowledgeHubScreenNavigationProp = StackNavigationProp<RootStackParamList, 'KnowledgeHub'>;

interface Props {
  navigation: KnowledgeHubScreenNavigationProp;
}

export default function KnowledgeHubScreen({ navigation }: Props) {
  const knowledgeItems = [
    {
      id: 1,
      title: 'Storage Insects',
      icon: '🐞',
      description: 'Primary and secondary storage insects',
      screen: 'StorageInsects' as const,
    },
    {
      id: 2,
      title: 'Sources of Infestation',
      icon: '📍',
      description: 'Common sources and entry points',
      screen: 'SourcesOfInfestation' as const,
    },
    {
      id: 3,
      title: 'Methods of Detection',
      icon: '🔍',
      description: 'Detection and monitoring techniques',
      screen: 'MethodsOfDetection' as const,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Knowledge Hub</Text>
        <Text style={styles.headerDescription}>
          Learn about storage insects, their sources, and detection methods
        </Text>
      </View>

      <View style={styles.content}>
        {knowledgeItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={styles.cardIcon}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
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
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  iconText: {
    fontSize: 28,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#64748B',
  },
  arrow: {
    fontSize: 24,
    color: '#3B82F6',
    fontWeight: 'bold',
  },
});
