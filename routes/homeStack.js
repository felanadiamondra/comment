import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Comment from "../components/Comment";
import ReviewComments from "../components/ReviewComments";

const screens = {
    Home : {
        screen : Comment
    },
    ReviewComments : {
        screen : ReviewComments
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);