import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import RightArrow from '../../assets/home/right-arrow.svg';
import ItemBox from '../../components/item_box';
import appHook from '../../hooks/app.hook';
import {brands, allItems} from '../../data';
import * as RootNavigation from '../../navigation/root_navigation';

const MoreView = () => {
  const {useAppState} = appHook();
  const {selectedBrand} = useAppState();

  const itemsOfBrand = brands.filter(
    x => x.name.toLowerCase() === selectedBrand.toLowerCase(),
  )[0].items;

  const moreItems = itemsOfBrand.map(id => allItems[id]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.moreTextView}
        onPress={() => RootNavigation.push('More', {moreItems})}>
        <Text style={styles.moreText}>More</Text>
        <RightArrow
          width={25}
          height={25}
          fill="black"
          style={styles.rightIcon}
        />
      </TouchableOpacity>
      <ScrollView
        style={styles.itemsContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {moreItems.map((item, index) => {
          if (index < 5) {
            return <ItemBox key={item.id} item={item} />;
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    flexDirection: 'column',
  },
  moreTextView: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
  },
  moreText: {
    flex: 1,
    fontSize: 22,
  },
  rightIcon: {
    alignSelf: 'flex-end',
    marginTop: -16,
    marginRight: 20,
  },
  itemsContainer: {
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default MoreView;
