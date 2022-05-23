import {View,ImageBackground} from 'react-native'

const PizzaScreen = () => {
    return(
        <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    ></ImageBackground>
    )
}

export default PizzaScreen