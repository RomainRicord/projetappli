import {Image,Pressable} from 'react-native'
import { Card,Title} from 'react-native-paper';

const CardPizza = (props) => {

    const {showModal,
        name,
        picture,
        ingredients,
        setpicture,
        setname,
        setingredients,
        setpricepetite,
        setpricemoyenne,
        setpricegrande,
        pricepetite,
        pricemoyenne,
        pricegrande
        } = props

    return(
    <Pressable style={{maxWidth: '50%'}} onPress={() => {

        setname(name)
        setpicture(picture)
        setingredients(ingredients)
        setpricepetite(pricepetite)
        setpricemoyenne(pricemoyenne)
        setpricegrande(pricegrande)

        showModal()

    }}>
    <Card style={{width:150,height:100,marginBottom:60}}>
        <Image style={{width:150,height:100}} source={picture} />
    
        <Title style={{textAlign:'center',backgroundColor:'rgba(0,0,0,0.7)',color:'white'}}>{name}</Title>
    
    </Card></Pressable>
    )
}

export default CardPizza