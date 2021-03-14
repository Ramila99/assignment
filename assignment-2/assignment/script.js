    fetch('user.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: '+err);
            });

        function appendData(data) {
           console.log("in paaned")
            // console.log("append data "+JSON.stringify( data));
            const arr=["Interstellar","Wild","2049","Mulholland Drive","Guardians of the Galaxy","IT","SkyFall","The Forest","Harry Poter"];
            for(i in arr)
            {
            const d=data.user.filter(item => item.movie===arr[i]);
            console.log(d);
            const mainContainer = document.getElementById(d[0].movie);        
            card(d,mainContainer,d.length);
            }
        }

function elements(){
    const user_comment=$('<div class="user-comment"></div>');
    const star=$('<div class="flex-1" title="1/10"></div>');
    const star1=$('<i class="iconify" data-icon="ion-md-star" data-inline="false"></i>');
    const sta=$('<h1></h1>');
    const strong=$('<strong ></strong>');
    const comment_meta=$('<div class="comment-meta"></div>');
    const date1=$('<span class="date"></span>');
    const name1=$('<span class="name"></span>');
    const description=$('<div class="description"></div>');
    const pad=$('<p class="pad"></p>');
     const obj=[user_comment,star,star1,sta,strong,comment_meta,date1,name1,description,pad];
     return obj;
}

function card(data,mainContainer,len)
{   
    for (var i = 0; i < len; i++) 
    {
        const obj=elements();
        const user_comment=obj[0];
        const star=obj[1];
        const star1=obj[2];
        const sta=obj[3];
        const strong=obj[4];
        const comment_meta=obj[5];
        const date1=obj[6];
        const name1=obj[7];
        const description=obj[8];
        const pad=obj[9];

       
        sta.text(data[i].rated);
        strong.text(data[i].title);
        date1.text(data[i].date );
        name1.text(data[i].name);
        pad.text(data[i].comment);
        
        
        star1.appendTo(star);
        sta.appendTo(star);
        star.appendTo(user_comment);  
        strong.appendTo(user_comment);
        date1.appendTo(comment_meta);
        name1.appendTo(comment_meta);
        comment_meta.appendTo(user_comment);
        pad.appendTo(description);
        description.appendTo(comment_meta);
        // $('<hr>').appendTo(comment_meta);
        user_comment.appendTo(mainContainer);
    }
}
function newComment()
{        
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
   const date=new Date();
   const d=date.getDate()+" "+monthNames[date.getMonth()]+" "+ date.getFullYear()+" ";
   const star=document.getElementById("star");
//    const name=document.getElementById("name");
   const title=document.getElementById("til");
   const comment=document.getElementById("com");
   const sub=document.getElementById("submit");
    
   
    const obj=[d,star,title,comment,sub];
    return obj;
}

// let buttons = document.querySelectorAll('.add');
//         buttons.forEach((btn) => {
        
//     btn.addEventListener("click", (event) => {
//         const  comment=newComment();

//         comment[4].addEventListener('click',()=>{
//             $('.addcomment').css('opacity', 0);
//             const element= elements();

//         })
//     });
// });
