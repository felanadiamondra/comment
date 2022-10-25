import { View, Text, Button, StyleSheet } from "react-native";
import {useEffect, useState} from "react";
import { ScrollView } from "react-native-web";


function Comment({navigation}){
    const [todos, setTodos] = useState([
        {title : "Mangue" , color : "Yellow" , id:1},
        {title : "Pomme" , color : "Green" , id:2},
        {title : "Fraise" , color : "Red" , id:3}
    ]);
    const [comments,  setComments] = useState([]);

    // todos.map((todo, i) => console.log(todo.color));

    // const handleClick  = (data) =>{
      
    // } 
    const getComments = () =>{
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => setComments(json));
    }

    useEffect(()=>{
        getComments();
        console.log(comments.body);
    }, [])


    return (
        // <ScrollView>
        //     {
        //         todos.map((todo, i ) =>(
        //             <View style={styles.commentItem}>
        //                 <Text onClick={() => navigation.navigate("ReviewComments", data)} key={todo.id}>{todo.title}</Text>
        //             </View>
        //         ))
        //     }
        // </ScrollView>
        <ScrollView>
            {/* {
                comments.forEach((coms) =>{
                    <View key={coms.id}>
                         <Text style={styles.commentItem}>
                        {coms.name}
                        </Text>
                    </View>
                   
                })
            } */}
            
            <Text style={styles.commentItem}>{comments.name}</Text>
                  
     
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    commentItem:{
        padding : 20,
        borderRadius : 10,
        backgroundColor : "#cacaca"
    }
})

export default Comment;