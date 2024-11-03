{
  // Array spread oparetor

  const friend1: string[] = ["abul", "kabul", "babul"];
  const friend2: string[] = ["kuddus", "mofiz", "rosid"];

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

  const mentor = {
    ...mentor1,
    ...mentor2,
  };

  const greatFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hello ${friend}`);
    });
  };

  greatFriends("Abul", "Babbule", "Kabul");
}
