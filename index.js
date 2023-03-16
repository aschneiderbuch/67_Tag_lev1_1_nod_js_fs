import fs, { copyFileSync } from "fs"

// in blog1.txt steht bereits "Hello World"
fs.open("./blog1.txt",  /* "a+", */ (err)=>{
    if(err){
        console.log("Error beim fs.open -E->" , err)
    }
    else{
        console.log("Open fs.open hat geklappt")
    }
})

// ändere den Text von blog1.txt
fs.writeFile( "./blog1.txt", "Guten Morgen"  , (err)=> {
    if (err){
        console.log("Error bei fs.write -E-> ", err)
    }
    else{
        console.log("Schreiben in fs.writeFile Guten Morgen hat geklappt")
    }
})

// erstelle neue blog2.txt  und beliebigen text rein
fs.writeFile("./blog2.txt" , "Da ist das 2te txt Ding"  , (err)=>{
    if(err){
        console.log("Error in fs.writeFile 2te.txt -E-> " , err)
    }
    else {
        console.log("2te fs.writeFile läuft " )
    }
})

// neuer ordner assets
fs.mkdir("./assets/", (err) => {
    if(err){
        console.log("Error in mkdir -E-> " , err)
    }
    else{
        console.log("mkdir hat geklappt")
    }
})


// prüfe ob es ordner assets gibt, 
// wenn ja,   dann löschen 
fs.mkdir("./assets/", (err) =>{
    if(err){
        fs.rmdir("./assets/" , (err) => {
            if(err){
                console.log("Error im fs.rm --> " , err)
            }
            else{
                console.log("fs.rmdir löschen hat geklappt")
            }
        })
    }
    else{
        console.log("fs.mkdir ist zu Ende")
    }
} )

if(fs.existsSync("./assets/")){
    console.log("Ordner assets ist schon vorhanden")
}
else{
    console.log("nein Ordner assets noch nicht vorhanden")
}

if(fs.existsSync("./blog1.txt")){
    console.log("ja gibt schon blog1.txt")
}
else{
    console.log("nein gibt noch nicht blog1.txt")
}

