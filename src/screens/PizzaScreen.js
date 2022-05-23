import {View,ImageBackground,StyleSheet,ScrollView,Image} from 'react-native'
import { BottomNavigation,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectDropdown from 'react-native-select-dropdown'

const PizzaScreen = () => {

    const pizza = ["Traditions","Terroirs","Montagnardes"]

    return(
        <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >
            <View style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:125,backgroundColor:'rgb(0,0,0)'}}>
            
            <SelectDropdown
                data={pizza}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                buttonStyle={styles.button}
                buttonTextStyle={styles.buttonlabel}
                dropdownStyle={{color:'white',backgroundColor:'white'}}
                rowTextStyle={styles.buttonlabel}
                rowStyle={styles.dropdownStyle}
                renderDropdownIcon={()=> <View style={{width:30, borderWidth:1}}>
                <Icon name="arrow-down" size={30} color="#ffffff" />
              </View>}
            /></View>
    </ImageBackground>
    )
}

export default PizzaScreen

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#171717',
        borderWidth:2,
        borderColor:'#B70021',
        width:180,
        height:48,
        margin:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:'white'
    },
    buttonlabel:{
        fontSize:18,
        color:'white',
        backgroundColor:'#171717',
    },
    dropdownStyle:{
        backgroundColor:'#171717',
        borderWidth:2,
        borderColor:'#B70021',   
        color:'white'
    }
  });