import { View, StyleSheet } from "react-native";

function ReviewComments({navigation}){
    return (
        <View style={styles.commentsDetails}>
            <Text  style={styles.commentsName}>{navigation.getParam('name')}</Text>
            <Text>{navigation.getParam('body')}</Text>
        </View>
    )  
}

const styles = StyleSheet.create({
    commentsDetails:{
        backgroundColor : "#cacaca"
    },
    commentsName :{
        backgroundColor : "#000",
        color : "#fff"
    }
})
export default ReviewComments;