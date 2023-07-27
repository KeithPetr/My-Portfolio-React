import QuizzicalPic from "../images/Quizzical-App.png"
import QuizzicalGif from "../gifs/Quizzical-Gif.gif"
import TindogPic from "../images/Tindog-App.png"
import TindogGif from "../gifs/Tindog-React-Gif.gif"
import InvoicePic from "../images/Invoice-Creator-App.png"
import InvoiceGif from "../gifs/Invoice-Creator.gif"
import TexterlyPic from "../images/Texterly-App.png"
import TexterlyGif from "../gifs/Texterly-AI-Gif.gif"
import YoutubePic from "../images/Channel-Search-App.png"
import YoutubeGif from "../gifs/Channel-Search-Gif.gif"
import MoviePic from "../images/Movie-Watchlist-App.png"
import MovieGif from "../gifs/Movie-Watchlist-Gif.gif"

const data = [
  {
    id: 1,
    linkDescription: "This app creates random Quizzes using a trivia API and React.",
    src: QuizzicalPic,
    title: "Qizzical App",
    subheading: "A React Based Project",
    detailsTitle: "A Scrimba FrontEnd Developer Path Project",
    details: `This project accesses the Open Trivia Database to generate random
                quizzes. The quiz page generates random questions and the
                associcated answers to them. The user can then select an answer to
                each question. Finally, the user can click the chekc answer button
                to see how many questions they correctly answered.`,
    languages: ["HTML", "CSS", "JavaScript", "JSX", "React"],
    requirements: `There were 4 main requirements for this project. The first one
                    required me to create 2 screens, a start page and a quiz page. The
                    second requirement was to pull at least 5 questions from the API and
                    display them. The third requirement was to tally all of the correct
                    answers after the &rsquo;Check Answers&rsquo; button was clicked.
                    The final requirement was to style the app according to a Figma
                    file.`,
    githubLink: "https://github.com/KeithPetr/Quizzical-App",
    netlify: "https://keith-quizzical-app.netlify.app/",
    gif: QuizzicalGif,
    gifAlt: "quizzical app gif"
  },
  {
    id: 2,
    linkDescription: `This app lets users select the profiles they like and displays
    the results.`,
    src: TindogPic,
    title: "Tindog App (Updated: July 27, 2023)",
    subheading: "A React Based Project",
    detailsTitle: "A Scrimba FrontEnd Developer Path Project",
    details: ` This project recreates similar functions on the Tinder dating app. It
    allows the user to view multiple profiles and read a brief bio about
    each dog. There are 2 buttons available instead of swiping for
    liking and rejecting each profile. When the users either likes or
    rejects a profile, a stamp is placed on the profile and the next one
    is loaded onto the screen. Each liked profile is sent to a list that can be viewed
    by clicking on the profile icon in the header. Clicking on the paw icon takes the
    user to the profiles that have not been swiped yet. The chat icon allows the user
    to see what messages have been sent and the ability to send more.`,
    languages: ["HTML", "CSS", "JavaScript", "React"],
    requirements: `This project had 3 main requirements. The first one was to follow
    the Figma design that was provided to create the layout of the app. The second 
    one orginially was to use JavaScript classes to create a dog class with each
    profile. I have updated the project using the React library to recreate the same
    type of functionality that the classes provided. The third requirement was to
    have the ability to add a 'Like' or 'Nope' tag when clicking on the 'X' or heart
    under each profile.`,
    requirementsTwo: `As extra stretch goals, I added a component called 'LikedList'
    that stored all of the profiles that have been given a 'Like' tag. From this page,
    as another stretch goal, I added a button to click on to send a message to that
    particular profile. As a thrid stretch goal, once a message was sent, it took the
    user to a 'Messages' component that listed all of the users that you have started
    a conversation with. After clicking on a specific profile, the user can add more 
    chats to the conversation. Finally, the user can see the most recent message for
    each profile in the 'Messages' component if there is one.`,
    githubLink: "https://github.com/KeithPetr/Tindog-React",
    netlify: "https://tindog-react-site.netlify.app/",
    gif: TindogGif,
    gifAlt: "tindog app gif"
  },
  {
    id: 3,
    linkDescription: `This app allows the user to create a list of tasks and
    calculate the total price.`,
    src: InvoicePic,
    title: "Invoice Creator",
    subheading: "A JavaScript Project",
    detailsTitle: "A Scrimba Bootcamp Project",
    details: `This project involved creating an application where you could enter
    in a specific task and assign a price to it. Those tasks would then
    be listed and their totals calculated. It also allows for the
    removal of any particular item from the list. Clicking the 'Send
    Invoice' button would then reset the list so you could start over
    and add new items.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: `There were 6 main requirements for this project. The first was I
    needed to create an array to hold all of the tasks that were entered
    onto the list. The secodn requirement was to create a button that
    would add each task to this array. The third was displaying the
    array data and making sure that it changed as the array was updated.
    The fourth requirement was to ensure that the same item could not be
    added twice to the list. The fifth was updating the total amount by
    keeping track of the price assigned to each task as it was added or
    removed. The last requirement was to have the 'Send Invoice' button
    reset the entire list.`,
    requirementsTwo: `As extra stretch goals, I added an input field so the user could
    type in what they wanted rather than choose from predetermined
    options. The final stretch goal was to be able to remove each
    specific item from the list.`,
    githubLink: "https://github.com/KeithPetr/Invoice-Creator",
    netlify: "https://keith-invoice-creator.netlify.app/",
    gif: InvoiceGif,
    gifAlt: "invoice creator app gif"
  },
  {
    id: 4,
    linkDescription: `This app allows the user to enter in text, analyze it and have
    it returned corrected.`,
    src: TexterlyPic,
    title: "Texterly AI",
    subheading: "A JavaScript OpenAI API Project",
    detailsTitle: "A Scrimba Bootcamp Project",
    details: `This project involved creating an app that allows the user to edit
    text. The user could copy and paste or type text directly into the
    text area. They can then hit the 'Process' button to have the app
    make spelling, grammar, and punctuation corrections. The app will
    also tell the user how many characters and words are in the given
    text. The newly edited text can then be copied to the clipboard and
    the 'Reset' button can be clicked to empty the text area.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: `There were 4 main requirements for this project. The first was
    following a Figma file for the design. The second was to make POST
    requests to the OpenAI API's /edit endpoint so that text could be
    analyzed. The third requirement was to select the
    'text/davinci-edit-001' model for editing text. The fourth
    requirement was to keep track of the character and word counts.`,
    requirementsTwo: `There were also 2 stretch goals I included with the project. The
    first was creating a copy button so the user can copy the newly
    edited text. The second was to have a loading indicator appear as
    the text was being processed during the POST request.`,
    requirementsThree: `For this project there is no live demo. I was not able to save my
    API key to GitHub due to security issues. If you wish to test the
    project out yourself, you can follow the GitHub link and copy or
    clone the project. Then you can create your own API key with OpenAI
    and insert it into the project to see it work live. I have included
    the gif below to demonstrate the functionality.`,
    githubLink: "https://github.com/KeithPetr/Texterly-AI",
    netlify: "https://keith-texterly-ai.netlify.app/",
    gif: TexterlyGif,
    gifAlt: "texterly app gif"
  },
  {
    id: 5,
    linkDescription: `This project searches videos within different Youtube channels
    and has a responsive design.`,
    src: YoutubePic,
    title: "Youtube Channel Search",
    subheading: "A JavaScript and Youtube API Project",
    detailsTitle: "A Scrimba Bootcamp Project",
    details: `This project accesses the YouTube Data API to find different YouTube
    Channels. The user can then select one of the different channels
    that are available in the dropdown menu. After the channel has been
    selected, the user can type in the search terms the want. The videos
    that match the search terms will be displayed below the search bar.
    Each result gives an image and details about each video. Each image
    is also a link that can be clicked on to take the user to the actual
    video on YouTube.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: `There were 5 main requirements for this project. The first was being
    able to search videos within a given YouTube channel. The second
    requirement was using the 'search' endpoint from the API
    documentation to return videos that matched the search query. The
    third requirement was to have at least the video thumbnail and it's
    title displayed when the results were returned. The fourth
    requirement was to let the user know if there were no results
    matching the entered terms. The final requirement was to have the
    thumbnail be a link to the actual video.`,
    requirementsTwo: `As extra stretch goals, I added a dropdown menu with a slection of
    different channels that could then be searched through when entering
    a search query. I also added other details about each video such as
    the published date and a description.`,
    requirementsThree: '',
    githubLink: "https://github.com/KeithPetr/Youtube-Channel-Search",
    netlify: "https://keith-channel-search.netlify.app/",
    gif: YoutubeGif,
    gifAlt: "channel search app gif"
  },
  {
    id: 6,
    linkDescription: `This app allows the user to search through a database of
    movies and add them to a watchlist page.`,
    src: MoviePic,
    title: "Movie Watchlist",
    subheading: "A JavaScript and API Project",
    detailsTitle: "A Scrimba FrontEnd Developer Path Project",
    details: `This project involved using the OMDB API to access information about
    movies. The goal of the project was to allow the user to type in a
    search query and find movies related to that query. From the
    results, the user could select any that they wished to save to a
    separate 'watchlist' page. Whenever the user returned to the
    watchlist page, they should be able to view all of the movies that
    have been saved. If they no longer wanted a movie on their list,
    they also have the option to remove it.`,
    languages: ["HTML", "CSS", "JavaScript"],
    requirements: ` There were 4 main requirements for this project. The first was there
    needed to be two separate pages. This included an 'index.html' page
    and a 'watchlist.html' page. The second requirement was to have the
    'index.html' page be a search page. This search page would call to
    the OMDB API with the search queries entered and display the movie
    details in the results. The third requirement was to have an 'add to
    watchlist' button. This button will save that movie data to local
    storage so it could be accessed on the 'watchlist' page. The final
    requirement was to have the 'watchlist.html' page load the data from
    local storage and display the saved movies.`,
    requirementsTwo: ``,
    requirementsThree: ``,
    githubLink: "https://github.com/KeithPetr/Movie-Watchlist",
    netlify: "https://keith-movie-watchlist.netlify.app/",
    gif: MovieGif,
    gifAlt: "movie watchlist app gif"
  },
];

export default data;
