import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SliderItem, {SLIDER_WIDTH, ITEM_WIDTH} from './SliderItem';
import data from './data';

const CustomSlider = () => {
  const isCarousel = React.useRef(null);

  const [loading, setLoading] = useState(false);

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
        loop={true}
      />
    </View>
  );
};

export default CustomSlider;
