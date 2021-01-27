export const createTable = (countOfColumns, countOfRows) => {
    const table = document.createElement("table")
    table.setAttribute("align", "center")
    table.setAttribute("width", "auto")
    table.setAttribute("border", "1")
    table.setAttribute("id", "table")
    for (let i = 0; i < countOfColumns; i++) {
        const num = 1
        const row = document.createElement("tr")
        for (let j = 0; j < countOfRows; j++) {
            const cell = document.createElement("td")
            if (j % 2 === 0) {
                cell.setAttribute("bgcolor", "red")
                cell.setAttribute("width", "28px")
            } else {
                const font = document.createElement("font")
                font.setAttribute("color", "blue")
                font.setAttribute("face", "Italic")
                font.innerHTML = "blue"
                cell.append(font)
                cell.setAttribute("width", "28px")
            }
            row.append(cell)
        }
        table.append(row)
    }
    return table
}

export const createCellNumberDropdown = (content, selectedCellAndColor) => {
    const dropdownDiv = document.createElement("div")
    const contentDiv = document.createElement("div")
    const dropdownButton = document.createElement("input")
    dropdownButton.setAttribute("type", "button")
    for (let i = 0; i < content; i++) {
        const contentEl = document.createElement("a")
        contentEl.addEventListener("click", function a() {
            selectedCellAndColor.cellNumber = i
            dropdownButton.setAttribute("value", selectedCellAndColor.cellNumber+1)
            console.log(selectedCellAndColor.cellNumber)
        })
        contentEl.innerText = i + 1
        contentDiv.append(contentEl)
    }
    dropdownDiv.setAttribute("class", "dropdown")
    contentDiv.setAttribute("class", "dropdown-content")
    dropdownButton.setAttribute("class", "dropbtn")
    dropdownDiv.append(dropdownButton, contentDiv)
    return dropdownDiv
}

export const createColorDropdown = (selectedCellAndColor) => {
    const arrayOfColor = ["black", "purple", "red", "green", "yellow", "blue"]
    const dropdownDiv = document.createElement("div")
    const contentDiv = document.createElement("div")
    const dropdownButton = document.createElement("input")
    dropdownButton.setAttribute("type", "button")
    arrayOfColor.forEach((color) => {
        const contentEl = document.createElement("a")
        contentEl.setAttribute("cursor", "pointer")
        contentEl.innerHTML = color
        contentEl.addEventListener("click", function a() {
            selectedCellAndColor.color = color
            dropdownButton.style.backgroundColor = selectedCellAndColor.color
            dropdownButton.setAttribute("value", selectedCellAndColor.color)
            console.log(selectedCellAndColor.color)
        })
        contentDiv.append(contentEl)
    })
    dropdownDiv.setAttribute("class", "dropdown")
    contentDiv.setAttribute("class", "dropdown-content")
    dropdownButton.setAttribute("class", "dropbtn")
    dropdownDiv.append(dropdownButton, contentDiv)
    return dropdownDiv
}

export const createSubmitButton = (selectedCellAndColor) => {
    const button = document.createElement("input")
    button.setAttribute("type", "button")
    button.setAttribute("value", "Apply")
    const cells = document.getElementsByTagName("td")
    button.addEventListener("click", function a(cellNumber, color) {
        console.log(selectedCellAndColor)
        for (let i = 0; i < cells.length; i++) {
            if (i === selectedCellAndColor.cellNumber) {
                cells[i].setAttribute("bgcolor", "white")
            } else {
                cells[i].setAttribute("bgcolor", selectedCellAndColor.color)
            }
        }
    })
    return button
}