import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import story1   from './foto/story1.jpg';
import story2  from './foto/story2.jpg';
import story3  from './foto/story3.jpg';
import plus  from './foto/plus.png';
import love  from './foto/love.jpg';
import chat  from './foto/msg.png';
import suga  from './foto/suga.jpg';
import home  from './foto/home.png';
import search  from './foto/search.png';
import vidio  from './foto/vidio.png';
import toko  from './foto/toko.png';
import save  from './foto/save.png';
import komen  from './foto/komen.png';
import send  from './foto/send.png';
import { style } from "./style";

const App = () => {
  // return hanya utk menampung 1 kembalian makanya diberi <view>
  return (
    // <View style={style.container}>
    <View style={style.container}>
      <Teks/>
      <Story />
      <TeksStory />
      <IsiBeranda />
      <Footer />
    </View>
    
  );
}

const Teks = () => {
  return(
    <Text style={style.tulisanku}>Instagram                         <Image source={plus} style={{width:35, height:35, borderRadius:150/2}}/>   <Image source={love} style={{width:30, height:30}}/>   <Image source={chat} style={{width:30, height:30}}/> 
    </Text>
  )
}

const Story = () => {
  return(
    <View>
      <Text style={style.tulisanku2}>
        <Image source={story1} style={style.g80}/>  
        <Image source={story2} style={style.g80}/>
        <Image source={story3} style={style.g80}/>       <Image source={story3} style={style.g80}/>
      </Text>
     
    </View>
  )
}

const TeksStory = () => {
  return(
    <Text style={style.tulisanku2}>   Cerita Anda     asriputridga         siskadea_             bydeclaosa
    </Text>
  )
}

const IsiBeranda = () => {
  return(
    <View>
      <Text style={style.tulisanku2}>
        <Image source={story3} style={{width:30, height:30}}/>  siskadea_ 
      </Text>
            <Image source={suga} style={{width:400, height:340}}/>  
      <Text style={{marginLeft:8}}>
            <Image source={love} style={{width:20, height:20}}/>   <Image source={komen} style={{width:20, height:20}}/>   <Image source={send} style={{width:25, height:25}}/>                                                                        <Image source={save} style={{width:20, height:20}}/>
      </Text>
      <Text style={style.tulisanku2}>4.500.000 suka</Text>
      <Text style={style.tulisanku2}>AGUST D in the stage</Text>
    </View>
  )
}
const Footer = () => {
  return(
    <View>
      <Text style={style.tulisanku2}>
           <Image source={home} style={{width:25, height:25}}/>               <Image source={search} style={{width:30, height:30}}/>                 <Image source={vidio} style={{width:30, height:30}}/>                    <Image source={toko} style={{width:25, height:30}}/>                   <Image source={story1} style={{width:25, height:25}}/>
      </Text>  
    </View>
  )
}
//inline style langsung styling di tags
//eksternal style dpt diletakkan di file terpisah seperti css
//internal style harus import dr stylesheet

export default App;