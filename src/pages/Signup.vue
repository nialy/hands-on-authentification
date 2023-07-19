<template>
  
    <div>
    <h1>Page d'inscription</h1>
     <form @submit="handle_sign">
      <div class="user_name_division">
        <label for="user_name" >Nom d'utilisateur</label>
        <input type="text" name="user_name" id="user_name"  v-model="credentials.pseudo">
      </div>
      <div class="user_name_division">
        <label for="user_name" >Mot de passe</label>
        <input type="password" name="user_name" id="user_name"  v-model="credentials.password">
      </div>
      <div class="user_name_division">
        <label for="user_name" >Comfirmer votre mot de passe</label>
        <input type="password" name="user_name" id="user_name"  v-model="credentials.password">
      </div>
      <div class="user_name_division">
        <button class="login_btn">S'inscrire</button>
      </div>
    </form>
   
  </div>
  </template>
  
  <script>
    export default{
        name : 'Signup',
      data(){
        return{
          credentials:{
            pseudo:"",
            password:"",
            comfirm :""
          }
        }
      },
      methods:{
        handle_sign(){
          if(this.credentials.pseudo.trim() !="" && this.credentials.password.trim() !="" && this.credentials.comfirm.trim() !=""){
            alert(`Welcom  ${this.credentials.pseudo},${this.credentials.password},${this.credentials.comfirm}`)
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
  