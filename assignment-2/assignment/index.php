<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
<?php
// if ( isset($_POST['submit'] ) ) 
// {
    $star=$_POST['star'];
    $title=$_POST['title'];
    $comment=$_POST['comment'];
    $name=$_POST['name'];
    $date=$_POST['date'];
    $movie=$_POST['movie'];
    
// $file = fopen("index.txt",'a+');
// fwrite($file,$title);
// fwrite($file,"\n".$comment);
// fwrite($file,"\n".$name);
// fwrite($file,"\n".$date);
// fwrite($file,"\n".$movie);
// fclose($file);
// }
$obj = array(
    'movie' => $movie,
    'rated' => $star,
        'name'=>$name,
        'title'=>$title,
        'date' =>$date,
        'comment'=>$title
    
);

$inp = file_get_contents('demo.json');
$tempArray1 =(json_decode($inp, true));
//echo obj;
// $tempArray[]=$obj;

array_push($tempArray1['user'],$obj);
$jsonData = json_encode($tempArray1);
file_put_contents('demo.json',$jsonData);

?>
</body>
</html>
