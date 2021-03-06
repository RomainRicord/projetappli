import terroirs from '../data/terroirs.js';

import {View,ScrollView} from 'react-native'

import CardPizza from './CardPizza.js';

const TerroirsComponent = (props) => {

    const {showModal,
        setname,
        setpicture,
        setingredients,
        setpricepetite,
        setpricemoyenne,
        setpricegrande
    } = props

    return(
    <ScrollView style={{flex:1}}>
            
        <View style={{display:'flex',flexDirection:'row',margin:20,justifyContent:'space-between'}}>

        <View style={{display:'flex',flexDirection:'column'}}>
            
            {terroirs.map((e,k) => {

                if (k < Math.ceil(terroirs.length/2)) {

                    return(
                        <CardPizza key={k} 
                        setname={setname} 
                        setpicture={setpicture}
                        setingredients={setingredients} 
                        setpricepetite={setpricepetite} 
                        setpricemoyenne={setpricemoyenne} 
                        setpricegrande={setpricegrande} 
                        pricepetite={e.petite}
                        pricemoyenne={e.moyenne}
                        pricegrande={e.grande}
                        name={e.name} 
                        picture={e.picture} 
                        ingredients={e.ingredients} 
                        showModal={showModal} />    
                    )
                }
            })}

        </View>

        <View style={{display:'flex',flexDirection:'column'}}>
            
            {terroirs.map((e,k) => {

                if (k >= Math.ceil(terroirs.length/2)) {

                    return(
                        <CardPizza key={k} 
                        setname={setname} 
                        setpicture={setpicture}
                        setingredients={setingredients} 
                        setpricepetite={setpricepetite} 
                        setpricemoyenne={setpricemoyenne} 
                        setpricegrande={setpricegrande} 
                        pricepetite={e.petite}
                        pricemoyenne={e.moyenne}
                        pricegrande={e.grande}
                        name={e.name}
                        picture={e.picture}
                        ingredients={e.ingredients} 
                        showModal={showModal}/>
                    )
                }
            })}

        </View>
            
        </View>
            
        
    </ScrollView>
)}

export default TerroirsComponent