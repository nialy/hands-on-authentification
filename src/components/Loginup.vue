<template>
  
    <div>
    <h1>Page de connection</h1>
     <form @submit="handle_login">
      <div class="user_name_division">
        <label for="user_name" >Nom d'utilisateur</label>
        <input type="text" name="user_name" id="user_name"  v-model="credentials.pseudo">
      </div>
      <div class="user_name_division">
        <label for="user_name" >Mot de passe</label>
        <input type="password" name="user_name" id="user_name"  v-model="credentials.password">
      </div>
      <div class="user_name_division">
        <button class="login_btn">Se connecter</button>
      </div>
    </form>
   
  </div>
  </template>
  
  <script>
    export default{
        name : 'Loginup',
      data(){
        return{
          credentials:{
            pseudo:"",
            password:""
          }
        }
      },
      methods:{
        handle_login(){
          if(this.credentials.pseudo.trim() !="" && this.credentials.password.trim() !=""){
            alert(`Pour atteindre la lune,nous defions la gravité ${this.credentials.pseudo},${this.credentials.password}`)
            alert(`votre email est :${(this.credentials.pseudo.trim().slice(0, 3)  + "@genie.com").toLowerCase()}  `)
          }
          else{
            alert("Veillez verifiez vos donnees!!!")
          }
        }
      }
    }
  </script>
  
  <style>
  .user_name_division {
    display: grid;
    grid-column-start:auto ;
    
    
    
  }
  label {
    width: 100%;
    text-align: left;
    margin-bottom: .5em;
  }
  input {
    width: 98%;
    height: 2em;
    text-align: left;
    margin-bottom: .5em;
    
  
  }
  .login_btn {
    width: 100%;
    margin-top: 1em;
  }
  </style>
  