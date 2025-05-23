import { ThemeColors } from '@theme/types';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';

// const icons = ['(･o･;)', 'Σ(ಠ_ಠ)', 'ಥ_ಥ', '(˘･_･˘)', '(；￣Д￣)', '(･Д･。'];

interface ErrorAction {
  name: string;
  icon: string;
  onPress: () => void;
}

interface ErrorViewProps {
  errorName: string;
  actions: ErrorAction[];
  theme: ThemeColors;
}

export const ErrorView = ({ errorName, actions, theme }: ErrorViewProps) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={[styles.emptyViewIcon, { color: theme.outline }]}>
      {/* {icons[Math.floor(Math.random() * 5)]} */}
      ಥ_ಥ
    </Text>
    <Text style={[styles.emptyViewText, { color: theme.outline }]}>
      {errorName}
    </Text>
    <View style={{ flexDirection: 'row' }}>
      {actions.map(action => (
        <View
          style={{
            borderRadius: 4,
            overflow: 'hidden',
            margin: 16,
          }}
        >
          <Pressable
            android_ripple={{
              color: theme.rippleColor,
              borderless: false,
            }}
            onPress={action.onPress}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 8,
              paddingHorizontal: 20,
              minWidth: 100,
            }}
          >
            <IconButton icon={action.icon} size={24} style={{ margin: 0 }} />
            <Text
              style={{
                fontSize: 12,
                color: theme.outline,
              }}
            >
              {action.name}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  emptyViewContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  emptyViewIcon: {
    fontSize: 45,
  },
  emptyViewText: {
    fontWeight: 'bold',
    marginTop: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
  },
});
