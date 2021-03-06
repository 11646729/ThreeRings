import axios from "axios"

// -------------------------------------------------------
// Function to concatenate 3Rings Shift data volunteer names into a string
// -------------------------------------------------------
const concatenateShiftListNames = (shiftsData) => {
  let loop = 0
  let innerLoop = 0
  let namesString = ""

  do {
    if (shiftsData[loop].volunteers.length !== 0) {
      do {
        if (innerLoop < shiftsData[loop].volunteers.length - 1) {
          namesString += shiftsData[loop].volunteers[innerLoop].name + " & "
        } else {
          namesString += shiftsData[loop].volunteers[innerLoop].name
        }

        innerLoop++
      } while (innerLoop < shiftsData[loop].volunteers.length)

      shiftsData[loop]["nameString"] = namesString
    } else {
      shiftsData[loop]["nameString"] = "NO-ONE SIGNED UP"
    }

    namesString = ""
    innerLoop = 0

    loop++
  } while (loop < shiftsData.length)

  return shiftsData
}

// -------------------------------------------------------
// Function to fetch all 3Rings Shift data
// -------------------------------------------------------
export var getThreeRingsModifiedShiftsData = async (url) => {
  // Guard clause
  if (url == null) {
    console.log(
      "Error: url == null in getThreeRingsModifiedShiftsData in threeRingsUtilities.js"
    )
    return
  }

  try {
    let resultData = await axios({
      url: url,
      method: "GET",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
    })

    // // Now concatenate string with volunteer names
    if (resultData.length !== 0) {
      concatenateShiftListNames(resultData.data.shifts)
    }

    return resultData.data
  } catch (error) {
    console.log(error)
  }
}

// -------------------------------------------------------
// Function to fetch all 3Rings News data
// -------------------------------------------------------
export var getThreeRingsNewsData = async (url) => {
  // Guard clause
  if (url == null) {
    console.log(
      "Error: url == null in getThreeRingsNewsData in threeRingsUtilities.js"
    )
    return
  }

  try {
    let resultData = await axios({
      url: url,
      method: "GET",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
    })

    return resultData.data
  } catch (error) {
    console.log(error)
  }
}

// -------------------------------------------------------
// Function to fetch all 3Rings Events data
// -------------------------------------------------------
export var getThreeRingsEventsData = async (url) => {
  // Guard clause
  if (url == null) {
    console.log(
      "Error: url == null in getThreeRingsEventsData in threeRingsUtilities.js"
    )
    return
  }

  try {
    let resultData = await axios({
      url: url,
      method: "GET",
      timeout: 8000,
      headers: {
        "Content-Type": "application/json",
      },
    })

    return resultData.data
  } catch (error) {
    console.log(error)
  }
}

export { getThreeRingsNewsData as default }
