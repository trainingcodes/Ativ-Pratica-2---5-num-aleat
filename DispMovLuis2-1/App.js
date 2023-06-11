import { StyleSheet, View } from 'react-native';
import Valor from './src/componet/valores';

const App = () => {
  return (
    <View style={styles.container}>
     <Valor/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  
})

export default App;