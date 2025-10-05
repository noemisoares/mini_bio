import { View, Text, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { styles } from "../styles/HomeStyles";

export default function Index() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Noemi Soares",
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Image
        source={require("../assets/images/me.jpeg")}
        style={styles.img}
      />

      <View style={styles.textContainer}>
        <Text style={styles.name}>NOEMI SOARES</Text>

        <Text style={styles.paragraph}>
          Sou estudante do curso de Ciência da Computação da Universidade
          Católica de Pernambuco (UNICAP). Gosto de desenvolver novos projetos
          continuamente, para aplicar meus aprendizados de forma prática.
        </Text>

        <Text style={styles.paragraph}>
          Quando não estou programando, você pode me encontrar lendo diversos
          livros, jogando RPG de mesa e passando um tempo em família.
        </Text>

        <Text style={styles.quote}>
          “Trabalho duro é inútil para aqueles que não acreditam em si mesmos.”
        </Text>
      </View>
    </ScrollView>
  );
}