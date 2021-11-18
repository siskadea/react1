import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from './download.jpeg';
import { style } from "./style";

const Applama = () => {
  // return hanya utk menampung 1 kembalian makanya diberi <view>
  return (
    <View style={style.container}>
      <Teks/>
      <Text style={style.tulisanku}>Selamat Datang</Text>
      <Image source={{uri:'https://placeimg.com/100/100/nature'}} style={{width:100, height:100}}></Image>
      <TextInput style={{borderWidth:1}} />
      <Photo />
      <Tampilan />
      <Tulisan />
      <Photoku />
    </View>
    
  );
}

const Teks = () => {
  return(
    <Text>Instagram</Text>
  )
}

const Photo = () => {
  return(
    <Image source={foto} style={{width:200, height:100}}/>
  )
}

const Tampilan = () => {
  return(
    <View style={{width:100, height:100, backgroundColor:'red'}} />
  )
}
//class selalu menggunakan extends, bisa lebih dr 1
class Tulisan extends Component{
  render(){
    return (
      <Text>Tampilan dari komponen class</Text>
    )
  }
}

class Photoku extends Component{
  render(){
    return(
      <Image source={{uri:'https://placeimg.com/200/200/arch'}} style={{width:200, height:200}} />
    )
  }
}
//inline style langsung styling di tags
//eksternal style dpt diletakkan di file terpisah seperti css
//internal style harus import dr stylesheet

export default App;