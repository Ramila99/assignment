Name:ramila

I've used html,css,javascript, JQuery,php for this assignment

first login in to application by enter your name..

hover on Movie images to view comments and rating
click on "add" button to add your rating and comments

I've used php to create JSON file
and  local storage for temporary storage

1]Login page:I didn't store password as there was no need..
  store the name to use for user..
  
 2] Main page: there are 9 Movie images if you hover on them you can see 
    comments and rating ,they are fetched from User.json 
   
    you can add your comment and rating by clicking on "add" button
    after clicking on "add" button a window popup where you can add
    star,comments
    if your stars are greater than 5 aler message will popup
    to achieve this I've used eventListener which will triggere on keyup event
    
    after entering your comments and star
    these comments and star are going to add in movie review container
    and after that will the help ajax and php this comments ,star along with date and your name
    are going to add json file 
