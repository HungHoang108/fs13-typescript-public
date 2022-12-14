import { List } from "./types/ecommerce";

/* Fix all the possible bugs you might find in the codes below */

const users = new List()
const products = new List()

users.fetchAll("https://api.escuelajs.co/api/v1/users")
products.fetchAll("https://api.escuelajs.co/api/v1/products")

console.log(users.sortList("desc")) //Expect to see users array in new order of id decreasing

/** find user by email.
 * Take a parameter of type string.
 * Return a found user or null*/
const findUserByEmail = (email : string) => {
    users.find(user => user.email === email ? user.email : null)
}
const foundUser = findUserByEmail("john@mail.com")
console.log(foundUser) //expect to see user with email "john@mail.com" in the console

/** Find all products with titles matched the search, case insentitive. 
 * Take a parameter of type string.
 * Return an array
 */
const findProductsByText = (search : string) => {
    products.filter(products => products.title && products.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) )
}
const foundProducts = findProductsByText("shirt")
console.log(foundProducts) //expect to see an array of all found products

const testPush1 = users.push(
    {
        id: 1,
        email: "william@gmail.com",
        password: "william",
        name: "William",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    },
    {
        id: 90,
        email: "henry@gmail.com",
        password: "henry",
        name: "Henry",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    }
)

const testPush2 = users.push(
    {
        id: 90,
        email: "william@gmail.com",
        password: "william",
        name: "William",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    },
    {
        id: 100,
        email: "henry@gmail.com",
        password: "henry",
        name: "Henry",
        role: "customer",
        avatar: "https://api.lorem.space/image/face?w=640&h=480&r=6751"
    }
)

console.log(testPush1) // expect to see 0
console.log(testPush2) // expect to see 1

console.log(users) // expect too see 2 more users added in the end of array