export const MIN_PLAYER_NAME_LENGTH = 3
export const MAX_PLAYER_NAME_LENGTH = 15

export const errorMessagesMap = {
  required: "Field is required",
  minLength: `Minimum ${MIN_PLAYER_NAME_LENGTH} characters`,
  maxLength: `Maximum ${MAX_PLAYER_NAME_LENGTH} characters`,
  different: "Names must be different",
  onlyLettersOrNumber: "Only letters or numbers are allowed",
}

export const defaultPlayerNameFieldRules = {
  required: errorMessagesMap.required,
  minLength: {
    value: MIN_PLAYER_NAME_LENGTH,
    message: errorMessagesMap.minLength,
  },
  maxLength: {
    value: MAX_PLAYER_NAME_LENGTH,
    message: errorMessagesMap.maxLength,
  },
  pattern: {
    value: /^[a-zA-Z0-9]+$/,
    message: errorMessagesMap.onlyLettersOrNumber,
  },
}
