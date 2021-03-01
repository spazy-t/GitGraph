//TODO: send data to store state
//TODO: return fetch promise and in SearcBar handle .then's etc

export const getGitData = (userName) => {
    //grab token from hidden env file
    const { REACT_APP_GIT_TOKEN } = process.env
    //fetch promise call to GitHub graphQL to get passed in user's calendar contributions
    fetch('https://api.github.com/graphql', {
        method: 'POST',
        body: JSON.stringify({
            query:
                `query {
                    user(login: "${userName}") {
                        contributionsCollection {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        color
                                        contributionCount
                                        date
                                    }
                                }
                            }
                        }
                    }
                }`
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${REACT_APP_GIT_TOKEN}`
        }
    })
    .then(data => data.json())
    .then(res => console.log(res))
    .catch(err => console.log('error getting GitHub data', err))
}