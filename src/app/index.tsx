import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen(){
  return <View style={styles.container}>
    <Text style={styles.title}>Student Profile</Text>
    <Image
     source={{
      uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA7Yg1ggjhKSkXPtqhBgdDOiKhBaQ4Ftps7VCyh5G80w&s=10"
     }} 
     style={styles.profileImage}
    />
    <Text style={styles.name}>Adolf Stalin</Text>
    <Text style={styles.course}>BSIT</Text>
    <Text style={styles.year}>Third-year Student</Text>
    <Pressable style={styles.button}>
      <Text>Say Hi?</Text>
    </Pressable>
  </View>;
}


const styles = StyleSheet.create({
 container:{
  flex: 1,
  justifyContent: "center",
  backgroundColor:"black",
  alignItems: "center",
  padding: 20,

 },
 title:{
  fontSize:28,
  fontWeight:"bold",
  marginBottom: 30,
  color: "white",
 },
 name:{
  fontSize: 24,
  fontWeight: "bold",
  color:"white",
  marginTop:10,
  textAlign:"center",
 },
 course:{
  backgroundColor:"gray",
  fontSize:20,
  padding:5,
  margin:10,
  borderRadius:10,
  textAlign:"center",
  color:"white",

 },

 year:{
  backgroundColor:"grey",
  textAlign:"center",
   fontSize:20,
   padding:5,
   margin:10,
   borderRadius:10,
   color:"white",
 },
 profileImage:{
  height:250,
  width:250,
  borderRadius:250,
 },
 button:{
  color:"white",
  padding: 5,
  backgroundColor:"white",
  margin:10,
  fontWeight:"bold",
  alignItems:"center",
  borderRadius:10,
  fontSize:40, 
 }
});