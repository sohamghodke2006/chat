const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
        {
        from: "rahul",
        to: "amit",
        msg: "Can you share today's assignment?",
        created_at: new Date()
    },

    {
        from: "priya",
        to: "neha",
        msg: "Sure, I'll send it in 10 minutes.",
        created_at: new Date()
    },

    {
        from: "arjun",
        to: "rohan",
        msg: "Let's meet in the library.",
        created_at: new Date()
    },

    {
        from: "sneha",
        to: "kavya",
        msg: "Did you complete the project?",
        created_at: new Date()
    },

    {
        from: "amit",
        to: "rahul",
        msg: "Yes, I uploaded it to GitHub.",
        created_at: new Date()
    },

    {
        from: "pooja",
        to: "anjali",
        msg: "Happy Birthday! 🎉",
        created_at: new Date()
    },

    {
        from: "vivek",
        to: "sachin",
        msg: "Are you coming to college tomorrow?",
        created_at: new Date()
    },

    {
        from: "riya",
        to: "meera",
        msg: "Let's revise MongoDB together.",
        created_at: new Date()
    },

    {
        from: "karan",
        to: "aditya",
        msg: "Please review my code.",
        created_at: new Date()
    },

    {
        from: "simran",
        to: "isha",
        msg: "Thanks for your help!",
        created_at: new Date()
    }
]
Chat.insertMany(allChats);