import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { render } from 'react-dom';
import { appendFileSync } from 'fs';
import axios from "axios";
import Weather from './Weather';
const API_KEY ="84a93b9d1e5cc12704e59509e34463f9";
export default class extends React.Component {
  state={
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const{
      data:{
        main:{temp},
        weather
      }
    }=await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
      );
 
    this.setState({
      isLoading:false,
      condition:weather[0].main,
      temp
    });
  };
  getLocation = async()=>{
    try{
      this.getLocation();
      }catch(error){
      alert("Cant find you","So sad");
      }
    }
   
    render(){
      const { isLoading, temp, condition } = this.state;
      return isLoading ? (
        <Loading />
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
      );
    }
    
  }
 
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
