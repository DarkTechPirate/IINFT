import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/navigation/types';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import HomeScreen from './src/screens/HomeScreen';
import KnowledgeHubScreen from './src/screens/KnowledgeHubScreen';
import StorageInsectsScreen from './src/screens/StorageInsectsScreen';
import PrimaryInsectsListScreen from './src/screens/PrimaryInsectsListScreen';
import SecondaryInsectsListScreen from './src/screens/SecondaryInsectsListScreen';
import InsectDetailScreen from './src/screens/InsectDetailScreen';
import SourcesOfInfestationScreen from './src/screens/SourcesOfInfestationScreen';
import MethodsOfDetectionScreen from './src/screens/MethodsOfDetectionScreen';
import ControlMeasuresScreen from './src/screens/ControlMeasuresScreen';
import PreventiveMeasureScreen from './src/screens/PreventiveMeasureScreen';
import CurativeMeasureScreen from './src/screens/CurativeMeasureScreen';
import ChemicalMethodScreen from './src/screens/ChemicalMethodScreen';
import NonChemicalMethodScreen from './src/screens/NonChemicalMethodScreen';
import FumigantRecommendationsScreen from './src/screens/FumigantRecommendationsScreen';
import LiveInsectDetectionScreen from './src/screens/LiveInsectDetectionScreen';
import SafeStorageGuidelinesScreen from './src/screens/SafeStorageGuidelinesScreen';
import PulsesStorageScreen from './src/screens/PulsesStorageScreen';
import SpicesStorageScreen from './src/screens/SpicesStorageScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E3A8A',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="KnowledgeHub"
          component={KnowledgeHubScreen}
          options={{ title: 'Knowledge Hub' }}
        />
        <Stack.Screen
          name="StorageInsects"
          component={StorageInsectsScreen}
          options={{ title: 'Storage Insects' }}
        />
        <Stack.Screen
          name="PrimaryInsectsList"
          component={PrimaryInsectsListScreen}
          options={{ title: 'Primary Insects' }}
        />
        <Stack.Screen
          name="SecondaryInsectsList"
          component={SecondaryInsectsListScreen}
          options={{ title: 'Secondary Insects' }}
        />
        <Stack.Screen
          name="InsectDetail"
          component={InsectDetailScreen}
          options={{ title: 'Insect Details' }}
        />
        <Stack.Screen
          name="SourcesOfInfestation"
          component={SourcesOfInfestationScreen}
          options={{ title: 'Sources of Infestation' }}
        />
        <Stack.Screen
          name="MethodsOfDetection"
          component={MethodsOfDetectionScreen}
          options={{ title: 'Methods of Detection' }}
        />
        <Stack.Screen
          name="ControlMeasures"
          component={ControlMeasuresScreen}
          options={{ title: 'Control Measures' }}
        />
        <Stack.Screen
          name="PreventiveMeasure"
          component={PreventiveMeasureScreen}
          options={{ title: 'Preventive Measure' }}
        />
        <Stack.Screen
          name="CurativeMeasure"
          component={CurativeMeasureScreen}
          options={{ title: 'Curative Measure' }}
        />
        <Stack.Screen
          name="ChemicalMethod"
          component={ChemicalMethodScreen}
          options={{ title: 'Chemical Method' }}
        />
        <Stack.Screen
          name="NonChemicalMethod"
          component={NonChemicalMethodScreen}
          options={{ title: 'Non Chemical Method' }}
        />
        <Stack.Screen
          name="FumigantRecommendations"
          component={FumigantRecommendationsScreen}
          options={{ title: 'Fumigant Calculator' }}
        />
        <Stack.Screen
          name="LiveInsectDetection"
          component={LiveInsectDetectionScreen}
          options={{ title: 'Live Detection' }}
        />
        <Stack.Screen
          name="SafeStorageGuidelines"
          component={SafeStorageGuidelinesScreen}
          options={{ title: 'Storage Guidelines' }}
        />
        <Stack.Screen
          name="PulsesStorage"
          component={PulsesStorageScreen}
          options={{ title: 'Pulses Storage' }}
        />
        <Stack.Screen
          name="SpicesStorage"
          component={SpicesStorageScreen}
          options={{ title: 'Spices Storage' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
