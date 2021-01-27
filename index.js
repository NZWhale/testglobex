import {createCellNumberDropdown, createColorDropdown, createTable, createSubmitButton} from "./utils.js"

window.addEventListener("load", function() {
    const selectedCellAndColor = {
        cellNumber: "",
        color: ""
    }
    const rootEl = document.getElementById("root")
    const form = document.createElement("div")
    const dropdown = createCellNumberDropdown(12, selectedCellAndColor)
    const colorDropdown = createColorDropdown(selectedCellAndColor)
    const submitButton = createSubmitButton(selectedCellAndColor)
    const table = createTable(3, 4)
    form.append(dropdown, colorDropdown, submitButton)
    rootEl.append(form, table)
})

