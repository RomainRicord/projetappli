import { Image, View, Text, ImageBackground } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const Welcome = (props) => {
  return (
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
      <Card.Content style={{backgroundColor:'rgba(0,0,0,0.7)',margin:20,color:'white'}}>
        <Title style={{textAlign:'center',color:'white',marginTop:20,marginBottom:20}}>Qui sommes-nous ?</Title>
        <Paragraph style={{textAlign:'center',color:'white'}}>
          Nous sommes installés en plein coeur de TERRES-DE-CAUX depuis le 31
          mai 2010.
        </Paragraph>
        <Paragraph style={{textAlign:'center',color:'white',margin:20,paddingTop:20,paddingBottom:20}}>
          Nous vous accueillons, dans un cadre agréable, tous les jours sauf le
          mercredi, pour vous proposer nos délicieuses pizzas à emporter. Pour
          mieux vous satisfaire nous avons mis en place un service de livraison
          à domicile ou sur votre lieu de travail.
        </Paragraph>
      </Card.Content>

        <Button mode="contained" onPress={() => props.SetWelcome(true)} color="rgba(0,0,0,0.7)">Rentrer</Button>

    </ImageBackground>
  );
};

export default Welcome;
