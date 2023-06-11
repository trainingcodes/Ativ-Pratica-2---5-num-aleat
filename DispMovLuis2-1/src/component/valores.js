import React, {useState} from "react";
import { Text, View, TextInput, StyleSheet} from "react-native";

export default () => {
  const [valMin, newMin] = useState('');
  const [valMax, newMax] = useState('');
  const t = () => {
    return  Math.floor(Math.random() * (valMax - valMin) + valMin)
  }

  return(
    <View style ={{width:400}} >
      <TextInput
        style={styles.max}
        placeholder="Valor Maximo"
        onChangeText={newText => newMax(newText)}
        defaultValue={valMax}
      />
       <TextInput
        style={styles.min}
        placeholder="Valor Minimo"
        onChangeText={newText => newMin(newText)}
        defaultValue={valMin}
      />
     <Text style={{textAlign:'center' ,fontSize: 25}}>
        {t()}, {t()} , {t()} , {t()} , {t()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  max:{
    borderColor:'blue',
    borderWidth:3,
    padding:12,
    fontSize:18,
    borderRadius:18,
    height:58,
    margin:13
  },
  min:{
    borderColor:'#40E0D0',
    borderWidth:4,
    padding:13,
    fontSize:23,
    borderRadius:22,
    height:54,
    margin:9
  }
})