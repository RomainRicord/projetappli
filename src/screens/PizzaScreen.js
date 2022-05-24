import {View,ImageBackground,StyleSheet,ScrollView} from 'react-native'
import { Modal,Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectDropdown from 'react-native-select-dropdown'
import ChoosePizzaScreen from './ChoosePizzaScreen';

import { useState,useEffect } from 'react';
import TerroirsComponent from '../components/TerroirsComponent';
import TraditionsComponent from '../components/TraditionsComponent';
import MontagnardesComponent from '../components/MontagnardesComponent';

const PizzaScreen = (props) => {

    const pizza = ["Traditions","Terroirs","Montagnardes"]
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [name,setname] = useState("")
    const [ingredients,setingredients] = useState("")
    const [pricepetite,setpricepetite] = useState("")
    const [pricemoyenne,setpricemoyenne] = useState("")
    const [pricegrande,setpricegrande] = useState("")
    const [picture,setpicture] = useState("")
    const [type,settype] = useState(0)

    useEffect(() => {

        console.log("PizzaScreenMount")

    },[])

    return(
        <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'rgba(0,0,0,0.7)'}}>
                <ChoosePizzaScreen title={name} ingredients={ingredients} pricepetite={pricepetite} pricemoyenne={pricemoyenne}
                pricegrande={pricegrande} picture={picture} />
            </Modal>
        </Portal>
            <View style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:125,backgroundColor:'rgb(0,0,0)'}}>
            
            <SelectDropdown
                data={pizza}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                    if ((selectedItem) == "Terroirs") {
                        settype(1)
                        console.log("SetTerroirs")
                    } else if ((selectedItem) == "Traditions") {
                        settype(0)
                                                
                        
                    } else if ((selectedItem) == "Montagnardes") {
                        
                        settype(2)
                        
                        console.log("SetMontagnardes")
                    }
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
                    
                    {(type == 0) &&
                    <TraditionsComponent 
                    showModal={showModal}
                    setpicture={setpicture}
                    setname={setname}
                    setingredients={setingredients}
                    setpricepetite={setpricepetite}
                    setpricemoyenne={setpricemoyenne}
                    setpricegrande={setpricegrande}
                     />
                    }
                    {(type == 1) &&
                    <TerroirsComponent 
                    showModal={showModal}
                    setpicture={setpicture}
                    setname={setname}
                    setingredients={setingredients}
                    setpricepetite={setpricepetite}
                    setpricemoyenne={setpricemoyenne}
                    setpricegrande={setpricegrande}
                     />
                    }
                    {(type == 2) &&
                    <MontagnardesComponent 
                    showModal={showModal}
                    setpicture={setpicture}
                    setname={setname}
                    setingredients={setingredients}
                    setpricepetite={setpricepetite}
                    setpricemoyenne={setpricemoyenne}
                    setpricegrande={setpricegrande}
                     />
                    }
                    
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