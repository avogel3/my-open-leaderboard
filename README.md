# my-open-leaderboard

### Features Still In Development...


* **Why:** I didn't like crossfit.com's leaderboard, so I made my own that I can customize as I please.
* **How:** Using a AWS Lambda(proxy) for an endpoint. That endpoint hits the crossfit API for a given affiliate: this preserves their CORS policy, and I didn't have to bootstrap my own backend off the rip.



## Working in Development


Install your dependencies:  
```
yarn 
```

Currently I use a saved response from my Lambda Function in development. This is just a copy/pasta of a crossfit.com API response from this endpoint:  
```
https://games.crossfit.com/competitions/api/v1/competitions/open/2019/leaderboards?affiliate=2060&division=1&scaled=0&page=1
```

Optionally, you may want to filter athletes from your data. You can do this by specifying their `competitorName` as comma separated values in your `.env` file. See `.env.example`



