import React,{useState} from 'react';
import { Text, View, StyleSheet,Button,Alert,TextInput,TouchableOpacity,ScrollView } from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  const [goal,setGoal]=useState('')
  const [goals,setGoals]=useState([])

  const addGoalHandler=()=>{
    if(!goal){
      Alert.alert('Warning','a goal can not be empty!')
    }
    else{
      const readyGoal={id:new Date().getTime().toString(),value:goal}
    setGoals([readyGoal,...goals])
    }
    setGoal('')
  }

  const clearGoalsHandler=()=>{
    setGoals([])
  }

  const deleteGoalHandler=(id)=>{
    const filteredGoals=goals.filter(goal=>goal.id!==id)
    setGoals(filteredGoals)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputAndButtonContainer}>
        <TextInput style={styles.input} placeholder='your goal' defaultValue={goal}                          onChangeText={goal=>setGoal(goal)}/>
        <Button title='add' onPress={addGoalHandler}/>
        <Button title='clear' onPress={clearGoalsHandler}/>
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={styles.goalsContainer}>{goals.map(goal=><TouchableOpacity key={goal.id} onPress={()=>deleteGoalHandler(goal.id)} style={styles.goalContainer}><Text style={styles.goalStyle}>{goal.value}</Text></TouchableOpacity>)}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  goalContainer:{
    backgroundColor:'#d9c798',
    paddingVertical:10,
    paddingHorizontal:5,
    marginBottom:5,
    borderRadius:5,
  },
  goalsContainer:{
    width:'90%',
    padding:5,
    marginVertical:5
  },
  goalStyle:{fontSize:15},
  input:{
    width:'65%',
    borderWidth:1,
    borderColor:'black',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    padding:6
  },
  inputAndButtonContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'90%',
    padding:5,
  }
});
