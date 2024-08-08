import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({



    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },


    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {

        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Esto es opcional si deseas un fondo semi-transparente

    },
    textTitle: {
        fontSize: 50,
        color: 'black',
        fontWeight: 'bold',
        // textAlign: 'center',
        marginTop: "5%",
        marginBottom: "20%",
    },
    posicionLogo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: "20%",
        borderRadius: 30
    },
    accederButton: {
        width: 200,
        height: 75,
        fontSize: 40,
        backgroundColor: '#ffb70a',
        borderRadius: 10,
        justifyContent: "center",
        alignContent:"center",
        borderColor: 'black',
        textAlign:'center',
        textAlignVertical:'center'
       

    },
    containerButton:{
          borderColor: 'black',
          justifyContent: "center",
          alignContent:"center",
          marginBottom:'10%'

        
    },

contentInput: {
    marginTop: 30,
    gap: 10
},
imputText: {

    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    paddingBottom:20,
    marginTop:10,
  justifyContent:'space-around',
alignItems: 'baseline',
},

organizacionInput:{
    marginTop: '1%',
    width: "90%",
    height:500 ,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
   // marginTop: 10,
   // marginVertical:10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
orInput:{
    marginTop: 20,
},
input: {
    width: 300,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'white',
    marginVertical: 15,

},
resultText: {
    width: 300,
    padding: 15,
    marginTop: 10,
    fontSize: 30,
    color: 'white',
   // backgroundColor: 'rgba(0, 0, 0, 0.5)'
},
})

