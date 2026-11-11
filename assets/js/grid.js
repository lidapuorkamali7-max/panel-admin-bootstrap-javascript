const hidetoggle=document.getElementById('hide-toggle')
const showtoggle=document.getElementById('show-toggle')
const sidebar=document.getElementById('sidebar')
const mainbody=document.getElementById('mainbody')

showtoggle.addEventListener('click', function() {
    sidebar.style.display = 'none';

    showtoggle.style.display = 'none';
    hidetoggle.style.display = 'inline';
    mainbody.style.width='100%'
});

hidetoggle.addEventListener('click', function() {
    sidebar.style.display = 'block';

    hidetoggle.style.display = 'none';
    showtoggle.style.display = 'inline';
    mainbody.style.width='calc(100% - 14rem)'
});
const searchicon=document.getElementById('searchicon')
const searcharea=document.getElementById('searcharea')
searchicon.addEventListener('click',function(){
   searcharea.style.display='inline'
   searchicon.style.display='none'
})
const closeicon =document.getElementById('closeicon')
closeicon.addEventListener('click',function(){
    searcharea.style.display='none'
    searchicon.style.display='inline'
})
const expandicon=document.getElementById('expandicon')
const compressicon=document.getElementById('compressicon')
expandicon.addEventListener('click',function(){
    expandicon.classList.add('d-none')
    compressicon.classList.remove('d-none')
    document.documentElement.requestFullscreen()
})
compressicon.addEventListener('click',function(){
    compressicon.classList.add('d-none')
    expandicon.classList.remove('d-none')
    document.exitFullscreen()
})
const bellspan=document.getElementById('bellspan')
const notifications=document.getElementById('notifications')
const profilespan=document.getElementById('profilespan')
const profilesection=document.getElementById('profilesection')
const commentspan=document.getElementById('commentspan')
const comments=document.getElementById('comments')
bellspan.addEventListener('click',function(){
   if(notifications.style.display==='block'){
    notifications.style.display='none'
   }
   else{
    notifications.style.display='block'
    comments.style.display='none'
      profilesection.style.display='none'
   }
})

commentspan.addEventListener('click',function(){
    if(comments.style.display==='block'){
        comments.style.display='none'
    }
    else{
        comments.style.display='block'
         profilesection.style.display='none'
          notifications.style.display='none'
    }
})

profilespan.addEventListener('click',function(){
    if(profilesection.style.display==='block'){
        profilesection.style.display='none'
    }
    else{
         profilesection.style.display='block'
         comments.style.display='none'
          notifications.style.display='none'
    }
})
window.addEventListener('click',function(event){
    if(!notifications.contains(event.target) && !bellspan.contains(event.target)
        &&!commentspan.contains(event.target)&& !comments.contains(event.target) &&
       !profilespan.contains(event.target) && !profilesection.contains(event.target)){
        notifications.style.display='none'
        comments.style.display='none'
        profilesection.style.display='none'
    }
})
const elipsisicon=document.getElementById('elipsisicon')
const bodyheader=document.getElementById('bodyheader')
elipsisicon.addEventListener('click',function(){
    bodyheader.classList.toggle('body-header-open');
})
const grouptitle1=document.getElementById('group-title-1')
const grouplist1=document.getElementById('group-list-1')
grouptitle1.addEventListener('click',function(){
    
    grouplist1.classList.toggle('group-list-active')
})
const grouptitle2=document.getElementById('group-title-2')
const grouplist2=document.getElementById('group-list-2')
grouptitle2.addEventListener('click',function(){
    grouplist2.classList.toggle('group-list-active')
})
const grouptitle3=document.getElementById('group-title-3')
const grouplist3=document.getElementById('group-list-3')
grouptitle3.addEventListener('click',function(){
    grouplist3.classList.toggle('group-list-active')
})