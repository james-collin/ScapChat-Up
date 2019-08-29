import { createStackNavigator } from "react-navigation";

import DiscoverScreen from "@views/DiscoverScreen";
import AddFriendScreen from "@views/AddFriendScreen";

const StartNavigator = createStackNavigator({
  DiscoverScreen:DiscoverScreen,
  AddFriendScreen:AddFriendScreen,
});

export default StartNavigator;
