###recipEATS! Project (Heaven Seven)

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/t_Gradient fade/v1706806166/recipEATS-LandingPage1_d6ojpf.avif" alt="recipEATS!" width="400" height="400">

Who's ready to indulge in their favorite recipes? Our "Heaven Seven" team -- Haiyah, Tim, Marlon & Lenny -- have accepted the challenge. We created an application using ReactJS to enable any picky eater to filter out those ingredients that just doesn't fit into their diet, but still enjoy a variety of the most fabulous handpicked recipes, over and over again! Hence our name, `*recipEATS!*` Our landing page invites you to bite in, then explore the various recipes we offer. However, to gain our trust, use our special search bar that eliminates the ingredients you have to avoid, yet allows you to zero-in on that dish's recipe, worry-free. The four of us worked closely together, practicing and using the below **Project Tools & Skills**:
- React Hooks
- React Router 6.2.1
- Forms
- Controlled Inputs
- Event Handlers
- Fetch API
- Promises
- Data Manipulation & Parsing
- Helper Functions
- HTML, CSS, JS
- CSS Grid (optional) 
- Flexbox (optional)
- Render.com backend deployment
- Netlify.com frontend deployment
- Self learning
- ChatGPT
- AI

# TABLE OF CONTENTS  
- Features
- Installation
- Components
- Bonus Items
- Contributing

# Features
-Our `landing page` is a winner. It's simple, but the complex, carousel of visuals almost make it edible. One bite, and you're hooked into our world of recipes. It also has an `About Us` link, connecting the user to us -- the team that built this app.

-Functionality immediately by clicking the imagery, navigating to recipes.

-A unique `search bar` that defines the phrase 'dietary bliss by omission'.

-Besides the incredible recipes, the `reviews` section allows the user to best steer the next avid recipe-r towards recipes aligned with their cravings.

## Installation
To run the app locally, follow these steps:

1st..

Clone the repository: git clone https://github.com/TimNatal1887/RecipEATS-Project.git

2nd...

Navigate to the project directory:

cd `project-startup-challenge`

3rd...

Install dependencies: npm i

Start the development server: npm start

### Components
`About` Component
The `About component` simply links the go-to information for the **About Us** page that informs any user on the make-up and contact info about our group, Heaven Seven -- 4 creators of the **recipEATS!** site/app.

`Landing` Component
For the `Landing component` page, this is your first stop as a user. From this page, there's a 'carousel' medley of images, each one if clicked on, takes you to the more detailed page displaying the various recipes we provide for you.

`Carousel` Component
The `Carousel component` is one that 

`Recipe` Component
The `Recipe component` is the .

`Recipes` Component
The `Recipes component` -- not to mixed up with the above 'Recipe' component, displays every single detail available per recipe: reviews, ingredients, different recipes, and is a breakdown of these details once the user clicks on each recipe.

`Header` Component
The `Header component` is up top, as its name suggests, on the landing page. It's the simplest component, carrying our header display title.

`ReviewsForm` Component
The `ReviewsForm` holds a separate file for each fetch. For the two functions, a fetch grabs all the recipe data, and another fetch grabs one recipe based on the ID.

`RecipeDetails` Component
Our `RecipeDetails component` gives the user a taste of some very entertaining details about the recipe. From their 'country of origin' to 'Spice Level' and from 'Meal Prep' time to  giving the user the option to 'Add review'. 

### Routing
We used (5) Routes for the following files below:

-Index.html

-About.jsx

-Recipes.jsx

-Recipe.jsx

-RecipeDetails.jsx

#### Bonus Items
Stretch Goals:

-A fun option to invite a user, enabling them on our site/app to input their own recipes, according to the same object structure of our `recipes` data-point.

-Reviews or comments from the user on any recipe resource that persists in JSON server.

-Most, if not all our images, are stored and uploaded in a Cloudinary account, owned by one of our squad members: Marlon. 

