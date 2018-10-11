import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '../api/constants';

const StatsScreen = () => (
  <View style={styles.container}>
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.textStyle}>Stats Content Area</Text>
    </ScrollView>
  </View>
);

StatsScreen.navigationOptions = {
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center'
  },
  title: 'Stats'
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brandPrimary,
    flex: 1
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 30
  },
  textStyle: {
    color: colors.white
  }
});

export default StatsScreen;
