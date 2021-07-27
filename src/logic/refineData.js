

// recursively getting all the data from Json and turning it into
// common array along with the level of nesting info, which can be used for
// visualization
//
// check out the goodData.js file in tests folder for reference

let level = 0

// loop through all names
export default function countChildren(array, dataArray = []) {
    for (let el of array) {
        dataArray.push({ name: el.name, indentleft: level })
        if (el.children) {
            // level deeper
            level++
            countChildren(el.children, dataArray)
        }
        // level upper
        level--
    }
    return dataArray
}