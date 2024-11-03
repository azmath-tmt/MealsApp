import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './assets/screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverview from './assets/screens/MealsOverview';
import MealsDetails from './assets/screens/MealsDetails';
import {createDrawerNavigator} from "@react-navigation/drawer"
import FavoriteScreen from './assets/screens/FavoriteScreen';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import FavoriteContentProvider from './assets/store/context/FavoriteContent';
import { Provider } from 'react-redux';
import { store } from './assets/store/redux/store';



const Stack = createNativeStackNavigator()

const Drawer  = createDrawerNavigator()

export default function App() {


  function DrawerNavigatior(){
    return (

      <Drawer.Navigator screenOptions={{

        // headerTintColor: '#ff4500',
        headerStyle:{backgroundColor:'#fa8072'},
        // drawerInactiveBackgroundColor:"white"
        drawerActiveBackgroundColor : '#ff00ff',
        drawerActiveTintColor : 'white'


      }}>

        <Drawer.Screen name='Categories' component={CategoryScreen}
         options= {{
          drawerIcon : ({color,size})=> <MaterialIcons name="category" size={size} color={color} />
            }}
          /> 


        <Drawer.Screen name= "Favorites" component={FavoriteScreen} options={{

          drawerIcon : ()=> <MaterialIcons name="favorite" size={24} color="#7cfc00" />

        }} />

      </Drawer.Navigator>

    )
  }





  return (
     <>

      <StatusBar style='auto'  />

      {/* <FavoriteContentProvider> */}

      <Provider store={store}>


        <NavigationContainer>

          <Stack.Navigator screenOptions={{

            headerStyle : {backgroundColor : '#ff7f50'},
            contentStyle : {backgroundColor: '#fafad2'}



          }} >

            <Stack.Screen name = "MealsCategories" component={DrawerNavigatior} 
            options={ {
              headerShown : false
              } }   />


            <Stack.Screen name = "MealsOverview" component={MealsOverview}   />

            <Stack.Screen name = "MealsDetails" component={MealsDetails} />



          </Stack.Navigator>

        </NavigationContainer>

      </Provider>

      {/* </FavoriteContentProvider> */}

    </>
  );
}