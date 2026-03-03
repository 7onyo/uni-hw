function searchPosts() 
{
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let articles = document.getElementsByClassName("blogPost");
    for (let i = 0; i < articles.length; i++) 
    {
        let title = articles[i].getElementsByClassName("blogPostTitle")[0].innerText.toLowerCase();
    
        if (title.includes(searchInput)) 
        {
            articles[i].style.display = "block";
        } 
        else 
        {
            articles[i].style.display = "none";
        }
    }
}