
const obj = [
    { name: "migue", perro: "jano" },
    { name: "james", perro: "james dog" }
]

for (let [k, v] of Object.entries(obj)) {
    console.log(v.name)
    console.log(k)
}

//return:migue
// 0
// james
// 1