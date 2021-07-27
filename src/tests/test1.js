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

let line = ''
let level = 0
// loop through all names
function countChildren(array) {
    for (el of array) {
        line += `level ${level} ${el.name}\n`
        if (hasChild(el)) {
            // level deeper
            level++
            countChildren(el.children)
        }
        // level upper
        level--
    }
    return line
}

console.log(countChildren(data.data))
// console.log(data.data[0].children[0].children[0].children == true) // false