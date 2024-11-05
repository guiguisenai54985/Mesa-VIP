import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import AppIntroSlider from 'react-native-app-intro-slider'

const slides = [
    {
        id: 1,
        title: 'Bem-vindo Ao MesaVIP!',
        description: ' O nosso aplicativo oferece uma maneira fácil e rápida de reservar mesas em diversos restaurantes da sua região. Com poucos cliques, você pode garantir o seu lugar e desfrutar de uma experiência gastronômica maravilhosa!',
        image: { uri: 'https://img.freepik.com/premium-vector/restaurant-concept-with-people-scene-flat-cartoon-design-girl-decided-have-dinner_198565-6819.jpg?w=996' }
    },
    {
        id: 3,
        title: 'Mais tempo para o que importa!',
        description: 'Imagine chegar ao restaurante e ser recebido com um sorriso, com sua mesa já reservada. Mais praticidade, mais tempo para aproveitar a sua noite!',
        image: { uri: 'https://img.freepik.com/vetores-premium/um-grupo-diverso-de-amigos-a-desfrutar-de-bebidas-juntos_1324820-5936.jpg?uid=R157379999&ga=GA1.1.1235062644.1724770198&semt=ais_siglip' }
    },
    {
        id: 2,
        title: 'Diga adeus às filas!',
        description: ' Cansado de esperar horas por uma mesa? Com MesaVIP, você reserva sua mesa em segundos e garante um lugar especial para você e seus amigos.',
        image: { uri: 'https://img.freepik.com/vetores-premium/pessoas-profissionais-ao-lado-de-estandes-promocionais-comerciais_1323048-4271.jpg?uid=R157379999&ga=GA1.1.1235062644.1724770198&semt=ais_siglip' }
    },
]

export default function OnBoarding({navigation}) {
    const [showHomePage, setShowHomePage] = useState(false);

    const buttonLabel = (label) => {
        return (
            <View style={{
                padding: 12
            }}>
                <Text style={{
                    color: COLORS.title,
                    fontWeight: '600',
                    fontSize: SIZES.h4,
                }}>
                    {label}
                </Text>
            </View>
        )
    }

    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={slides}
                renderItem={({ item }) => {
                    return (
                        <View style={{
                            backgroundColor: '#F5FFFA',
                            flex: 1,
                            alignItems: 'center',
                            padding: 15,
                            paddingTop: 100,
                        }}
                        >
                            <Image
                                source={item.image}
                                style={{
                                    width: SIZES.width - 80,
                                    height: 280,
                                }}
                                resizeMode='contain'
                            />

                            <Text style={{
                                fontWeight: 'bold',
                                color: COLORS.title,
                                fontSize: SIZES.h1,
                            }}>
                                {item.title}
                            </Text>
                            <Text style={{
                                textAlign: 'center',
                                paddingTop: 5,
                                color: COLORS.title
                            }}>
                                {item.description}
                            </Text>
                        </View>
                    )
                }}
                activeDotStyle={{
                    backgroundColor: COLORS.primary,
                    width: 30,
                }}
                showSkipButton
                renderNextButton={() => buttonLabel("Next")}
                renderSkipButton={() => buttonLabel("Skip")}
                renderDoneButton={() => buttonLabel("Done")}
                onDone={() => {
                    navigation.navigate('Home')
                }}
            />
        )
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Home Screen</Text>
        </View>
    )
}