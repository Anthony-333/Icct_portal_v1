import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderItem, {SLIDER_WIDTH, ITEM_WIDTH} from './SliderItem';
import data from './data';

const CustomSlider = () => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={SliderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
    </View>
  );
};

export default CustomSlider;
