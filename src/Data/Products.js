// all item serever requests

// getting the service 
import http from "../Service/http"

const Categeries =
[{name: "Laptop", id: 1}, {name: "Smart Phones", id:2},{name: "Accessories", id:3}]

// getting all items from the server
export function getProducts(){
    return http.get("/items")
}

// creating or updating item
export async function amendProducts(data, userId){
    let product={}

    // creating new item
    if(!data._id){

    // getting the input data and apply it on the new item
     product.Name=data.Name
     product.Description=data.Description
     product.Price=data.Price
     product.Categery=data.Categery
     product.SellingBy =userId

     // sending the server request
     return http.post("/items", product)
    }

    // if updating item
    else if(data._id){

        // geting the new updates from the input data
        product.Name=data.Name
        product.Description=data.Description
        product.Price=data.Price
        product.Categery=data.Categery
        product.SellingBy=userId

        // send a server request
        return http.put(`/items/${data._id}`, product)
    }
    
}

// remove item
export function deleteProduct(product){
    return http.delete(`http://localhost:3000/api/items/${product._id}`)
}

//getting catergeries
export function getCategery(){
    return Categeries
}

