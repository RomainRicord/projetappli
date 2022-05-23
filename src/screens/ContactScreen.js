import {Image,View,ImageBackground} from 'react-native'
import {Title,Paragraph} from 'react-native-paper'

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
      <Title>Numéro:</Title>
      <Title>02 35 95 86 54</Title>
      <Title>contact@fauvillaromane.com</Title>
      </ImageBackground>
    )
}

export default ContactScreen