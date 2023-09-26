const project = {

    name: 'project',
    title: 'Life Bet',
    type: 'document',
    fields: [
      {
        name: 'date',
        title: 'Date',
        type: 'date',
      },
      {
        name: 'teams',
        title: 'Teams',
        type: 'object',
        fields: [
          {
            name: 'team1',
            title: 'Team 1',
            type: 'string',
          },
          {
            name: 'team2',
            title: 'Team 2',
            type: 'string',
          },
          {
            name: 'league',
            title: 'League',
            type: 'string',
            options: {
              list: [
                { title: 'Premier League', value: 'premier-league' },
                { title: 'La Liga', value: 'la-liga' },
                { title: 'Bundesliga', value: 'bundesliga' },
                { title: 'Serie A', value: 'serie-a' },
                { title: 'Ligue 1', value: 'ligue-1' },
                { title: 'MLS', value: 'mls' },
                { title: 'Eredivisie', value: 'eredivisie' },
                { title: 'Primeira Liga', value: 'primeira-liga' },
                { title: 'Brasileirão', value: 'brasileirao' },
                { title: 'Argentine Primera División', value: 'argentine-primera-division' },
                // Add more leagues from different countries
              ],
            },
          },
        ],
      },
      {
        name: 'prediction',
        title: 'Prediction',
        type: 'string',
      },
      {
        name: 'outcome',
        title: 'Outcome',
        type: 'boolean',
      },
      {
        name: 'matchstart',
        title: 'MatchStarted',
        type: 'boolean',
      },
      {
        name: 'Freebet',
        title: 'Freebet',
        type: 'boolean',
      },
    ],

}

export default project;