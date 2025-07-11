import type {
  ILeaderboardRepository,
  Leaderboard,
} from "05_shared/models/leaderboardRepository"
import { localStorageMock } from "05_shared/utils/localStorageMock"

import { LeaderboardRepository } from "../LeaderboardRepository"

global.localStorage = localStorageMock as any

const leaderboardStoreKey = "leaderboard"
const playerName = "Bob"

function getDeserializedLeaderboard() {
  const raw = localStorage.getItem(leaderboardStoreKey)
  if (!raw) return new Map()
  const parsed: Leaderboard = new Map(JSON.parse(raw))
  if (!parsed) return new Map()
  return parsed
}

describe("LeaderboardRepository", () => {
  let repo: ILeaderboardRepository

  beforeEach(() => {
    repo = new LeaderboardRepository()
    localStorage.clear()
    vi.clearAllMocks()
  })

  it("should register new player", () => {
    repo.registerNewPlayer(playerName)

    const store = getDeserializedLeaderboard()
    expect(store.get(playerName)).toEqual({ name: playerName, record: 0 })
  })

  it("should not register duplicate players", () => {
    repo.registerNewPlayer(playerName)
    repo.registerNewPlayer(playerName)

    const store = getDeserializedLeaderboard()
    expect(store.size).toBe(1)
  })

  it("should save winner and increment record", () => {
    repo.registerNewPlayer(playerName)
    repo.incrementWinnerRecord(playerName)

    const store = getDeserializedLeaderboard()
    expect(store.get(playerName)).toEqual({ name: playerName, record: 1 })
  })

  it("should save winner when saving unknown winner", () => {
    repo.incrementWinnerRecord(playerName)

    const store = getDeserializedLeaderboard()
    expect(store.get(playerName)).toEqual({ name: playerName, record: 1 })
  })

  it("should clear leaderboard", () => {
    repo.registerNewPlayer(playerName)
    repo.clear()
    expect(localStorage.getItem(leaderboardStoreKey)).toBeNull()
  })
})
