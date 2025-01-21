import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { navigate } from '../node_modules/@react-navigation/routers/src/CommonActions';



function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    function pressHandler(){
    navigation.navigate('MealsOcerView')
    }
      return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
      );
    }


  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
