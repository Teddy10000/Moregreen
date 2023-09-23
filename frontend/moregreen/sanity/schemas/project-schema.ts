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
    ],

}

export default project;