import { View, Image, FlatList } from "react-native";
import { useEffect, useState } from "react";

import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Header";

import { styles } from "./styles";
import api from "../../api";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    api.get("/games").then((res) => setGames(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar"
      />
      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
