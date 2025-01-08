import { createStackNavigator } from '@react-navigation/stack';
import ChurchesScreen from '@/app/screens/church/churches.screen';
import ChurchProfileScreen from './church-profile.screen';

const Stack = createStackNavigator();

const ChurchesStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="churches" component={ChurchesScreen}/>
        <Stack.Screen name="church-profile" component={ChurchProfileScreen}/>
    </Stack.Navigator>
  );
};

export default ChurchesStack;
