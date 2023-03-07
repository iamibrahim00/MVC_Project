const fs = require('fs')
const path =require('path')
const pa=path.join(path.dirname(process.mainModule.filename),
        'data',
        'products.json' 
        );
const getProdfromfile = (cb)=> {
    fs.readFile(pa,(err,filecontent)=>{
        if(err){
            cb([])
        }
        else{
            cb(JSON.parse(filecontent))
        }
    })
}

module.exports= class Product
{
    constructor(t){
        this.title=t
    }

    save(){
       getProdfromfile(products=>{
        products.push(this)
        fs.writeFile(pa,JSON.stringify(products),(err)=>{
            console.log(err)
        })
       })
    }

   static fetchAll(cb){
      getProdfromfile(cb)   
   }
}
