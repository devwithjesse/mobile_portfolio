// app/(tabs)/index.tsx
import React from "react";
import { ScrollView, View, StyleSheet, Linking } from "react-native";
import { Avatar, Title, Paragraph, Button, Card, Chip, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();

  const openLink = (url: string) => Linking.openURL(url);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={{ padding: 16 }}
    >
      {/* Profile Header */}
      <View style={styles.profileRow}>
        <Avatar.Image
          source={require("../../assets/images/brand.jpg")}
        />
        <View style={styles.info}>
          <Title style={{ color: theme.colors.onBackground }}>Hi, I'm Jesse Mokolo👋</Title>
          <Paragraph style={{ color: theme.colors.onBackground }}>
            Final Year Software Engineering student passionate about mobile & backend development.
          </Paragraph>
          <View style={{ flexDirection: "row", marginTop: 8 }}>
            <Button mode="contained" onPress={() => openLink("https://github.com/devwithjesse")} compact>
              GitHub
            </Button>
            <Button
              mode="outlined"
              onPress={() => openLink("mailto:jessemokolo@gmail.com")}
              style={{ marginLeft: 8 }}
              compact
            >
              Email
            </Button>
          </View>
        </View>
      </View>

      {/* Featured Project */}
      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Title
          title="Featured Project"
          subtitle="UniPal - Campus AI Assistant"
          left={(props) => <MaterialCommunityIcons {...props} name="robot" />}
        />
        <Card.Content>
          <Paragraph style={{ color: theme.colors.onSurface }}>
            Backend in Flask + Solid frontend. Assists students with campus tasks using AI and automation.
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => router.push("/projects")}>View More</Button>
          <Button onPress={() => openLink("https://github.com/devwithjesse")}>Source</Button>
        </Card.Actions>
      </Card>

      {/* Skills Section */}
      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Content>
          <Title style={{ color: theme.colors.onSurface }}>Skills</Title>
          <View style={styles.chips}>
            <Chip icon="react" style={styles.chip}>React Native</Chip>
            <Chip icon="language-python" style={styles.chip}>Python</Chip>
            <Chip icon="database" style={styles.chip}>SQLite</Chip>
            <Chip icon="flask" style={styles.chip}>Flask</Chip>
          </View>
        </Card.Content>
      </Card>

      {/* Quick Links */}
      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Title title="Quick Links" />
        <Card.Content>
          <View style={styles.links}>
            <Button icon="briefcase" onPress={() => router.push("/work")}>Work</Button>
            <Button icon="folder" onPress={() => router.push("/projects")}>Projects</Button>
            <Button icon="help-circle" onPress={() => router.push("/faq")}>FAQ</Button>
          </View>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  profileRow: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  info: { flex: 1, marginLeft: 12 },
  card: { marginVertical: 8, borderRadius: 12 },
  chips: { flexDirection: "row", flexWrap: "wrap", marginTop: 8 },
  chip: { margin: 4 },
  links: { flexDirection: "row", justifyContent: "space-around" },
});