-Sorting and searching for data, filtering it down to maybe a few handful of recipes, based on an ingredient(s) to be excluded.

#### Contributing
Contributions: 
You are welcome to contribute to our 'recipEATS! Project', follow these simple steps below:

**Fork the repository**
Create a new branch: git checkout -b 'feature/new-feature'

Commit your changes: git commit -am "I added new to your project..."

Push to the branch: git push origin 'feature/new-feature'

Submit a pull request.

# 10 USER STORIES

-The app should be free to download and available on both Apple App, Google Play stores.

-The app should include filters to cater for user customization for recipes 'without' certain ingredients.

-As a first-time user, navigation and smooth functionality to minimize frustration is key.

-As a user suffering from allergies, the app must make sense to show me my options.

-As a repeat user, any new discovery should lead to continued revisits.

-As an avid user, there should be opportunities through the app to build a community.

-As a user, trust is extremely important so the products must deliver and mean as it says.

-As a user, I want to discover easy-to-follow recipes.

-As a user, I want to be able to also search for recipes based on specific ingredients.

-As a user, there must be a diverse range of recipes. Variety is the spice of life!

## TWO (2) User Personas:

(1) Here's **Alex**, he's a dessert fiend, but absolutely can't have any recipe that includes sugar, which for sweetness, could be replaced with the following: agave, honey, or coconut shavings/flakes. He's on the right site and app for his sweet-tooth cravings, with our recipEATS!

(2) Very different to Alex, is **Jennifer**. She's OK with a lil' brown, or even white sugar in her life, but she's absolutely allergic to gluten. So the term 'gluten-free' is her friend, where it helps her avoid ingredients which include flour, wheat (& its derivatives), rye, barley, malt, and more.

## Heaven Seven Group Dynamic
*Marlon Regis* - marlonregis@pursuit.org
Coming into this already-established team, I wasted no time in trying to gel together with my new squad, of whom Lenny is also a 'transfer' and new team-member. Walked squad member Haiyah in our `wireframe.cc` designed wireframes; contributed data for our manual API using my creativity and ChatGPT, with entries for our `Recipes` and `Reviews` data-points for our object structure; manned this `Readme.md` file from start to finish; navigated together w/Tim, the code for functionality in the `Recipes` component file; provided daily organizational updates in `Trello Board`; and set-up zoom on weekend for squad-time (w/Dan) for any blockers, which we had re `Carousel` component functionality.

*Lenny Lopez* - lennylopez@pursuit.org
A role of wearing many hats, Lenny really stepped up in his role and approach to style our `Landing page`, working together with Haiyah and Tim. Lenny also worked with Haiyah on the `Recipe.jsx` component. Even shifted and moved the `About Us` link on the Landing page, away from being too noticeable near to the header.

*Haiyah Perez* - haiyahperez@pursuit.org
Haiyah, one of the original 'Heaven Seven' members, worked by starting off in the `About Us` page and `Landing page`, as well as built the majority of code for functionality in the `Recipe.jsx`file. She also spent a few days figuring out the functionality using outside libraries pertaining to the `carasoul component` just to make us all look good, anytime a user stumbles upon our Landing Page.

*Timothy Natal* - timothynatal@pursuit.org
Last, but certainly not least, Tim's role was an integral one for the squad, as the recipEATS! app is his brainchild. He tested and built the code in most components, including the `Recipes` component that myself and Tim worked on together. Again, there isn't much Tim didn't do. He's the part human, part AI filter function, working on CSS files across the board, and especially the `App.jsx` file. He's worked on the `ReviewsForm` and `RecipeDetails` components and chipping away at any ideas that may fit into the 'stretch goals' category.

