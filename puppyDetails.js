

window.onload = () => {
    // SM3-a: We need to access the data that we currently have cached in our localStorage. 
        // Skeleton Syntax to fetch data from localStorage:
            // localStorage.getItem("nameOfTheKeyYouWant")
    let name = localStorage.getItem("name")
    let status = localStorage.getItem("status")
    let cohort = localStorage.getItem("cohort")
    let imageUrl = localStorage.getItem("img")
    // SM3-b: Make sure you have access to the HTML ingredients we need to "append" these new elements we are about to make. 
    let puppyDetailsContainer = document.getElementById("puppy-details-container")

    // SM3-c: Now we want to make new elements to reflect all of the movie data.
        // Title first:
    let newTitleEle = document.createElement("h2")
    newTitleEle.innerText = name
    // Don't forget to append this new element to your container
    puppyDetailsContainer.appendChild(newTitleEle)

    let puppyEle = document.createElement("p")
    puppyEle.innerText = "Status: " + status
    puppyDetailsContainer.appendChild(puppyEle)

    let cohortEle = document.createElement("p")
    cohortEle.innerText = "CohortId: " + cohort
    puppyDetailsContainer.appendChild(cohortEle)

  
        let img = document.createElement('img')
        img.src = imageUrl
        puppyDetailsContainer.appendChild(img);
}