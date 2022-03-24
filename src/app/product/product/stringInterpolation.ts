
 export class StringInterpoliation{
     employee=[
         [1, "john","I don't know"],
         [2, "sai", "Tcs"],
     ];


     //Property Binding
     getStatus= true;
     constructor(){
        if(this.getStatus==true){
            setTimeout(()=>{
                this.getStatus=false;
            },20000)
        }
        else{
            this.getStatus=true;
        }
     }
}