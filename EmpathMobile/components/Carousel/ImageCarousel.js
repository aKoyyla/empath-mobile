import React, { useState } from 'react';
import { View, Image, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const ImageCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.headerText}>{item.header}</Text>
        <Text style={styles.contentText}>{item.content}</Text>
      </View>
    );
  };

  const renderDots = () => {
    return data.map((item, index) => (
      <View
        key={index}
        style={[
          styles.dot,
          activeIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
      />
    ));
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={data}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        autoplay
        loop
        autoplayInterval={5000}
        imageHeight={300}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <View style={styles.dotContainer}>{renderDots()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: screenWidth,
    height: 300,
    resizeMode: 'contain',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 23,
    marginTop: 10,
  },
  contentText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 50,
    marginTop: 5,
    opacity: 0.75,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  dot: {
    width: 45, 
    height: 2, 
    marginHorizontal: 3,
    borderRadius: 2, // make the edges smoother
  },
  activeDot: {
    backgroundColor: 'white',
  },
  inactiveDot: {
    backgroundColor: 'white',
    opacity: 0.7,
  },
  });

export default ImageCarousel;
