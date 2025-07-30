export const PlayersNames = { Player1: "Player1", Player2: "Player2" } as const

export const Selectors = {
  // Registration Page
  FIRST_PLAYER_NAME: '[data-cy="first-player-name"]',
  SECOND_PLAYER_NAME: '[data-cy="second-player-name"]',
  CROSS_SYMBOL_BUTTON: '[data-cy="button-cross-symbol"]',
  PLAY_BUTTON: '[data-cy="play-button"]',

  // Game Page
  GAME_PAGE: '[data-cy="game-page"',
  GAME_CANVAS: '[data-cy="game-canvas"]',
  CURRENT_PLAYER_NAME: '[data-cy="current-player-name"]',
  PLAY_AGAIN_BUTTON: '[data-cy="play-again-button"]',
  BACK_PLAY_LINK: '[data-cy="back-play-link"]',
  LEADERBOARD_LINK: '[data-cy="leaderboard-link"]',

  // Leaderboard Page
  LEADERBOARD_PAGE: '[data-cy="leaderboard-page"]',
  LEADERBOARD_ITEM: '[data-cy="leaderboard-list-item"]',
} as const
