import fs, { copyFileSync } from "fs"

fs.open("./blog1.txt", (err)=>{
    if(err){
        console.log("Error beim fs.open" , err)
    }
    else{
        console.log("Open fs.open hat geklappt")
    }
})

// ändere den Text von blog1.txt
fs.write("./blog1.txt" , "input" , (err)=> {
    if (err){
        console.log("Error bei fs.write ", err)
    }
})