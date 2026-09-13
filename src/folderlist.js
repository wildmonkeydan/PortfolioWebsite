const folderList = document.querySelector("#folder-list");
const ev = new Event("build");

const pages = {
    "blog": [
        {
            "page": "blog/test.html",
            "thumbnail": "img/games/bugyard/bug0.png",
            "title": "Test guhguh"
        },
        {
            "page": "blog/test.html",
            "thumbnail": "img/games/bugyard/bug0.png",
            "title": "Test guhguh"
        },
        {
            "page": "blog/test.html",
            "thumbnail": "img/games/bugyard/bug0.png",
            "title": "Test guhguh"
        }
    ],
    "games": [
        "test1"
    ]
};

folderList.addEventListener("build", (e) => {
    let parent = document.createElement("div");
    parent.setAttribute("class", "list-trio");
    for (let i = 0; i < pages[folderList.ariaLabel].length; i++)
    {
        if (i % 3 == 0)
        {
            folderList.appendChild(parent);
            parent = document.createElement("div");
            parent.setAttribute("class", "list-trio")
        }
        
        const node = document.createElement("a");
        node.setAttribute("href", pages[folderList.ariaLabel][i]["page"]);
        node.setAttribute("class", "list-block");
        const img = document.createElement("img");
        img.setAttribute("src", pages[folderList.ariaLabel][i]["thumbnail"]);
        const label = document.createElement("h4");
        label.innerText = pages[folderList.ariaLabel][i]["title"];

        node.appendChild(img);
        node.appendChild(label);
        parent.appendChild(node);
    }
    folderList.appendChild(parent);
});

folderList.dispatchEvent(ev);