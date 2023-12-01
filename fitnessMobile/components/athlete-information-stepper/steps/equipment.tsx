import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import images from '../../../assets/Images';

const data = [
  { id: 1, text: 'Haléres', img: images.Haleres },
  { id: 2, text: 'élastique', img: images.elastique },
  { id: 3, text: 'Glute band', img: images.Gluteband },
  { id: 4, text: 'Lestes', img: images.Lestes },
  { id: 5, text: 'Kettlebell', img: images.Kettlebell },
  { id: 6, text: 'Swissball', img: images.swissball },
  { id: 7, text: 'Sans matériel', img: images.sansMateriel },
];

const Equipment = (props: { onNext: any; onBack: any; }) => {
  const { selectedItems, onItemPress, onNext, onBack } = props;

  // @ts-ignore
  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);

    const handleItemPress = () => {
      onItemPress(item.id);
    };

    return (
      <TouchableWithoutFeedback onPress={handleItemPress}>
        <View
          style={[
            styles.listContainer,
            { borderColor: isSelected ? '#4bbeed' : 'transparent', borderWidth: 3 },
          ]}
        >
          <View style={styles.imageContainer}>
            <Image source={item.img} style={styles.image} resizeMode="contain" />
          </View>
          <Text style={styles.nameText}>{item.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onNext}>
          <View style={styles.blueButton}>
            <Text style={styles.buttonBlueText}>Suivant</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onBack}>
          <View style={styles.whiteButton}>
            <Text style={styles.buttonWhiteText}>Retour</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  flatListContainer: {
    flexGrow: 1,
  },
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: { width: '100%', height: undefined, aspectRatio: 1 },
  nameText: {
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 15,
    marginLeft: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 5,
  },
  blueButton: {
    margin: 10,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#4bbeed',
    borderWidth: 1,
    borderColor: '#4bbeed',
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: Dimensions.get('window').width / 2 + 110,
    alignSelf: 'center',
    marginVertical: 10,
  },
  whiteButton: {
    borderWidth: 3,
    borderColor: '#1c2d5a',
    padding: 15,
    height: 50,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: Dimensions.get('window').width / 2 + 110,
    alignSelf: 'center',
    marginVertical: 10,
  },
  buttonBlueText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonWhiteText: {
    color: '#1c2d5a',
    textAlign: 'center',
  },
});

export default Equipment;
