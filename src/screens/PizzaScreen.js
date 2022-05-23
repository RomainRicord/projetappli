import {View,ImageBackground,StyleSheet,ScrollView} from 'react-native'
import { BottomNavigation,Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const PizzaScreen = () => {
    return(
        <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >
        <ScrollView horizontal={true} >
            
            <View style={{display:'flex',flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',height:125,backgroundColor:'rgb(0,0,0)',zIndex:0}}>
            
            <Button mode="contained" style={styles.button} labelStyle={styles.buttonlabel}>Traditions</Button>
            <Button mode="contained" style={styles.button} labelStyle={styles.buttonlabel}>Terroirs</Button>
            <Button mode="contained" style={styles.button} labelStyle={styles.buttonlabel}>Montagnardes</Button>
            </View>
            <View style={{position:'absolute',display:'flex',flex:1,zIndex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',height:125}}>
                <Icon name="arrow-left" size={30} style={{color:'white'}}/>
            </View>
            
        </ScrollView>
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
        justifyContent:'center'
    },
    buttonlabel:{
        fontSize:12
    }
  });