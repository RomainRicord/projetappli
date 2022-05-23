import {View,ImageBackground,StyleSheet,ScrollView,Image,Pressable} from 'react-native'
import { BottomNavigation,Button,Card,Title,Modal,Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import SelectDropdown from 'react-native-select-dropdown'
import AccueilScreen from './AccueilScreen';
import Welcome from './Welcome';
import ChoosePizzaScreen from './ChoosePizzaScreen';
import ContactScreen from './ContactScreen';

import { useState,useEffect } from 'react';

const PizzaScreen = (props) => {

    const traditions = require('../../assets/json/traditions.json')
    const terroirs = require('../../assets/json/terroirs.json')
    const montagnardes = require('../../assets/json/montagnardes.json')

    const pizza = ["Traditions","Terroirs","Montagnardes"]
    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    const [listpizza,setlistpizza] = useState(traditions)

    let myloop = []
    let secondloop = []

    useEffect(() => {

        listpizza.map((e,k) => {

            console.log(`../../assets/img/${e.picture}`)
            const img = require('../../assets/vivaldi_09158900_193220496.jpg')

            console.log(e)
            if (k%2 == 1){

                myloop.push(
                    <Pressable key={k} onPress={showModal}>
                    <Card style={{width:150,height:100,marginBottom:60}}>
                        <Image style={{width:150,height:100}} source={require("../../assets/vivaldi_09158900_193220496.jpg")} />
                    
                        <Title style={{textAlign:'center',backgroundColor:'rgba(0,0,0,0.7)',color:'white'}}>Margherita</Title>
                    
                    </Card></Pressable>
                );
            
            } else {
                secondloop.push(
                    <Card key={k} style={{width:150,height:100,marginBottom:60}}>
                        <Image style={{width:150,height:100}} source={img} />
                    
                        <Title style={{textAlign:'center',backgroundColor:'rgba(0,0,0,0.7)',color:'white'}}>Margherita</Title>
                    
                    </Card>)
            }
        })

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
          <ChoosePizzaScreen title="Margherita" ingredients="Olive, origan"/>
        </Modal>
      </Portal>
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
                
                    {listpizza.map((e,k) => {
                        
                        return(
                            <View key={k} style={{display:'flex',flexDirection:'row',margin:20,justifyContent:'space-between'}}>
                                <View style={{display:'flex',flexDirection:'column'}}>
                                    {myloop}
                                </View>
                                <View style={{display:'flex',flexDirection:'column'}}>
                                    {secondloop}
                                </View>
                            </View>
                        )

                    })}
                
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