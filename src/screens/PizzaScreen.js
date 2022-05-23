import {View,ImageBackground,StyleSheet,ScrollView,Image,Pressable} from 'react-native'
import { BottomNavigation,Button,Card,Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectDropdown from 'react-native-select-dropdown'
import AccueilScreen from './AccueilScreen';
import Welcome from './Welcome';
import ChoosePizzaScreen from './ChoosePizzaScreen';
import ContactScreen from './ContactScreen';

const PizzaScreen = (props) => {

    console.log(props.route)

    const pizza = ["Traditions","Terroirs","Montagnardes"]

    let myloop = []
    let secondloop = []

for (let i = 0; i < 10; i++) {
    if (i%2 == 1){
  myloop.push(
    <Pressable key={i} onPress={() => {
        let route_ = []

        route_ = props.route.route
        
        console.log(typeof(route_))

        route_.push({ key: 'choosepizza2', title: 'choosepizza', icon:'pencil',title_:'Margherita',ingredients:'Tomates, mozzarella, olives, origan'})

        props.route.setroute(route_)
        
        props.route.setscenemap(BottomNavigation.SceneMap({
            home: AccueilScreen,
            pizza: PizzaScreen,
            contact: ContactScreen,
            choosepizza: ChoosePizzaScreen
        }))
        }}>
    <Card style={{width:150,height:100,marginBottom:60}}>
        <Image style={{width:150,height:100}} source={require("../../assets/vivaldi_09158900_193220496.jpg")} />
    
        <Title style={{textAlign:'center',backgroundColor:'rgba(0,0,0,0.7)',color:'white'}}>Margherita</Title>
    
    </Card></Pressable>
  );} else {
    secondloop.push(
        <Card key={i} style={{width:150,height:100,marginBottom:60}}>
            <Image style={{width:150,height:100}} source={require("../../assets/vivaldi_09158900_193220496.jpg")} />
        
            <Title style={{textAlign:'center',backgroundColor:'rgba(0,0,0,0.7)',color:'white'}}>Margherita</Title>
        
        </Card>
      );
  }
}

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
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
                buttonStyle={styles.button}
                buttonTextStyle={styles.buttonlabel}
                dropdownStyle={{color:'white',backgroundColor:'white'}}
                rowTextStyle={styles.buttonlabel}
                rowStyle={styles.dropdownStyle}
                defaultButtonText="Traditions"
                renderDropdownIcon={()=> <View style={{width:30, borderWidth:1}}>
                <Icon name="arrow-down" size={30} color="#ffffff" />
              </View>}
            /></View>

            <ScrollView style={{flex:1}}>
                <View style={{display:'flex',flexDirection:'row',margin:20,justifyContent:'space-between'}}>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        {myloop}
                    </View>
                    <View style={{display:'flex',flexDirection:'column'}}>
                        {secondloop}
                    </View>
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