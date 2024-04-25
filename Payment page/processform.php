<?php
if (isset($_POSTP["submit"])){
$paymethod = $_POSTP["PayMethod"]
$amount = $_POSTP["dollar amount"]
if (!empty($paymethod) && (!empty($amount))){
    $link = mysqli_connect("localhost", "root", "sweetlU02", "Animal_Shelter2024" );
    if($link==false){
        die(mysqli_connect_error());
    }
    $sql = "INSERT INTO PaymentPage (PaymentType, PaymentAmount) VALUES ('$paymethod','$amount')";
    if (mysqli_query($link, $sql)){
        echo "Record inserted successfully"
    }else {
            echo "something went wrong"
        }
    
    }else {
        echo "Please provide all informtaion";
    }
}
?>