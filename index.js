import { constants } from "buffer"
import fs, { copyFileSync, stat, Stats } from "fs"

// in blog1.txt steht bereits "Hello World"
fs.open("./blog1.txt",  /* "a+", */(err) => {
    if (err) {
        console.log("Error beim fs.open -E->", err)
    }
    else {
        console.log("Open fs.open hat geklappt")
    }
})

// ändere den Text von blog1.txt
fs.writeFile("./blog1.txt", "Guten Morgen", (err) => {
    if (err) {
        console.log("Error bei fs.write -E-> ", err)
    }
    else {
        console.log("Schreiben in fs.writeFile Guten Morgen hat geklappt")
    }
})

// erstelle neue blog2.txt  und beliebigen text rein
fs.writeFile("./blog2.txt", "Da ist das 2te txt Ding", (err) => {
    if (err) {
        console.log("Error in fs.writeFile 2te.txt -E-> ", err)
    }
    else {
        console.log("2te fs.writeFile läuft ")
    }
})

// neuer ordner assets
fs.mkdir("./assets/", (err) => {
    if (err) {
        console.log("Error in mkdir -E-> ", err)
    }
    else {
        console.log("mkdir hat geklappt")
    }
})


// prüfe ob es ordner assets gibt, 
// wenn ja,   dann löschen 
fs.mkdir("./assets/", (err) => {
    if (err) {
        /*  fs.rmdir("./assets/" , (err) => {
             if(err){
                 console.log("Error im fs.rm --> " , err)
             }
             else{
                 console.log("fs.rmdir löschen hat geklappt")
             }
         }) */
    }
    else {
        console.log("fs.mkdir ist zu Ende")
    }
})


// prüft ob es Ordner oder Datei schon gibt
if (fs.existsSync("./assets/")) {
    console.log("Ordner assets ist schon vorhanden")
}
else {
    console.log("nein Ordner assets noch nicht vorhanden")
}

if (fs.existsSync("./blog1.txt")) {
    console.log("ja gibt schon blog1.txt")
}
else {
    console.log("nein gibt noch nicht blog1.txt")
}



fs.stat("./assets/", (err) => {
    if (err) {
        console.log("Error fs.stat assets schon vorhanden --> ", err)
    }
    else {
        console.log("Alles gut bie fs.stat -assets noch nicht vorhanden --> ")

    }
})


fs.access("./assets/", fs.constants.F_OK, (err) => {
    if (err) {
        console.log("Error fs.access --> ", err)
    }
    else {
        console.log("fs.access hat geklappt F_OK")
        fs.rmdir("./assets/", (err) => {
            if (err) {
                console.log("Error im fs.rm --> ", err)
            }
            else {
                console.log("fs.rmdir löschen hat geklappt")
            }
        })
    }
})


fs.mkdir("./delete", (err) => {
    if (err) {
        console.log("Erroer bei fs.mkdir   delete.txt --> ", err)
    }
    else {
        console.log("fs.mkdir   delete.txt erstellen hat geklappt")
    }
})


fs.access(("./delete/"), constants.F_OK, (err) => {
    if (err) {
        console.log("fs.access Error   delete.txt --> ", err)
    }
    else {
        console.log("fs.access  existiert , also löschen  ")
        fs.rmdir(("./delete/"), (err) => {
            if (err) {
                console.log(("Error --> problem beim löschen"))
            }
            else {
                console.log("Löschen von delete.txt hat geklappt")
            }
        })
    }
})


fs.writeFile(("./delete.txt"), (""), (err) => {
    if (err) {
        console.log("Error fs.writeFile  --> ", err)

    }
    else {
        console.log("fs.writeFile   erstellen von delete.txt hat geklappt")
    }
})

fs.access(("./delete.txt"), constants.F_OK, (err) => {
    if (err) {
        console.log("Error delete.txt ist nicht vorhanden")
    }
    else {
        console.log("delete.txt ist vorhanden und soll gelöscht werden")

        fs.rm(("./delete.txt"), (err) => {
            if (err) {
                console.log("Error , löschen von delete.txt ist fehlgeschlagen")
            }
            else {
                console.log("löschen von delete.txt hat funktioniert")
            }
        })
    }
})


fs.writeFile(("./Hello.txt"), ("input irgend ein TEXT"), ("utf-8"), (err) => {
    if (err) {
        console.log("anlegen der Datei hat nicht geklappt")
    }
    else {
        console.log("Hello.txt ist angelegt ")
    }
})


// löscht blog2.txt
fs.unlink(("./blog2.txt"), (err) => {
    if (err) {
        console.log("Error beim fs.unlink beim löschen von blog2.txt --> ", err)
    }
    else{
        console.log(" fs.unlink -löschen von blog2.txt hat geklappt")
    }
})


// umbenennen 
fs.access(("./Hello.txt"), constants.F_OK, (err)=>{
    if(err){
        console.log("Error kein zugriff auf Hello.txt nicht gefunden")
    }
    else{
        console.log("Hello.txt vorhanden, jetzt umbenenen ")

        fs.rename(("./Hello.txt"), ("./HelloWorld.txt"), (err)=>{
            if(err){
                console.log("Error   fs.rename   fehler beim umbenennen in HelloWorld.txt")
            }
            else{
                console.log("fs.rename   umbenennen in HelloWorld.txt hat geklappt")
            }
        })


    }
})
