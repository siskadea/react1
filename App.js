import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet, Button } from "react-native";
import tambah  from './foto/plus.png';
import list  from './foto/chat.jpg';
import account  from './foto/sg1.jpg';
import account2  from './foto/sg2.jpg';
import account3  from './foto/sg3.jpg';
import sk1  from './foto/sk1.jpg';
import bts  from './foto/bts.jpg';
import bts2  from './foto/bts2.jpg';
import safari  from './foto/safari.jpg';
import pantai  from './foto/pantai.jpg';

import tags  from './foto/tag.png';
import vid  from './foto/vid.png';
import feeds  from './foto/feed.webp';
import home  from './foto/home.png';
import search  from './foto/search.png';
import vidio  from './foto/vidio.png';
import toko  from './foto/shop.png';

import { style } from "./style";

const App = () => {
  // return hanya utk menampung 1 kembalian makanya diberi <view>
  return (
    // <Text>Selamat datang</Text>
    <View style={style.container}>
      <View style={{flex:1, flexDirection:'row', backgroundColor:'white'}}>
        <View style={{flex:9, backgroundColor:'white', justifyContent:"center"}}>
          <Text style={{color:'black', fontSize:20, marginLeft:5}}>siskadea</Text>
        </View>
        <TampilanGambar simbol={tambah} />
        <TampilanGambar simbol={list} />
      </View>

      <View style={{flex:2,  flexDirection:'row', backgroundColor:'red'}}>
        <View style={style.viewGambar}>
          <Image source={sk1} style={style.gambarProfile}></Image>
        </View>
        <CardProfile angka="100" keterangan="Postingan"/>
        <CardProfile angka="1000" keterangan="Pengikut"/>
        <CardProfile angka="1001" keterangan="Mengikuti"/>
      </View>

      <View style={{flex:2,backgroundColor:'white'}}>
        <Text style={{fontSize:20, color:"black", marginLeft:5}}>Siska Dea</Text>
        <Text style={{marginLeft:5, color:"black"}}>For :</Text>
        <Text style={style.textBio}>- @bts.bighitofficial</Text>
        <Text style={style.textBio}>- @bts.suga</Text>
        <Text style={style.textBio}>- @fanbase.minyoongi</Text>
      </View>

      <View style={{flex:1,backgroundColor:'white', flexDirection:"row",
        justifyContent:"center"}}>
        <View style={{flex:7, margin:5}}>
          <Button title="Edit Profile" style={{borderRadius:100}}></Button>
        </View>
        <View style={{flex:1, backgroundColor:"white", margin:5}}>
          <Button title="v" ></Button>
        </View>
      </View>
      <View style={{flex:2,backgroundColor:'red', flexDirection:"row"}}>
        <Sorotan gambar={bts} keteranganSorotan="De amigos" />
        <Sorotan gambar={safari} keteranganSorotan="Safari Trip" />
        <Sorotan gambar={pantai} keteranganSorotan="La Playa" />
        <Sorotan gambar={bts2} keteranganSorotan="PURPLE" />
        
      </View>

      <View style={{flex:1,backgroundColor:'white', flexDirection:"row"}}>
        <Tags gambar={feeds} />
        <Tags gambar={vid} />
        <Tags gambar={tags} />
      </View>

      <View style={{flex:2,backgroundColor:'white', flexDirection:"row"}}>
        <Konten gambar={account} />
        <Konten gambar={account2} />
        <Konten gambar={account3} />
      </View>

      <View style={{flex:1,backgroundColor:'white', flexDirection:"row"}}>
        <Tags gambar={home} />
        <Tags gambar={search} />
        <Tags gambar={vidio} />
        <Tags gambar={toko} />
        <Tags2 gambar={sk1} style={{borderRadius:50}}/>
      </View>
    </View>
  );
}

const TampilanGambar = (props) => {
  return(
    <View style={style.viewGambar}>
      <Image source={props.simbol} style={style.gambar}></Image>
    </View>
  )
}

const CardProfile = (props) => {
  return(
    <View style={style.viewGambar}>
      <Text style={style.textProfile}>{props.angka}</Text>
      <Text style={style.keteranganProfile}>{props.keterangan}</Text>
    </View>
  )
}

const Sorotan = (props) => {
  return(
    <View style={style.viewGambar}>
      <Image source={props.gambar} style={style.gambarProfile}></Image>
      <Text style={{color:"black"}}>{props.keteranganSorotan}</Text>
    </View>
  )
}

const Tags = (props) => {
  return(
    <View style={style.viewGambar}>
      <Image source={props.gambar} style={style.gambarTags}></Image>
    </View>
  )
}

const Konten = (props) => {
  return(
    <View style={style.viewGambar}>
      <Image source={props.gambar} style={style.gambarKonten}></Image>
    </View>
  )
}

const Tags2 = (props) => {
  return(
    <View style={style.viewGambar}>
      <Image source={props.gambar} style={style.gambarTags2}></Image>
    </View>
  )
}
export default App;