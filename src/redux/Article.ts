export interface IHeader {
  header: [
    {
      id: "1";
      titel: "Products";
      url: "/products";
      subTitle: true;
      subMenu: [
        {
          id: "1";
          title: "Connect";
          img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnect-icon.c5589f63.png&w=256&q=75";
          paragraph: "Onboard, authenticate and manage users";
          url: "/connect";
          data: [
            {
              id: "1";
              img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdocs.2ab9e4f8.svg&w=32&q=75";
              title: "Docs";
              paragraph: "Complete thirdweb documentation";
              url: "/docs";
            }
          ];
        }
      ];
    }
  ];
}

export interface IStack {
  data: [
    {
      id: "1";
      title: "Full-stack";
      slug: "open-source";
      heading: "web3 development platform";
      paragraph: "Frontend, backend, and onchain tools to build complete web3 apps — on every EVM chain.";
      button: "Get Started";
      url: "/login-in";
      img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-homepage.126d2b29.png&w=1920&q=75";
    }
  ];
  build: [
    {
      id: "1";
      title: "Build on 1,000+ EVM chains";
      paragraph: "Our tools work with any contract deployed on any EVM-compatible chain.";
      button: "See the chainlist";
      img: "https://thirdweb.com/assets/landingpage/any-evm.png";
      url: "/chainlist";
    }
  ];
}

export interface IImage {
  image: [
    {
      img: [
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoinbase.7ed6ce60.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpolygon.0a12861a.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faws.ad7c83cb.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frarible.d3f94dca.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoolcats.2547aa47.png&w=256&q=75"
      ];
      img1: [
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanimoca.41f69dba.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftreasure.46c7f973.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpixels.a188b373.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmcfarlane.1c3f35cc.png&w=256&q=75",
        "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnyfw.010e0b96.png&w=256&q=75"
      ];
    }
  ];
}

export interface IClient {
  client: [
    {
      id: "1";
      heading: "client";
      url: "/connect";
      img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnect-icon.c5589f63.png&w=256&q=75";
      title: "Client SDKs to connect users to web3";
      paragraph: "Onboard every user, connect to any wallet, and build apps that anyone can use — with in-app wallets, account abstraction, and fiat & crypto payments.";
      button: "Git Started";
      image: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnect-hero.2f921f31.png&w=1920&q=75";
    }
  ];
  engine: [
    {
      id: "1";
      heading: "Engine";
      img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fengine-icon.181ddba6.png&w=256&q=75";
      title: "Dedicated APIs for web3 apps & games";
      paragraph: "Scalable smart contract APIs backed by secure wallets, with automatic nonce queuing & gas-optimized retries.";
      button: "Git Started";
      url: "/connect";
      image: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fengine-hero.b3dc769e.png&w=1920&q=75";
    }
  ];
  contact: [
    {
      id: "1";
      heading: "Contacts";
      img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontracts-icon.95ff8c1b.png&w=256&q=75";
      title: "End-to-end tools for smart contracts";
      paragraph: "Trusted and modular smart contracts that can be deployed securely on any EVM chain.";
      button: "Git Started";
      url: "/connect";
      image: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontracts-hero.2eebd675.png&w=1920&q=75";
    }
  ];
  app: [
    {
      id: "1";
      title: "Get started with thirdweb";
      img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwhite-logo.a8cda9b2.png&w=640&q=75";
      paragraph: "Build web3 apps with ease. Get instant access.";
      button: "Start building for free";
      url: "/login";
    }
  ];
}

export interface IGame {
  game: [
    {
      id: "1";
      title: "Trusted by the best";
      paragraph: "Powering web3 apps across verticals — from onchain games to creator platforms.";
      data: [
        {
          id: "1";
          title: "Pixels";
          img: "https://thirdweb.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpixels.8bd86469.png&w=1200&q=75";
          paragraph: "Building a web3 game with a thriving ecosystem — with VIP memberships, in-game tokens, and digital assets that users own, on the blockchain.";
          url: "/case-studies/pixels-builds-an-onchain-ecosystem-for-its-web3-game/";
        }
      ];
    }
  ];
}

export interface IPricing {
  pricing: [
    {
      id: "1";
      title: "Simple, transparent & flexible";
      slug: "pricing for every team.";
      detail: "Learn more about";
      plan: "pricing plans.";
      item: [
        {
          id: "1";
          title: "Starter";
          paragraph: "Ideal for hobbyists who require basic features.";
          price: "$0/ month";
          button: "Get started for free";
          url: "/dashboard/settings/billing";
          item: [
            "1,000 monthly active wallets",
            "Web, Mobile & Gaming SDKs",
            "Contract & Wallet APIs",
            "Audited smart contracts",
            "Community Support",
            "Blockchain infra (RPC, IPFS)"
          ];
        },
        {
          id: "2";
          title: "Growth";
          paragraph: "Ideal for production-grade applications.";
          price: "$99 $0/ month";
          button: "Claim your 1-month free";
          url: "/dashboard/settings/billing";
          item: [
            "1,000 monthly active wallets",
            "Web, Mobile & Gaming SDKs",
            "Contract & Wallet APIs",
            "Audited smart contracts",
            "Community Support",
            "Blockchain infra (RPC, IPFS)"
          ];
        },
        {
          id: "3";
          title: "Pro";
          paragraph: "Ideal for teams that require more customization, SLAs, and support.";
          price: "Custom";
          button: "Contact us";
          url: "/dashboard/settings/billing";
          item: [
            "1,000 monthly active wallets",
            "Web, Mobile & Gaming SDKs",
            "Contract & Wallet APIs",
            "Audited smart contracts",
            "Community Support",
            "Blockchain infra (RPC, IPFS)"
          ];
        }
      ];
    }
  ];
}

export interface ISolution {
  solution: [
    {
      id: "1";
      title: "Solutions for every web3 app";
      data: [
        {
          id: "1";
          img: "https://thirdweb.com/assets/landingpage/GamingKit.png";
          title: "Gaming";
          paragraph: "The complete web3 game development toolkit — with wallets to onboard users, contracts for onchain assets, fiat & crypto payments, infrastructure to scale your game. Cross-platform support.";
          url: "/solution/gaming";
        }
      ];
    }
  ];
}

export interface IMovies {
  Search: [
    {
      Title: "The Avengers";
      Year: "2012";
      imdbID: "tt0848228";
      Type: "movie";
      Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg";
    }
  ];
}

export interface ITab {
  Tab: [
    {
      id: 1;
      title: "HTML";
      paragraph: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
      img: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/09/HTML-Effects-Featured.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5";
    }
  ];
}
