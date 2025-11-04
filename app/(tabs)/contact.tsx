// app/(tabs)/contact.tsx
import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import { Card, Title, Paragraph, Button, useTheme, Divider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ContactScreen() {
  const theme = useTheme();

  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => console.warn("Failed to open link"));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Title style={[styles.header, { color: theme.colors.primary }]}>Let's Connect</Title>
      <Paragraph style={[styles.subText, { color: theme.colors.onBackground }]}>
        Feel free to reach out for collaborations, projects, or just to say hello 👋
      </Paragraph>

      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Title
          title="Email"
          subtitle="jessemokolo@gmail.com"
          left={(props) => <MaterialCommunityIcons {...props} name="email" color={theme.colors.primary} size={26} />}
        />
        <Card.Actions>
          <Button onPress={() => openLink("mailto:youremail@example.com")}>Send Email</Button>
        </Card.Actions>
      </Card>

      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Title
          title="WhatsApp"
          subtitle="+234 701 409 2956"
          left={(props) => <MaterialCommunityIcons {...props} name="whatsapp" color="#25D366" size={26} />}
        />
        <Card.Actions>
          <Button onPress={() => openLink("https://wa.me/2347014092956")}>Chat Now</Button>
        </Card.Actions>
      </Card>

      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Title
          title="GitHub"
          subtitle="github.com/devwithjesse"
          left={(props) => <MaterialCommunityIcons {...props} name="github" color="#fff" size={26} />}
        />
        <Card.Actions>
          <Button onPress={() => openLink("https://github.com/devwithjesse")}>View Profile</Button>
        </Card.Actions>
      </Card>

      <Card style={[styles.card, { backgroundColor: theme.colors.elevation.level2 }]}>
        <Card.Title
          title="LinkedIn"
          subtitle="linkedin.com/in/jesse"
          left={(props) => <MaterialCommunityIcons {...props} name="linkedin" color="#0A66C2" size={26} />}
        />
        <Card.Actions>
          <Button onPress={() => openLink("https://linkedin.com/in/jesse")}>Connect</Button>
        </Card.Actions>
      </Card>

      <Divider style={{ marginVertical: 16 }} />

      <Paragraph style={[styles.footer, { color: theme.colors.onSurfaceVariant }]}>
        © {new Date().getFullYear()} Jesse’s Portfolio App — Built with ❤️ using React Native & Expo
      </Paragraph>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 4 },
  subText: { textAlign: "center", marginBottom: 20 },
  card: { marginVertical: 8, borderRadius: 12 },
  footer: { textAlign: "center", marginTop: 12, fontSize: 12 },
});
