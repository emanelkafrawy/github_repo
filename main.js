//main variables

let theInput = document.querySelector('.get-repos input'),
    getButton = document.querySelector('.git-button'),
    showData = document.querySelector('.show-data');

//focus on input fieled 
window.onload = function () { 
   theInput.focus();
};

//when click on the button 
getButton.onclick = function() {
    getRipos();
};
    //get repos
function getRipos() {
    
    if(theInput.value == ''){

       showData.innerHTML = "<span>please write the Githun UserName..</span>";
    
    } else {
    
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
    
        .then((response) => response.json())

        .then((reposatories) => {

            //empty the message
            showData.innerHTML = ''

            //loop on repos to fetch the needed data
            reposatories.forEach(reposatory => {
               
                //create the main dev element 
                let mainDev = document.createElement('div');
                
                //create text node for repo 
                let reopname = document.createTextNode(reposatory.name);

                //append the text to the main dev
                mainDev.appendChild(reopname);

                //create repo url
                let theUrl = document.createElement('a');

                //create url text for repo
                let theUrlText = document.createTextNode('visit');

                   //append the url to the main dev

                   theUrl.appendChild(theUrlText);

                //add the hypertext reference (href)
                theUrl.href = `https://www.github.com/${theInput.value}/`+reposatory.name ;

                //set attribute target blank
                theUrl.setAttribute('target','_blank');
                
                //append the url to the main dev
                mainDev.appendChild(theUrl);

                // the star span to know count 
                let StarSpan = document.createElement('span');
                
                //create spans count
                let spantext = document.createTextNode(' Stars :' + reposatory.stargazers_count);
                
                //add stars count to the star span
                StarSpan.appendChild(spantext);

                //append starspan to the main dev
                mainDev.appendChild(StarSpan);

                //add class on main dev
                mainDev.className = "repo-box";

                //appen dmain dev to the body
                showData.appendChild(mainDev);
            });
        });

    }
}



