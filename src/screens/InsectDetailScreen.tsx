import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { Insect } from '../data/insectsData';

const { width } = Dimensions.get('window');

type InsectDetailScreenRouteProp = RouteProp<RootStackParamList, 'InsectDetail'>;

interface Props {
  route: InsectDetailScreenRouteProp;
}

export default function InsectDetailScreen({ route }: Props) {
  const { insect } = route.params;

  const isPrimary = insect.type === 'Primary';

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, isPrimary ? styles.primaryHeader : styles.secondaryHeader]}>
        <View style={styles.badge}>
          <Text style={[styles.badgeText, isPrimary ? styles.primaryBadge : styles.secondaryBadge]}>
            {insect.type.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.headerTitle}>{insect.name}</Text>
        
        {insect.images && insect.images.length > 0 && (
          <View style={styles.imagesContainer}>
            {insect.images.map((img: any, index: number) => (
              <View 
                key={index} 
                style={[
                  styles.imageWrapper,
                  insect.images && insect.images.length === 1 && styles.singleImageWrapper
                ]}
              >
                <Image 
                  source={img} 
                  style={[
                    styles.insectImage,
                    insect.images && insect.images.length === 1 && styles.singleImage
                  ]} 
                  resizeMode="contain" 
                />
                {insect.images && insect.images.length > 1 && (
                  <Text style={styles.imageLabel}>
                    {index === 0 ? 'Adult' : index === 1 ? 'Eggs/Larvae' : `Image ${index + 1}`}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}
        
        <Text style={styles.headerDescription}>{insect.description}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Scientific Name</Text>
          </View>
          <Text style={styles.scientificName}>{insect.scientificName}</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Characteristics</Text>
          </View>
          {insect.characteristics.map((characteristic: string, index: number) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{characteristic}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Life History</Text>
          </View>
          {insect.lifeHistory.map((history: string, index: number) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{history}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Nature of Damage</Text>
          </View>
          {insect.natureOfDamage.map((damage: string, index: number) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.listText}>{damage}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Host Range</Text>
          </View>
          <Text style={styles.sectionText}>{insect.hostRange}</Text>
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
    padding: 24,
    borderBottomWidth: 4,
  },
  primaryHeader: {
    backgroundColor: '#EFF6FF',
    borderBottomColor: '#3B82F6',
  },
  secondaryHeader: {
    backgroundColor: '#F5F3FF',
    borderBottomColor: '#8B5CF6',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  primaryBadge: {
    color: '#1E3A8A',
    backgroundColor: '#ffffff',
  },
  secondaryBadge: {
    color: '#6D28D9',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E293B',
    marginBottom: 12,
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 16,
  },
  imageWrapper: {
    width: width * 0.42,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  singleImageWrapper: {
    width: width * 0.7,
  },
  insectImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#FFFFFF',
  },
  singleImage: {
    height: 220,
  },
  imageLabel: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    paddingVertical: 6,
    backgroundColor: '#F1F5F9',
  },
  headerDescription: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  sectionText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
  },
  scientificName: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1E3A8A',
    fontWeight: '600',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingRight: 8,
  },
  bullet: {
    fontSize: 16,
    color: '#3B82F6',
    marginRight: 10,
    marginTop: 1,
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: '#64748B',
    lineHeight: 22,
  },
});
