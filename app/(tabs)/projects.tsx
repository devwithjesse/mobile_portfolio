// app/(tabs)/projects.tsx
import React from "react";
import { ScrollView, StyleSheet, View, Linking, Image } from "react-native";
import { Card, Title, Paragraph, Button, Chip, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProjectsScreen() {
  const theme = useTheme();

  const projects = [
    {
      title: "UniPal - Campus AI Assistant",
      description:
        "AI-powered mobile assistant built with Flask (backend) and Solid (frontend) for campus-related queries and automation.",
      tags: ["React Native", "Flask", "AI", "SQLite"],
      image: "https://cdn.dribbble.com/userupload/9095308/file/original-07d2c69b0d5a4b85f85945b3e64052da.png",
      github: "https://github.com/devwithjesse",
      live: "https://unipal-demo.vercel.app",
    },
    {
      title: "Campus Exit Management System",
      description:
        "A System that streamlines the exit process of students and staff within Babcock University",
      tags: ["Django", "React Native", "Firebase"],
      image: "https://cdn.dribbble.com/userupload/8449952/file/original-7aa9078e41f73bfa8da0e6948db3cf3a.png",
      github: "https://github.com/devwithjesse",
    },
    {
      title: "TaskMate - Productivity App",
      description:
        "Task and habit-tracking mobile app with notifications and data persistence using SQLite.",
      tags: ["React Native", "SQLite", "TypeScript"],
      image: "https://cdn.dribbble.com/userupload/1234567/file/original-abcdef1234567.png",
      github: "https://github.com/devwithjesse",
    },
  ];

  const openLink = (url: string) => {
    if (url) Linking.openURL(url);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ padding: 16 }}
    >
      <Title style={[styles.header, { color: theme.colors.primary }]}>My Projects</Title>

      {projects.map((proj, index) => (
        <Card key={index} style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
          {proj.image && <Image source={{ uri: proj.image }} style={styles.image} />}
          <Card.Title
            title={proj.title}
            left={(props) => <MaterialCommunityIcons {...props} name="folder-star" />}
          />
          <Card.Content>
            <Paragraph style={{ color: theme.colors.onSurface }}>{proj.description}</Paragraph>
            <View style={styles.tags}>
              {proj.tags.map((tag, i) => (
                <Chip key={i} compact style={styles.chip}>
                  {tag}
                </Chip>
              ))}
            </View>
          </Card.Content>
          <Card.Actions>
            <Button icon="github" onPress={() => openLink(proj.github)}>
              GitHub
            </Button>
            {proj.live && (
              <Button icon="open-in-new" onPress={() => openLink(proj.live)}>
                Live
              </Button>
            )}
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { textAlign: "center", marginBottom: 16 },
  card: { marginBottom: 16, borderRadius: 12, overflow: "hidden" },
  image: { width: "100%", height: 160 },
  tags: { flexDirection: "row", flexWrap: "wrap", marginTop: 8 },
  chip: { marginRight: 6, marginBottom: 6 },
});
