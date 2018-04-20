import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'


class MyStyle extends Component{
  render() {
    return(
      <View>
        <Text style={styles.red}>hello red</Text>
        <Text style={styles.bigblue}>hello bigblue</Text>
      </View>
    );
  }
}
//创建自己的样式组
const styles=StyleSheet.create({
  bigblue:{
    color:'blue',
    fontWeight:'bold',
    fontSize:30
  },
  red:{
    color:'red'
  },
});
export default MyStyle