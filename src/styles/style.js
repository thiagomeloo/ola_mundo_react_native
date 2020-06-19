import { StyleSheet} from 'react-native'
import Constants from 'expo-constants'

import colors from './colors'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:colors.background,
        paddingTop: Constants.statusBarHeight + 30,
        
      },
      titulo:{
        color:colors.primary,
        textAlign:"center",
        fontSize:30
      },
      sub_titulo:{
        color:colors.primary,
        textAlign:"center",
        fontSize:24
      },
      texto:{
        color:colors.primary,
        marginTop:20,
        textAlign:"center",
        fontSize:40
      },
      btn:{
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius:100,
        padding: 10,
        marginTop:10,
        marginHorizontal:50,
      },
      btnFont:{
        color:colors.secondary,
        fontSize:15
      }

  });
  
export default styles;

