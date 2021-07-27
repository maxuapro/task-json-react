const data = {
    data: [
        {
            name: "Plant",
            children: [
                {
                    name: "Tree",
                    children: [
                        {
                            name: "Oak",
                            children: []
                        }

                    ]
                },
                {
                    name: "Flower",
                    children: [
                        {
                            name: "Tulip",
                            children: []
                        },
                        {
                            name: "Rose",
                            children: []
                        }

                    ]
                },

            ]
        },
        {
            name: "Animal",
            children: [
                {
                    name: "Crustacean",
                    children: [
                        {
                            name: "Crab",
                            children: [
                                {
                                    name: "Spider-Crab",
                                    children: []
                                }
                            ]
                        },
                        {
                            name: "Shrimp",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}

const hasChild = obj => {
    return obj.children ? true : false
}


let level = 0
const dataArray = []
// loop through all names
function countChildren(array) {
    for (el of array) {
        dataArray.push({ name: el.name, indentleft: level })
        if (el.children) {
            // level deeper
            level++
            countChildren(el.children)
        }
        // level upper
        level--
    }
    return dataArray
}

console.log(countChildren(data.data))
// console.log(data.data[0].children[0].children[0].children == true) // false

