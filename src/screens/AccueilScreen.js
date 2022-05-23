import { View, Image, ImageBackground } from "react-native";
import { Paragraph, Title } from "react-native-paper";

const AccueilScreen = () => {
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/photo-1513104890138-7c749659a591.jpg")}
      resizeMode="cover"
      blurRadius={3}
    >
        <Title
        style={{
            marginTop: 60,
            marginBottom: 40,
            color: "white",
            textDecorationLine: "underline",
            fontSize: 32,
        }}
        >
        Notre savoir faire
        </Title>
        <Image
        style={{ flex: 1, margin: 20,borderRadius:20,height:75,width:344 }}
        source={require("../../assets/pizza_header.jpg")}
        ></Image>
        <Paragraph style={{color:'white',margin:20,textAlign:'center'}}>
        Villa romane n’utilise que des produits de grande qualité, comme une
        farine supérieure, une huile d’olive extra vierge, des tomates pelées,
        de l’authentique mozzarella, des champignons frais, et des jambons cuits
        et crus de terroir.
        </Paragraph>
        
        <Image 
        source={require("../../assets/70824054-italien-chef-cuistot-en-uniforme-tenue-fraîchement-cuit-pizza-mains.webp")}
        style={{flex: 1, margin: 20,borderRadius:20,height:75,width:344}}
        />

    </ImageBackground>
  );
};

export default AccueilScreen;
