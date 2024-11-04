"use strict";
{
    // Array spread oparetor
    const friend1 = ["abul", "kabul", "babul"];
    const friend2 = ["kuddus", "mofiz", "rosid"];
    friend1.push(...friend2);
    console.log(friend1);
    // Object spread oparetor
    const mentor1 = {
        react: "jhonkor",
        redux: "mir",
        typescript: "mizbah",
    };
    const mentor2 = {
        nextjs: "Tonmoy",
        cloude: "asif",
        pisma: "firoz",
    };
    const mentor = Object.assign(Object.assign({}, mentor1), mentor2);
    const greatFriends = (...friends) => {
        friends.forEach((friend) => {
            console.log(`Hello ${friend}`);
        });
    };
    greatFriends("Abul", "Babbule", "Kabul");
}
