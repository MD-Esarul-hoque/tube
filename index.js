const handleCategory=async()=>{
    const res=await fetch(' https://openapi.programming-hero.com/api/videos/categories');
    const data =await res.json();
    const tube=data.data;
    
    
     
    
    const tabContainer=document.getElementById('tab-container');
    tube.forEach(tube => {

        const div=document.createElement('div');  
        div.innerHTML=`
        <a  class="tab btn normal-case font-medium text-lg text-gray-500" onclick=" handleLoadCategory('${tube.category_id}')">${tube.category}</a>
        
        
        `
        tabContainer.appendChild(div);
        
    });  
    
}
const handleLoadCategory=async(categoryId)=>{
    
    const res= await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    
    const data =await res.json();
    
    const draws=data.data.length
    const drawId=document.getElementById('drawData');
    drawId.innerHTML='';
    if(draws==false){
        
        const drawId=document.getElementById('drawData');
        drawId.innerHTML='';
        const div2=document.createElement('div');
        div2.innerHTML=`
        <img src="./images/Icon.png" alt="" srcset="" class="mx-auto mt-20">
         <p class="font-bold mt-4 text-3xl text-center">Oops!! Sorry, There is no <br class="hidden md:block"> content here</p>
        
         `
        drawId.appendChild(div2);
        
    }
    
   
    const tubeDisplay=data.data;
    
    const cardContainer=document.getElementById('card-container');
    
     cardContainer.innerHTML='';
    //let array=[];

     tubeDisplay.forEach((tube=>{
        // const sortId=document.getElementById('sortViews');
        // const sorting=tube.others.views
        // array.push(sorting);
        // sortId.onclick=function sortView(){
        //     //console.log(array);
        //     const descendingSort=array.sort().reverse()
        //     console.log(descendingSort[0]);
        // }
           
         const convert=((tube.others.posted_date)/3600);
         var hours=parseInt(convert);
         const mConvert=((tube.others.posted_date)/60);
        const minute=parseInt(mConvert/10);
        function hour(){

            var sum='';
            if(hours>0){

             sum +='<p class="text-end -mt-6 text-white text-xs font-normal  ">'+'<span class="bg-slate-900 p-1 rounded-md mr-1">'+ hours +' '+'hrs'+' '+minute+' '+'min ago'+'</span>'+'</p>';
            
            }
            return sum; 
        }

        
    
            
         const div=document.createElement('div');
         
         div.innerHTML=`
             <div class="card p-1 bg-base-100 shadow h-[300px]">
                
                 <img src="${tube.thumbnail }"  alt="Shoes" class="rounded-lg h-[200px] w-[312px]"/>
                 
                 <p >${hour()}</p>
                 <div class="my-5 ">
                    <div class="">
                        <div class="flex gap-4 text-start">
                            <div class="ml-0"><img class="rounded-full h-10 w-10" src="${tube.authors[0].profile_picture}" alt="" /></div>
                            <div >
                            <h2 class="font-bold text-base">${tube.title}</h2>
                            <div class="flex gap-4 ">
                                <div>
                                    <h3 class="font-normal text-sm  my-1 ">${tube.authors[0].profile_name} </h3>
                                </div>
                                <div class="my-auto">
                                <img src="./images/fi_10629607.svg" alt="" srcset="" >
                                </div>
                            </div>
                              
                            <p class="font-normal text-sm ">${tube.others.views}</p>
                            </div>
                        </div>
                        
                         
                        
                    </div>
                </div>
            </div>
        
         `
       cardContainer.appendChild(div);  
        
    
    
     }));
     
     
      
    
}


 
        
const newFile=document.getElementById('blog');
        newFile.onclick = function blog(){
            window.open('http://127.0.0.1:5500/blog.html');
            
        }



handleCategory();
handleLoadCategory('1000')

