import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import stylesheet from '../node_modules/react-native-web/dist/exports/StyleSheet/index';

function MealsOverViewScreen(){
return(
<View>
<Text> Meals Overview Screen</Text>
</View>
);
}
export default MealsOverViewScreen;

const styls=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    }
});