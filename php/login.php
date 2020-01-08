<?php
include ("../php/connect.php");    
      $email = $_POST["email"];
      $password = $_POST["password"];

      $sql = "select email , password from tbl_user";
      $result =mysqli_query($con,$sql);
      while($row=mysqli_num_rows($result) ){
           if($email==$row["email"]){
              $status  = "LogIn Successfull";
           }else{
               $status = "Fail Log In";
           }
      }
      echo $status ;
      
      
      
    

?>