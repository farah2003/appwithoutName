import { createAppContainer, createBottomNavigator } from "react navigation";
import screen2 from "./screen2/screen2.js";
const tab = createBottomNavigator({
	home: screen2,
	another_screen: another_screen,
	screen1: screen1
});
const AppNavigator = createStackNavigator({
	screen: screen,
	screen2: screen2
});
const App = createAppContainer(tab);
export default App;
