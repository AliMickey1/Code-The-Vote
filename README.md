# **Car-Polling**

Car-Polling connects volunteers with voters to help those without the means to travel in getting access to voting. The app allows travel both to polls and various city buildings for document gathering.

During the development period, this application was developed by Logan, Allie, Meha, and Ying.

Once in program directory,
Required download commands:

npm install
npm install react-router-dom
npm install react-bootstrap
npm install --save @auth0/auth0-spa-js

npm start will launch the project in a browser

This repository was created a week before the project date, but was only used to experiment with styling before the actual development period for the project. This was deemed ok by HRF Staff as long as it was noted here.


### **Inspiration**
Our project was inspired by the pressing need to uphold the integrity of our elections amidst rising concerns about voter suppression, unregulated campaign spending, partisan gerrymandering, and the pervasive spread of misinformation. We aimed to create a solution that leverages the principles of gamification to engage and empower the public, helping to restore confidence in the democratic process. By integrating game design elements, such as badges, leaderboards, and quizzes, we sought to motivate and inspire individuals to actively participate in the election process, fostering a sense of community and shared purpose.

### **What it does**
Our app, Car-Polling, connects volunteers with voters to organize safe and reliable carpool rides to both polling stations and other government buildings. It ensures that individuals, particularly those from underserved communities, gain access to both voting and required documents by providing transportation options. The app also includes educational quizzes on election protection and voting rights, rewarding users with badges for their participation and contributions. Additionally, the app features a dynamic leaderboard that ranks drivers and riders based on their engagement and achievements, promoting healthy competition and community involvement. Through these features, Car-Polling not only facilitates transportation but also educates and empowers users about the importance of election integrity.

### **How we built it**
We built Car-Polling using React.js for the frontend, ensuring a responsive and user-friendly interface. Since the app is currently meant for demonstrations, we did not implement a backend, leaving it for later development. We used the third-party authentication tool Auth0 to implement a login feature. We built a a frontend that, in production, would allow users to create a profile and find other users for ride sharing purposes. Our gamified elements, such as quizzes and leaderboards, were designed to engage users and incentivize participation. Quizzes were given a point system while ride leaderboards were based on miles driven. Throughout the development process, we focused on creating a secure, reliable, and engaging platform that addresses the key challenges of election protection and voter access.

### **Challenges we ran into**
As we focused on the Opportunity Area #1 Car-pool app, our goal was to address several key challenges using a gamified approach based on the thought-starters provided in the documentation. These challenges included ensuring that drivers are safe and responsible and cultivating trust with riders. To achieve these objectives, we implemented a profile system that in production will rely on user ratings and an ID verification process.

1. Driver Verification: We set a path for future verification that will ensure everyone on the app is who they say they are.
2. Incident Reporting: We integrated a reporting system that allows riders to report any issues or concerns during their rides. This allows us to promptly address any problems and take corrective actions if needed.
3. Rating and Review System: Riders can rate and review drivers after each ride. High ratings and positive reviews are rewarded with badges, while negative feedback is investigated to ensure continuous improvement in driver conduct and performance.

### **Accomplishments that we're proud of**
Our team worked tirelessly to develop a comprehensive and innovative car-pool app aimed at promoting election integrity through a gamified approach. Here are some of our proudest accomplishments:

1. Effective Driver and Rider Verification System Identification: We added profiles into the application that will require users to prove they are who they say they are. Communication: We allowed communication only between users that have grouped together for a ride.

2. Optimized Ride Matching Matching: We developed a system where riders can submit ride requests and volunteers can choose from a list of said requests to find trips that fit their availability

3. Gamified Platform Gamified Elements: Developed interactive quizzes and a rewarding system that includes badges like "Participation Badge," "Quiz Master," and "Top Contributor" to incentivize user participation.

4. User-Friendly Experience Intuitive Navigation: Ensured smooth navigation and a seamless user experience, from signing up and creating profiles to finding rides and participating in quizzes. Responsive Design: Developed a responsive design that works across various devices, making the app accessible to a wider audience.

5. Comprehensive Frontend/UI Design Main Landing Page: Designed an intuitive and engaging landing page that serves as the central hub for users. This includes navigation links, badges, and resource links to enhance user interaction.

6. Accessibility options Special Needs: As part of our ride sharing design, we allowed volunteers to list what special needs they are able to accommodate. Riders can add special needs to their ride requests. This will allow those with disabilities to be accommodated for.

Our collaborative efforts and innovative solutions have resulted in an app that not only addresses the key challenges of car-pooling for election integrity but also engages and inspires users through gamification. We are proud of what we have achieved and look forward to further enhancing our app to better serve our community.

### **What we learned**
We learned that there is quite a bit to think about when it comes to car-pooling apps. Thinking of each user story when it came to security and accommodations was quite a challenge. It was a worth while experience working out a way to serve our communities.

### **What's next for Car-Pool App for Voting Assistance**
Since the app is currently built only for demonstration, a backend would be the next step. The two most important pieces we are missing would be a working ID verification and a working chat box. The chatbot will be used for notifications, chat between riders, and reporting. Next, we would use a working backend to assign points to active users who participate in riding and quizzes, since the current frontend is only for demonstration. A mapping system is also needed down the line.

### **Built With**
-auth0
-cli
-css
-data
-design
-git
-json
-jsx
-react
-react.js
-routing

