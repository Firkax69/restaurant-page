

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");
    

    //Create and append image element
    const image = document.createElement("img");
    image.src = "https://imageio.forbes.com/blogs-images/eustaciahuen/files/2018/11/IMG_65457-1200x800.jpg?height=474&width=711&fit=bounds";
    // image.height = "300";
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant!"
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement("p");
    copy.textContent = "We serve the best food in town. Come in and try!";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;