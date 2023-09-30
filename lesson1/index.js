// const users= require("./user").ser()
// console.log(users)
const books = require("./books")

const inkoveAction = async ({action , id, name , phone, email}) => {
switch(action) {
    
    case"list":
    const allBooks = await books.getAll()
    console.log(allBooks)
    break;

    case"id":
    const oneBook = await books.getById(id)
    console.log(oneBook)
    break;

    case"add":
    const addBook = await books.add({name,phone,email});
    console.log(addBook);
    break;

    case"update":
    const updateBook = await books.updateById(id, {name,phone,email});
    console.log(updateBook);
    break;
    case"remove":
    const removeBook = await books.removeById(id);
    console.log(removeBook);
    break;


    default:
        console.log("errror")

}
}

// inkoveAction({action:"list"})
// inkoveAction({action:"id",id: "AeHIrLTr6JkxGE6SN-0Rw"})
// inkoveAction({action:"add",name: "Vla", phone:"233724367", email:"vll@gaami.com" })
// inkoveAction({action:"update",id:"6GXozabAO1TyXXTEfN1ms", name: "Vlafffd", phone:"23372624ff367", email:"fvlla;@gaamif.com" })
inkoveAction({action:"remove",id:"e6ywwRe4jcqxXfCZOj_1e"})