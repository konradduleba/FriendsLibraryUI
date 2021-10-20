import { Link } from "react-router-dom";

export const faq = [{
    title: 'What is FriendsLibrary?',
    description: (
        <div className='spaces-between-text'>
            <p>Friends Library is an online directory that connects people throught all over the world.</p>
            <p>Created as an bachelor degree app by Konrad Dulęba, inspired by "The social network" movie.</p>
        </div>
    )
},
{
    title: 'How do you get our information?',
    description: (
        <p>All information and pictures are provided voluntarily by users.</p>
    )
},
{
    title: 'How can I protect my privacy?',
    description: (
        <p>You can adjust your privacy settings to allow only people within certain divisions of certain schools to see it. You can also set it so that only people who share something in common with you (eg. house, year, a course, friends) can see your information. And further, you can create different privacy settings for the four different parts of your profile: contact information, personal information, courses and friends.</p>
    )
},
{
    title: 'What is the social net?',
    description: (
        <p>Your social net is the group of all users whose privacy settings allow you to view their information. To make things more interesting, we also limit it to only users who have submitted pictures. When you click on 'social net', ten random users from your social net are displayed.</p>
    )
},
{
    title: 'Why does the social net repeat people?',
    description: (
        <p>Since the selection of who is displayed is random, there is a chance that the same person will be displayed on two pages. This problem will alleviate itself as more people join.</p>
    )
},
{
    title: 'How do I search for something besides names?',
    description: (
        <p>You can either click the 'Search all Fields' button on the search page, or try the advanced search page.</p>
    )
},
{
    title: 'If I reject someone, will they find out?',
    description: (
        <p>No. When you reject someone, their friend request will leave your list of friendships to confirm, but they will not be notified. They also will not be able to send you another friend request for some amount of time, so to them, it will just seem as if you haven't confirmed their friendship yet.</p>
    )
},
{
    title: 'Can I change my name and password?',
    description: (
        <p>Yes - you can request a name change and change your password on your my account page. For quality control purposes, we confirm all name changes before they take place. Password changes take effect immediately.</p>
    )
},
{
    title: 'My old picture keeps showing up. Why is this?',
    description: (
        <p>This is due to your browser caching images to improve display time. Hold down CTRL while reloading the page to force the browser to refresh the image.</p>
    )
},
{
    title: 'What is poking?',
    description: (
        <p>We have about as much of an idea as you do. We thought it would be fun to make a feature that has no specific purpose and to see what happens from there. So mess around with it, because you're not getting an explanation from us.</p>
    )
},
{
    title: 'Who made this site?',
    description: (
        <p>See the <Link to='/about'>about</Link> page.</p>
    )
},
{
    title: 'When was the site started?',
    description: (
        <p>It was launched to the public on Wednesday, October 20th, 2021.</p>
    )
},
{
    title: 'Is this a class project?',
    description: (
        <p>Yes, it's a bachelor degree app</p>
    )
},
{
    title: 'What kind of graph theory algorithms are you using to process connections?',
    description: (
        <p>I'm going to pretend you didn't just ask that.</p>
    )
}]