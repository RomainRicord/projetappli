import {ImageBackground,Image,View,StyleSheet} from 'react-native'
import {Paragraph, Title} from 'react-native-paper'

const ChoosePizzaScreen = (props) => {

    console.log(props.route.title_)

    return(
        <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >

        <Image source={require('../../assets/i18445-margherite.jpeg')} style={{width:350    ,height:300,marginTop:20}} resizeMode="cover" />
        <Title style={{backgroundColor:'rgba(0,0,0,0.7)',color:'white',width:350,textAlign:'center',fontSize:32,padding:8,marginTop:20,marginBottom:20}}>{props.route.title_}</Title>
        
        <View style={{width:350,flex:1,marginBottom:20,backgroundColor:'rgba(0,0,0,0.7)'}}>

            <Title style={{color:'white',textAlign:'center',fontSize:32,marginTop:10}}>Ingredients:</Title>
            <Paragraph style={{color:'white',textAlign:'center',fontSize:20,marginTop:10}}>Tomates, mozzarella, olives, origan</Paragraph>

        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flex:1,alignItems:'center'}}>
            <View style={styles.size}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',borderBottomWidth:2,borderBottomColor:'#B70021',height:50,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <Title style={{color:'white',textAlign:'center'}}>Petite</Title>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',height:50,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <Title style={{color:'white',textAlign:'center'}}>5,30€</Title>
                </View>
            </View>
            <View style={styles.size}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',borderBottomWidth:2,borderBottomColor:'#B70021',height:50,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <Title style={{color:'white',textAlign:'center'}}>Moyenne</Title>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',height:50,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <Title style={{color:'white',textAlign:'center'}}>8,00€</Title>
                </View>
            </View>
            <View style={styles.size} >
                <View style={{flex:1,alignItems:'center',justifyContent:'center',borderBottomWidth:2,borderBottomColor:'#B70021',height:50,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <Title style={{color:'white',textAlign:'center'}}>Grande</Title>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',height:50,backgroundColor:'rgba(0,0,0,0.7)'}}>
                    <Title style={{color:'white',textAlign:'center'}}>11,00€</Title>
                </View>
            </View>
        </View>

    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    size:{
        display:'flex',
        flexDirection:'column',
        marginLeft:20,
        marginRight:20,
        borderWidth:2,
        borderColor:'#B70021',
        width:100,
        height:100,
        marginBottom:20,
        backgroundColor:'rgba(0,0,0,0.7)'
    }
})

export default ChoosePizzaScreen