import type { IMenuItem, ITeamMember } from "./models";

export const aboutText = `Welcome to the Feast from Downeast! I've always had a passion for
        cooking — it's something that's been a part of me for as long as I can
        remember. Over the years, I've had the pleasure of working in many
        different restaurants, learning the ins and outs of the kitchen and
        fine-tuning my craft. But through it all, one dream has always stuck
        with me: opening my own food truck. Now, that dream is a reality, and
        I'm bringing the best of Maine's coastal cuisine straight to Florida.
        From lobster rolls to blueberry pie, I'm excited to share the flavors I
        grew up with and bring a little taste of Downeast Maine to the Sunshine
        State.
    `;

export const teamMembers: ITeamMember[] = [
  {
    name: "Jon Favreau",
    title: "Head Chef and Owner",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix122bWNxwx-SB4-4yC6JobwuqJqyjZg56amZ3U5gUt47zLqauJcAz9-iKBva1VcXjiQLhsDTs0Ffe14jh-6cq503L8CDEcg-UUmnwNRuzhruWP_cAAtECdUHBvrCzIblg4ue4IvvZPXw/s640/blogger-image--67923474.jpg",
  },
  {
    name: "John Leguizamo",
    title: "Second in Command",
    img: "https://montclairfilm.org/wp-content/uploads/2014/04/johnleguizamo_615x375.png",
  },
  {
    name: "Emjay Anthony",
    title: "Media Extraordinaire",
    img: "https://www.twincities.com/wp-content/uploads/2015/11/20140513__140518-chef-1.jpg?w=650",
  },
];

export const menuItems: IMenuItem[] = [
  {
    name: "New England Clam Chowder",
    img: "https://images.getrecipekit.com/20220301022136-chunky-new-england-clam-chowder.jpeg?aspect_ratio=4:3&quality=90&"
  },
  {
    name: "Maine Lobster Roll",
    img: "https://static.wixstatic.com/media/93f2e6_fe375b01039441cd8b876c99775fea64~mv2.jpg/v1/fill/w_640,h_522,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/93f2e6_fe375b01039441cd8b876c99775fea64~mv2.jpg"
  },
  {
    name: "Maine Italian",
    img: "https://www.thetakeout.com/img/gallery/14-italian-subs-in-the-us-you-need-to-try-before-you-die/original-italian-amatos-1743623178.jpg"
  },
  {
    name: "Fried Haddock",
    img: "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/zosyenkr/e986efb2-a9b9-40d2-9305-b429237d80e9"
  },
  {
    name: "Fried Clams",
    img: "https://newengland.com/wp-content/uploads/2016/06/best-fried-clams-in-maine-shaws.jpg"
  },
  {
    name: "Blueberry Pie",
    img: "https://everydaypie.com/wp-content/uploads/2022/09/Blueberry-Hand-Pies-1-3.jpg"
  },
  {
    name: "Whoopie Pie",
    img: "https://www.graffambroslobster.com/wp-content/uploads/2021/11/Resized_20200510_170012-1.jpeg"
  },
];
