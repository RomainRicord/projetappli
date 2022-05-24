import {Image,ImageBackground,StyleSheet} from 'react-native'
import {Title} from 'react-native-paper'
const ContactScreen = () => {
    
    return(
        <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >
        <Image
        source={require("../../assets/logo-289x300.png")}
        style={{ width: 289, height: 300 }}
      />
      
      <Title style={styles.contact}>Numéro:</Title>
      <Title style={styles.contact}>02 35 95 86 54</Title>
      <Title style={[styles.contact2,{marginTop:20}]}>contact@fauvillaromane.com</Title>
      
      </ImageBackground>
    )

}

const styles = StyleSheet.create({
    contact2: {
        color:'white',
        fontWeight:'bold',
        fontSize:24,
        textAlign:'center'
    },
    contact: {
        color:'white',
        fontWeight:'bold',
        fontSize:32,
        textAlign:'center'
    }
})

export default ContactScreen
