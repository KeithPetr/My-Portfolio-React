import ReactChatPic from "../images/React-Chat-App.png";
import ReactChatGif from "../gifs/React-Chat-App.gif";
import TindogPic from "../images/Tindog-App.png";
import TindogGif from "../gifs/Tindog-React-Gif.gif";
import InvoicePic from "../images/Invoice-Creator-App.png";
import InvoiceGif from "../gifs/Invoice-Creator.gif";
import TexterlyPic from "../images/Texterly-App.png";
import TexterlyGif from "../gifs/Texterly-AI-Gif.gif";
import YoutubePic from "../images/Channel-Search-App.png";
import YoutubeGif from "../gifs/Channel-Search-Gif.gif";
import Birdingsnaps from "../images/birdingsnaps.png";
import BirdingsnapsGif from "../gifs/birdingsnaps.gif"

const data = [
  {
    id: 6,
    linkDescription: `My personal photo gallery website`,
    src: Birdingsnaps,
    title: "birdingsnaps",
    update: "Updated: Oct. 23, 2023",
    subheading: "A React and Firebase Project",
    detailsTitle: "My Personal Project",
    details: `This project involved creating a website to showcase all of my 
    birding and other wildlife photos. I wanted to create a site that people 
    could search through all of my photos easily and see them at their best 
    quality. I also wanted users to be able to save favorites and make edits 
    to adjust the photos to their liking.`,
    languages: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "Firebase"],
    requirements: `There were 4 main requirements for this project. The first one 
    was to find a way to store my photos so that they could be accessed and 
    searchable. I wanted to include a search input field and letters to 
    search for birds starting with the same letter. Using Firebase Storage
    I was able to do this. I used the Firebase Storage methods to search 
    through the different folders that I named after each bird. I was then 
    able to use another method to grab the download url for each available 
    image stored in the folder that was selected by the user.
    The second requirement was that I wanted the user to be able to save favorites.
    I included an icon that could be clicked on each image to save it to a favorites
    section. This section was only accessible if the user signed in via their Google
    account. What this allowed me to do was use the user id from the Google sign in 
    to create a unique folder name. I then saved these images in a Firebase realtime 
    database so they could be removed and saved almost instantly.
     `,
    requirementsTwo: `The third requirement I had was allowing the user to edit 
    favorites. I used HTML canvas to load an image and offered the user the abiltiy
    to change contrast, brightness, grayscale, and saturation. Currently, the user 
    can only save these edited images by right clicking when viewing the website on
    a desktop.
    `,
    requirementsThree: `The fourth requirement was displaying the images in a way that
    showed of their best quality and allowed the user to navigate through them easily.
    I did this by creating a component that would appear when an image was clicked on.
    This component shows the image in a larger size, grays out and disables the site
    behind it, and it offers arrow buttons to navigate through the collection.
    `,
    githubLink: "https://github.com/KeithPetr/Birding-Snaps/",
    netlify: "http://birdingsnaps.netlify.app/",
    gif: BirdingsnapsGif,
    gifAlt: "birdingsnaps site gif",
  },
  {
    id: 1,
    linkDescription: `This is a chat app that allows users to send messages in a chat
    room after they have logged in.`,
    src: ReactChatPic,
    title: "React Chat App",
    update: "Created: Sept. 9, 2023",
    subheading: "A React and Firebase Project",
    detailsTitle: "A freeCodeCamp Personal Project",
    details: `This project uses the Firebase Firestore database to create a realtime
    chat application. Users are able to sign up to access the app using either their
    Google account or by entering in an email address and creating a password 
    manually. After being authenticated, users have access to a chat room where
    they can send messages to other authenticated users. If a user has been 
    authenticated using their Google account, each message will display their 
    avatar and name associated with that account. If the user signs up manually,
    I have set up a default avatar and their email address will become their 
    username.`,
    languages: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    requirements: `There were 4 main requirements for this project. The first 
    requirement was to set up and use the authentication features available from
    Firebase. The main method for authenticating users was by having them sign
    in with their Google account. I used the signInWithPopup function from 
    firebase to access the user's Google account. This function takes in an 
    instance of the Firebase Authentication service configured for my project 
    and an instance of the Google authentication provider using the 
    GoogleAuthProvider class. The second requirement was to create a Firestore 
    database that would hold the message objects that were created when a user 
    sent a message. I then used the “addDoc” and “query” functions created by 
    Firebase to create and query those objects so that they could be fetched and
    displayed according to creation dates. The third requirement was that I 
    needed to set up the React components to hold and display the messages sent
    by each user. I created separate ChatBox, SendMessage, and Message 
    components that would hold and display the messages. I then used conditional
    rendering to display the correct information based on the user's 
    authentication status. The fourth requirement was to access and use the user
    data that was created when a user signed in. If they did so with a 
    Google account, their avatar and display name would be used to go 
    alongside their messages. `,
    requirementsTwo: `There were 2 stretch goals for this app. I added the ability
    to create an account manually by signing up with an email address and password.
    When using this method of authentication, their username would default to the
    email address they provided and their avatar would default to a React logo 
    image. I added this feature so that if a user wanted to test out the app they
    didn’t need to share their Google account information. It also let me sign 
    in on my mobile device and desktop at the same time to test out the chat in
    real time. The second stretch goal I had was to create an icon that could be
    displayed on mobile devices. When the user accesses the Netlify website, they
    can select the option to 'add to Home Screen' to add an icon for the app to
    their device. I did this by creating a favicon and including a 
    “site.webmanifest” file in the root of my project.`,
    requirementsThree: `One ongoing issue I have is that the messages briefly appear
    at the top of the chat box before they are correctly sorted to the bottom of the
    chat box. I will need to review this to determine how I can make the user
    experience more fluid when it comes to displaying the messages.`,
    githubLink: "https://github.com/KeithPetr/React-Chat-App",
    netlify: "https://keiths-react-chat.netlify.app",
    gif: ReactChatGif,
    gifAlt: "quizzical app gif",
  },
  {
    id: 3,
    linkDescription: `This app allows the user to create invoices with tasks and prices 
    and then store them in history`,
    src: InvoicePic,
    title: "Invoice Creator",
    update: "Updated: Aug. 19, 2023",
    subheading: "A JavaScript Project",
    detailsTitle: "A Scrimba Bootcamp Project",
    details: `This project involved creating an application where you could enter
    in a specific task and assign a price to it. Those tasks would then
    be listed and their totals calculated. It also allows for the
    removal of any particular item from the list. Clicking the 'Send
    Invoice' button would then reset the list so you could start over
    and add new items. I have added many new stretch goals to the project of my own, 
    including using React to build the app and Firebase to store the data.`,
    languages: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    requirements: `There were 6 main requirements for this project. The first was I
    needed to create an array to hold all of the tasks that were entered
    onto the list. I created states within the TaskList component to hold and update this data. 
    The second requirement was to create a button that would add each task to this array. The third
    was displaying the array data and making sure that it changed as the array was updated. In 
    order to do this within React, I used the useEffect hook to watch for changes within the
    taskList array dependancy. The fourth requirement was to ensure that the same item could not be
    added twice to the list. The fifth was updating the total amount by keeping track of the price
     assigned to each task as it was added or removed. The last requirement was to have the
    'Send Invoice' button reset the entire list. I changed this to store the invoice in history
    instead.`,
    requirementsTwo: `There were 4 main stretch goals that I wanted to add to this project.
    The first, I added an input field so the user could type in what they wanted rather than choose from predetermined
    options. I also added the same feature for the price, so any amount to 2 decimal places could be entered. 
    The second stretch goal was to create a Dark Mode toggle button so the user could select the style that best suited
    their needs. The third stretch goal was to add the ability to view the invoice history of past tasks that have been entered
    and the dates those were created. The final stretch goal was to use Firebase.  I chose to use a realtime database for this. 
    I wanted to be able to have a more permanent way to store the data. It was important that the task list remain populated 
    between screen refreshes if the invoice had not been created yet. As well, I wanted the user to have access to all of
    their invoice history.`,
    githubLink: "https://github.com/KeithPetr/Invoice-Creator-React",
    netlify: "https://invoice-creator-react.netlify.app/",
    gif: InvoiceGif,
    gifAlt: "invoice creator app gif",
  },
  {
    id: 2,
    linkDescription: `This app lets users select the profiles they like and displays
    the results.`,
    src: TindogPic,
    title: "Tindog App",
    update: "Updated: July 27, 2023",
    subheading: "A React Based Project",
    detailsTitle: "A Scrimba Frontend Developer Path Project",
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
    gifAlt: "tindog app gif",
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
    gifAlt: "texterly app gif",
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
    requirementsTwo: `As extra stretch goals, I added a dropdown menu with a selection of
    different channels that could then be searched through when entering
    a search query. I also added other details about each video such as
    the published date and a description.`,
    requirementsThree: "",
    githubLink: "https://github.com/KeithPetr/Youtube-Channel-Search",
    netlify: "https://keith-channel-search.netlify.app/",
    gif: YoutubeGif,
    gifAlt: "channel search app gif",
  },
];

export default data;
