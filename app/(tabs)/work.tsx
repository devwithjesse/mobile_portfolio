// app/(tabs)/work.tsx
import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, useTheme, Divider } from "react-native-paper";

export default function WorkScreen() {
  const theme = useTheme();

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "New Horizons",
      period: "Jan 2025 – Jul 2025",
      description: "Built automation tools, learned Python and Django, and assisted in mobile app prototyping.",
    },
    {
      title: "Backend Developer (Volunteer)",
      company: "Tech4Naija",
      period: "Aug 2024 – Dec 2024",
      description: "Developed REST APIs and integrated SQLite databases for NGO projects.",
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ padding: 16 }}
    >
      <Title style={[styles.header, { color: theme.colors.primary }]}>Work Experience</Title>

      {experiences.map((exp, index) => (
        <Card
          key={index}
          style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}
        >
          <Card.Title title={exp.title} subtitle={`${exp.company} | ${exp.period}`} />
          <Card.Content>
            <Paragraph style={{ color: theme.colors.onSurface }}>{exp.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      <Divider style={{ marginTop: 16 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { marginBottom: 12, textAlign: "center" },
  card: { marginBottom: 12, borderRadius: 10 },
});
