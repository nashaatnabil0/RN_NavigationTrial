// import {StyleSheet, Text, View} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import stylesheet from '../node_modules/react-native-web/dist/exports/StyleSheet/index';
import {FlatList} from 'react-native';
import MealItem from '../components/MealItem';
import Category from '../models/category';
import {useEffect, useLayoutEffect} from 'react';

function MealsOverViewScreen({route, navigation}) {
  const categId = route.params.categoryId;

  const meals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(categId) >= 0;
  });
useLayoutEffect(() => {
    const categTitle = CATEGORIES.find(
      category => category.id === categId,
    ).title;

    navigation.setOptions({
      title: categTitle,
    });
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <FlatList
      data={meals}
      keyExtractor={item => item.id}
      renderItem={renderMealItem}
    />
  );
}
export default MealsOverViewScreen;


