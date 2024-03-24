import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff" };

const slides = [
  {
    id: "1",
    image: require("../assets/image5.png"),
    title: "Hiking",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    colorDark: '#375F84',
    colorLight: '#90C5E1'
  },
  {
    id: "2",
    image: require("../assets/image4.png"),
    title: "Fishing",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    colorDark: '#396140',
    colorLight: '#A4D5A6'
  },
  {
    id: "3",
    image: require("../assets/image1.png"),
    title: "Searching",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    colorDark: '#011822',
    colorLight: '#285C94'
  },
  {
    id: "4",
    image: require("../assets/image2.png"),
    title: "Rock Climbing",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    colorDark: '#47383A',
    colorLight: '#BBA7A8'
  },
  {
    id: "5",
    image: require("../assets/image3.png"),
    title: "Camping",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    colorDark: '#122350',
    colorLight: '#3C5898'
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{ height: "78%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <Text style={styles.subtitle}>{item?.subtitle}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const goToBackSlide = () => {
    const nextSlideIndex = currentSlideIndex - 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const getDarkColor = () => slides[currentSlideIndex].colorDark;
  const getLightColor = () => slides[currentSlideIndex].colorLight;

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.2,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50 }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.replace("HomeScreen")}
              >
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  GET STARTED
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: "transparent",
                  },
                ]}
                onPress={currentSlideIndex == 0 ? skip : goToBackSlide}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: COLORS.white,
                  }}
                >
                 {currentSlideIndex == 0 ? 'SKIP': 'BACK'}
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                  }}
                >
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <LinearGradient colors={[getDarkColor(), getLightColor()]} style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{
          height: height * 0.8,
          paddingBottom: height * 0.1,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        scrollEnabled={false}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: COLORS.white,
    fontSize: 14,
    marginTop: 10,
    maxWidth: "78%",
    textAlign: "center",
    lineHeight: 22,
    fontWeight: "500",
  },
  title: {
    color: COLORS.white,
    fontSize: 42,
    fontWeight: "900",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 5,
    width: 12,
    backgroundColor: "#ffffff3b",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default OnboardingScreen;
