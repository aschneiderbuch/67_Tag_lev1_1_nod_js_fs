import fs, { copyFileSync } from "fs"

// in blog1.txt steht bereits "Hello World"
fs.open("./blog1.txt", (err)=>{
    if(err){
        console.log("Error beim fs.open" , err)
    }
    else{
        console.log("Open fs.open hat geklappt")
    }
})

// ändere den Text von blog1.txt
fs.writeFile( "./blog1.txt", "Guten Morgen" ,   (err)=> {
    if (err){
        console.log("Error bei fs.write ", err)
    }
    else{
        console.log("Schreiben in fs.writeFile Guten Morgen hat geklappt")
    }
})

// erstelle neue blog2.txt  und beliebigen text rein
fs.writeFile("./blog2.txt" , "Da ist das 2te txt Ding"  , (err)=>{
    if(err){
        console.log("Error in fs.writeFile 2te.txt " , err)
    }
    else {
        console.log("2te fs.writeFile läuft " )
    }
})

