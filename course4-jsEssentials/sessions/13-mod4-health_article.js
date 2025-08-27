


// Step 1: Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Step 2: Define the URL of the JSON file
//var url = './13-mod4-health_article.json';//local has cors issue
var url = 'https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/health.json';

// Step 3: Open a GET request (asynchronous)
xhr.open('GET', url, true);

// Step 4: Tell XHR we expect JSON
xhr.responseType = 'json';

// Step 5: Handle the response once loaded
xhr.onload = function () {
    if (xhr.status === 200) {  // request successful
        var data = xhr.response;   // full JSON object
        var articles = data.articles; // the "articles" array
        var articlesDiv = document.getElementById('articles');

        // Loop through each article and build HTML
        articles.forEach(function (article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // Title
            var title = document.createElement('h2');
            title.textContent = article.title;

            // Description
            var description = document.createElement('p');
            description.textContent = article.description;

            // Ways to achieve
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';
            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function (way) {
                var li = document.createElement('li');
                li.textContent = way;
                waysList.appendChild(li);
            });

            // Benefits
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';
            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function (benefit) {
                var li = document.createElement('li');
                li.textContent = benefit;
                benefitsList.appendChild(li);
            });

            // Put everything together
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error("Failed to load JSON. Status:", xhr.status);
    }
};

// Step 6: Send the request
xhr.send();
