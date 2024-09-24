import React from 'react';
import Card from './card'; 
 // Ensure the correct path to the Card component

const events = [
        { 
          title: "React Workshop", 
          description: "Learn React", 
          date: "Oct 10, 2024", 
          moreInfo: "This workshop is ideal for beginners and intermediate developers.", 
          link: "https://reacttraining.com/",
        },
        { 
          title: "Community Meetup", 
          description: "Join us for networking.", 
          date: "Oct 15, 2024", 
          moreInfo: "Connect with professionals and students in the tech community.", 
          link: "https://meetup.com",
        },
        { 
          title: "JavaScript Conference", 
          description: "Dive into modern JavaScript.", 
          date: "Nov 20, 2024", 
          moreInfo: "Speakers from top companies will discuss JavaScript trends.", 
          link: "https://javascript.info/",
        },
        { 
          title: "CSS Tricks Webinar", 
          description: "Learn cool CSS techniques.", 
          date: "Dec 01, 2024", 
          moreInfo: "Gain advanced CSS knowledge to improve your web designs.", 
          link: "https://css-tricks.com/",
        },
        { 
          title: "Open Source Hackathon", 
          description: "Contribute to open-source projects.", 
          date: "Oct 15, 2025", 
          moreInfo: "Work with teams to solve real-world problems using open-source tools.", 
          link: "https://hacktoberfest.com/",
        },
        { 
          title: "Python Bootcamp", 
          description: "Become a Python pro.", 
          date: "Feb 10, 2025", 
          moreInfo: "Ideal for beginners to learn Python and create real-world projects.", 
          link: "https://python.org",
        },
        { 
          title: "Tech Career Fair", 
          description: "Meet top employers industry.", 
          date: "Mar 5, 2025", 
          moreInfo: "Attend panels and workshops, and meet recruiters from top companies.", 
          link: "https://techcareerfair.com",
        },
        { 
          title: "AI Ethics Panel", 
          description: "Discuss the future of AI and ethics.", 
          date: "Apr 2, 2025", 
          moreInfo: "Experts from academia and industry will discuss AI's ethical impact.", 
          link: "https://www.aim-ahead.net/",
        },
        { 
          title: "Women in Tech", 
          description: "Empowering women", 
          date: "Oct 8, 2025", 
          moreInfo: "Join discussions about diversity, inclusion, and gender equality in tech.", 
          link: "https://ghc.anitab.org/",
        },
        { 
          title: "Startup Pitch Event", 
          description: "Pitch your startup idea.", 
          date: "Jun 15, 2025", 
          moreInfo: "Entrepreneurs pitch their ideas to investors and receive feedback.", 
          link: "https://www.ycombinator.com/library/2u-how-to-build-your-seed-round-pitch-deck",
        }

 ];
 

 const EventBoard = () => {
    return (
        <div className="event-board">
            {events.map((event, index) => (
                <Card key={index} {...event} />
            ))}
        </div>
    );
};


export default EventBoard;
