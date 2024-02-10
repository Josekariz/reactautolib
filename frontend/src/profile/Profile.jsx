import { React, useContext, useState, useEffect } from "react";
import MiniNavbar from "../components/MiniNavbar";
import Navbar from "../Navbar/Navbar";
import { UserContext } from "../contexts/UserContext";

const quotes = [
  {
    quote: "I'm not speeding, I'm qualifying for the afterlife.",
    author: "Unknown",
  },
  {
    quote: "A car is only a luxury - until you need one.",
    author: "E. B. White",
  },
  {
    quote:
      "The average driver is incompetent, inconsiderate, and selfish. And I am one of them.",
    author: "Dennis Prager",
  },
  {
    quote: "The horn is the one instrument you never want to play in public.",
    author: "Tom Lehrer",
  },
  {
    quote: "If a car could think, it would invent ways to kill humans.",
    author: "Dave Barry",
  },
  {
    quote:
      "The best thing about a new car is its smell. The second best thing is that it still has a warranty.",
    author: "Jerry Seinfeld",
  },
  {
    quote:
      "Traffic jams are where people get together and exchange their favorite ways to avoid traffic jams.",
    author: "John Coltrane",
  },
  {
    quote:
      "The main reason most cars go from zero to sixty in eight seconds is so their drivers can find a parking space in seven.",
    author: "Robert Byrne",
  },
  {
    quote: "The road is life; the car is how you live it.",

    author: "Colin McRae",
  },
  {
    quote:
      "Ever notice how everyone is a better driver than you, except for the idiots you're actually stuck behind in traffic?",
    author: "George Carlin",
  },
  {
    quote:
      "The automobile has become America's status symbol, and a big one at that. We spend more money on our cars than on anything else except, perhaps, our houses.",

    author: "John Kenneth Galbraith",
  },
  {
    quote:
      "There are two things I hate in this world. People who are intolerant of other people's cultures, and the Dutch.",

    author: "The Stig (Top Gear)",
  },
  {
    quote:
      "The problem with automatic transmission is that it gives the illusion of control without any of the stress.",

    author: "Dave Barry",
  },
  {
    quote:
      "A bicycle is a symbol of freedom. A car is a symbol of power. A bus is a symbol of community. A plane is a symbol of globalization.",

    author: "E.B. White",
  },
  {
    quote:
      "The future of transportation is not in flying cars, it's in flying people.",

    author: "Ray Bradbury",
  },
  {
    quote:
      "The only time a car is truly satisfied is when it is going downhill with the engine off.",

    author: "Dave Barry",
  },
  {
    quote:
      "If a car could complain, it would most likely complain about the way humans park.",

    author: "Unknown",
  },
  {
    quote:
      "Traffic jams are a clear indication that nature is trying to reclaim the roads.",

    author: "Robert Byrne",
  },
  {
    quote:
      "The best way to get revenge on someone who cut you off in traffic is to live a happy and fulfilling life.",

    author: "George Carlin",
  },
];

export default function Profile() {
    const { user } = useContext(UserContext);
    const [randomQuote, setRandomQuote] = useState({});
  
    useEffect(() => {
      const quote = quotes[Math.floor(Math.random() * quotes.length)];
      setRandomQuote(quote);
    }, []);
  
    return (
      <>
        <Navbar />
        <MiniNavbar />
        <div class="max-w-2xl w-full mx-auto my-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[70vh] flex flex-col justify-between">
          
            <img class="rounded-t-lg w-full object-cover h-auto" src={user.profilePhotoUrl} alt="Profile" />
          
          <div class="p-5 flex-grow">
            
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Welcome to your profile page, {user.name}
              </h5>
            
            <div class="italic text-gray-700 dark:text-gray-400 border-l-4 border-blue-500 pl-4 mb-6">
              <p class="mb-2">"{randomQuote.quote}"</p>
              <p class="text-sm font-semibold">- {randomQuote.author}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
