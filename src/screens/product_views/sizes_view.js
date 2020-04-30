import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  addBagMsg,
  incrementMsg,
  chooseNumberMsg,
} from '../../consts/popup_messages';
import cartHook from '../../hooks/cart.hook';

const SizesView = ({item}) => {
  const [selected, setSelected] = useState();
  const {useCartState, addToCart, incrementItem} = cartHook();
  const {items} = useCartState();
  const addButtonEvent = () => {
    selected && items.find(x => x.id === item.id && x.number === selected)
      ? incrementEvent()
      : addEvent();
  };

  const addEvent = () => {
    if (selected > 0) {
      addToCart({id: item.id, number: selected, piece: 1, price: item.price});
      addBagMsg(selected);
    } else {
      chooseNumberMsg();
    }
  };

  const incrementEvent = () => {
    if (selected > 0) {
      incrementItem({id: item.id, number: selected});
      incrementMsg(selected);
    }
  };

  return (
    <View style={styles.sizesView}>
      <Text style={styles.sizeText}>Size</Text>
      <ScrollView
        style={styles.sizeScroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {item.sizes.map(size => {
          return (
            <TouchableOpacity
              key={size}
              style={
                selected === size
                  ? [styles.sizeBox, {backgroundColor: 'black'}]
                  : styles.sizeBox
              }
              onPress={() => setSelected(size)}>
              <Text
                style={
                  selected === size
                    ? [styles.sizeNumber, {color: 'white'}]
                    : styles.sizeNumber
                }>
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={addButtonEvent}>
        <Text style={styles.addText}>ADD TO BAG</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sizesView: {
    marginTop: 30,
  },
  sizeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizeScroll: {
    height: 70,
    width: '100%',
  },
  sizeBox: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 100,
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 4,
  },
  sizeNumber: {
    fontSize: 18,
  },
  addButton: {
    height: 50,
    backgroundColor: '#fa3d67',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginVertical: 20,
  },
  addText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SizesView;
