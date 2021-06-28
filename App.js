import React,{useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';

import { SafeAreaView, View, FlatList, onsubmit, Text,Input,Image,Card, Dimensions,handleSubmit, Button} from 'react-native';
import axios from 'axios';
import { response } from 'express';
 const App=()=>{
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    //console.log(data);
  };
    const[movie,setMovie]=useState([])

    console.log(movie);
    useEffect(() => {
        getDataUsingSimpleGetCall()
      //  postData()
      displayMovie()

     }, []);
    function getDataUsingSimpleGetCall () {
         axios.get('https://api.tvmaze.com/shows?page=1')
            
                  .then(function(response){
                    setMovie(response.data)
                   //console.log(JSON.stringify(response.data))
            })
            .catch(function(error){
                console.log(error)
            })
        }


        // function postData () {
        //     axios.post('http://api.tvmaze.com/shows?page=1/')
               
        //              .then(function(response){
        //                setMovie(response.data)
        //               console.log(JSON.stringify(response.data))
        //        })
        //        .catch(function(error){
        //            console.log(error)
        //        })
        //    }
        displayMovie = async () => {
            axios({
              url: "/",
              method: "POST",
              data:setMovie
             
            })
              .then(() => {
                console.log("Data has been sent to the server");
                this.getDataUsingSimpleGetCall()
             //console.log(JSON.stringify(response.data))

              })
              .catch((err) => {
                console.log(err);
                
              });
          };



        if(!movie){
            return null
        }
         
    return(
      <View style={{ backgroundColor: '#FFFFFF'}}>
     
          <Text >Movie</Text>
       


          {/* <TextInput
           onChangeText={setMovie}
           value={movie}
        />

        <Button title="Submit" onPress={handleSubmit(onsubmit )} />

           */}
           {/* <FlatList data={movie}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <Text>{item.id + '. ' + item.name}</Text>
                            )}
                
          /> */}
          {/* <div>
          data={movie}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
           <h1> {item.id + '. ' + item.name}</h1>
                            )}

          </div> */}
{/* 
<div>

<form onSubmit={handleSubmit(onSubmit)}>    
<Input type="submit" /> 

      <div>
       { data={movie}}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
           <Text> {item.id + '. ' + item.name}</Text>
                            )}

          </div>

    </form>
    </div> */}







        </View>
        
    )
            }
    
   

export default App
