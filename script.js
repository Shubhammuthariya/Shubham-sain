let url = "https://api.github.com/users/"

let btn = document.querySelector("#searchbtn")
btn.addEventListener("click", async () => {
    let username = document.querySelector("#searchbar").value
    let val = await profile(username);
    console.log(val)
    // get profile picture
    let img = document.querySelector("#pic")
    let getimg = val.avatar_url
    img.setAttribute("src" , getimg);

    // get names
    let user = document.querySelector("#username")
    let login = document.querySelector("#loginname")
    let userbio = document.querySelector("#getbio")
    user.innerText = val.name;
    login.innerText = val.login;
    userbio.innerText = val.bio;

    // get follower following & repos
    let f = document.querySelector("#getfollower")
    let count1 = `${val.followers} Follower`;
    f.innerText = count1

    let f2 = document.querySelector("#getfollowing")
    f2.innerText =`${val.following} Following`

    let repo = document.querySelector("#getrepo")
    repo.innerText = `${val.public_repos} repos`
})
async function profile(username) {
    try{
        let find = await axios.get(url+username)
        return find.data;
    }
    catch(e){
        return [];
    }
    
}