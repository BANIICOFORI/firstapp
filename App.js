import React from 'react';
import { Text,View,Button,TextInput,StyleSheet,Image,TouchableOpacity} from 'react-native';
//import profile from "./assets/profile.jpg";

function App() {
  return <View style={Styles.container}>
    <View style={Styles.DetialsContainer}>
      <Text style={Styles.toplable}>Edit Profile</Text>
    </View>
    <Image style={Styles.Image} source={require("./assets/profile.jpg")} />

    <View style={Styles.TextEmail}>
      <View>
        <Text>School</Text>
        <TextInput style={Styles.TextFild1} />
      </View>
    </View>
    <View>
      <View>
        <Text>Email Address</Text>
        <TextInput style={Styles.TextFild1} />
      </View>
    </View>
    <View style={Styles.TextEmail}>
      <View>
        <Text style={Styles.lablesColor}>Name</Text>
        <TextInput style={Styles.TextFild} />
      </View>
    </View>
    <View style={Styles.TextEmail}>
      <View>
        <Text style={Styles.lablesColor}>Nick Name</Text>
        <TextInput style={Styles.TextFild} />
      </View>
    </View>
    <View style={Styles.TextEmail}>
      <View>
        <Text style={Styles.lablesColor}>Emergency Contact</Text>
        <TextInput style={Styles.TextFild} />
      </View>
    </View>
    <TouchableOpacity>
      <View style={Styles.Button}>
        <Text style={Styles.TextColor}>UPDATE PROFILE</Text>
      </View>
    </TouchableOpacity>
  </View>

}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 40
  },
  Image: {
    width: 100,
    height: 120,
    marginVertical: 4,
    alignSelf: "center",
    borderRadius: 50
  },
  DetialsContainer: {
    flexDirection: "row",
    marginVertical: 3
  },
  toplable: {
    flex: 1,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 15
  },
  School: {
    marginVertical: 10
  },
  TextEmail: {
    marginVertical: 25
  },
  TextFild: {
    borderBottomWidth: 0.5,
    marginVertical: 1,
    fontWeight: 'bold',
    fontSize: 20
  },
  TextFild1: {
    marginVertical: 1,
    fontWeight: 'bold',
    fontSize: 20
  },
  lablesColor: {
    color: "#2196F3",
    fontSize: 14,
    fontWeight: 'bold',
  },
  Button: {
    padding: 20,
    backgroundColor: "#2196F3",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 40,
  },
  TextColor: {
    color: "white",
    fontSize: 20,
  }
});
export default App;