As a group, Haiyah and Tim were already the original personnel of 'Heaven Seven', whilst Lenny and myself, Marlon were the recent infiltrators. Overall, we got along, and daily we were pretty much engaged to the tasks at hand. A warning: don't ever work on a recipes/food app, without having a proper meal on your stomach! Anyway, the idea for the app was Tim's. Here's our `Team Norms` link: https://docs.google.com/document/d/1FETAEXKfVJviGIdRROPBv5K7-wRZFbXqEYB6R62w6Z0/edit

**Set Up Instructions**
# Deploying Frontend on Netlify:

Step 1: Set Up Netlify
Go to Netlify and sign in or sign up.
Click on “New site from Git”.

Step 2: Connect to Git Repository
Choose your Git provider (GitHub, GitLab, Bitbucket) and select your repository.
Allow Netlify to access your repo.

Step 3: Configure Your Site
Click on “Deploy site”.

Step 4: Domain and Launch
Netlify provides a generated URL post-deployment.
Optionally, set up a custom domain.

## Deploying Backend on Render
Render is useful for backend deployments. Here's how to deploy your backend on Render.

Step 1: Prepare Your Backend Code
Ensure your backend code is in a Git repository.
Include a package.json file with the correct start script.

Step 2: Set Up Render
Visit Render and log in or register.
Select “New Service”.

Step 3: Connect to Your Repository
Pick the repository with your backend code.
Check if Render auto-detects the settings correctly.

Step 4: Configure Service
Choose the appropriate environment (Node, Python, etc.).
Set any required environment variables under “Environment”.

Step 5: Deploy Your Backend
Click “Create Service”.
Render will deploy your backend and provide a URL.

### Post-Deployment
After deploying (*frontend* + *backend*), ensure to test your app thoroughly.

#### Visual Examples
The following is an example of our application during the process w/these images showing the application completed at different stages of the project. Images highlight different stages of us tackling this recipEATS! project.

WIREFRAMES (desktop and mobile)

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706898185/Screenshot_2024-02-01_at_10.51.48_PM_mm2kee.png" alt="Landing-desktop" width="400" height="400">

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706898357/Screenshot_2024-02-01_at_11.07.59_PM_puco3c.png" alt="Home-desktop" width="400" height="400">

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706898525/Screenshot_2024-02-01_at_11.17.43_PM_jbjwbj.png" alt="recipes-desktop" width="400" height="400">

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706898640/Screenshot_2024-02-01_at_11.11.40_PM_bucmaq.png" alt="Landing-mobile" width="400" height="400">

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1706898715/Screenshot_2024-02-01_at_11.14.11_PM_jlchzk.png" alt="recipes-mobile" width="400" height="400">

recipEATS! (visuals throughout the process)

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1707157477/Screenshot_2024-02-05_at_1.18.03_PM_xqoaqa.png" alt="Landing page 1" width="400" height="400">

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1707157476/Screenshot_2024-02-05_at_1.21.18_PM_onu0rw.png" alt="Landing Page 2" width="400" height="400">

<img src="https://res.cloudinary.com/dgifdj6nx/image/upload/v1707187844/Screenshot_2024-02-05_at_2.55.06_PM_grpijn.png" alt="Recipe" width="400" height="800">

# ABOUT US

*Tim Natal*: "I used to play NBA2K MyTeam Competitively. I used to compete in tournaments and had a close match with the player who went on to win $250,000 in 2021."
(https://github.com/TimNatal1887)

*Haiyah Perez*: "I'm a multi-talented artist who finds joy in expressing creativity through various mediums. Whether it's bringing ideas to life on canvas through drawing and painting or molding intricate sculptures from clay, I love exploring the endless possibilities of artistic expression."
(https://github.com/haiyahperez)

*Lenny Lopez*: "I'm first generation-born in the US, in my family."
(https://github.com/notmenopecode)

*Marlon Regis*: "In a different space, my 'name' IS one of the dishes in our recipe app!"
(https://github.com/MarlonPelau)

**Frontend deployment - our netlify.com link**:

**Backend deployment - our render.com link**:
