const fs = require("fs/promises")

// fs.readFile("./file.txt") 
//  .then(data =>  console.log(data))  
//    .catch(error =>  console.log(error))
    
const fileOperation = async({filepath,action, data})=> {
switch(action){
    case "read":
        const buffer = await fs.readFile(filepath, "utf-8")
        console.log(buffer);
        break;
        case"add":
        const resust = await fs.appendFile(filepath,data)
        console.log(resust);
        break;
        case "replace":
        const resusts = await fs.writeFile(filepath,data)
        console.log(resusts);
        break
        default:
            console.log("Error")
}
}
const filepath = "./file.txt"
// fileOperation({filepath, action: "read"})
// fileOperation({filepath, action: "add", data:"\nКоggекс"})
fileOperation({filepath, action: "replace", data:"Коfекс"})