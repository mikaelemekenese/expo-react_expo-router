import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Bienvenue sur</Text>
        <Image source={require('./assets/images/neafood-logo.png')} />
        <Text style={styles.subtitle}>Réservez vos repas via l'app</Text>
        <Link href="#" style={styles.link}>Voir plus</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 24,
    color: "#38434D",
    marginVertical: 25,
    textAlign: "center",
  },
  link: {
    fontSize: 15,
    textAlign: "center",
    color: "blue",
    textDecorationLine: "underline",
  }
});
