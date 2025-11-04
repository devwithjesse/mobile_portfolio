// app/(tabs)/faq.tsx
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { List, Divider, useTheme, Title } from "react-native-paper";

export default function FAQScreen() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | null>(null);

  const handlePress = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const faqs = [
    {
      id: "1",
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React Native for mobile development, Flask and Django for backend systems, and SQLite or Firebase for data storage.",
    },
    {
      id: "2",
      question: "What kind of projects have you worked on?",
      answer:
        "I’ve developed automation tools, AI-powered mobile assistants, attendance tracking apps, and various student productivity tools.",
    },
    {
      id: "3",
      question: "Do you collaborate with others?",
      answer:
        "Yes! I frequently collaborate on software engineering group projects, handling backend logic while teammates focus on frontend or UI/UX.",
    },
    {
      id: "4",
      question: "Are you open for internships or freelance work?",
      answer:
        "Absolutely. I'm open to internships or part-time roles where I can grow as a mobile/backend developer and contribute to real-world projects.",
    },
  ];

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ padding: 16 }}
    >
      <Title style={[styles.header, { color: theme.colors.primary }]}>Frequently Asked Questions</Title>

      {faqs.map((faq) => (
        <List.Section key={faq.id}>
          <List.Accordion
            title={faq.question}
            titleStyle={{ color: theme.colors.onSurface }}
            expanded={expanded === faq.id}
            onPress={() => handlePress(faq.id)}
            style={[styles.accordion, { backgroundColor: theme.colors.elevation.level2 }]}
            left={(props) => <List.Icon {...props} icon={expanded === faq.id ? "chevron-up" : "chevron-down"} />}
          >
            <Divider />
            <List.Item title={faq.answer} titleNumberOfLines={10} titleStyle={{ color: theme.colors.onSurfaceVariant }} />
          </List.Accordion>
        </List.Section>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { textAlign: "center", marginBottom: 12 },
  accordion: { borderRadius: 10, marginVertical: 4 },
});
