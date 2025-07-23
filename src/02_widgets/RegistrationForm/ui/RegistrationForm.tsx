import { PlayerSymbol } from "@05_shared/models/global"
import { UIButton } from "@05_shared/ui/UIButton"
import { UIInput } from "@05_shared/ui/UIInput"
import { UITile } from "@05_shared/ui/UITile"
import { type FC } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import { defaultPlayerNameFieldRules, errorMessagesMap } from "../config"
import { type FormData } from "../models"
import "../styles/styles.scss"
import { RegistrationFormSelectSymbol } from "./RegistrationFormSelectSymbol"

export const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors, isValid, dirtyFields },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      firstPlayerName: "",
      firstPlayerSymbol: null,
      secondPlayerName: "",
    },
  })

  const navigate = useNavigate()

  const isFirstPlayerValid =
    !errors.firstPlayerName && dirtyFields.firstPlayerName

  const isSecondPlayerValid =
    !errors.secondPlayerName && dirtyFields.secondPlayerName

  const onSubmit = handleSubmit((data) => {
    const secondPlayerSymbol =
      data.firstPlayerSymbol === PlayerSymbol.X
        ? PlayerSymbol.O
        : PlayerSymbol.X

    navigate("/game", {
      state: {
        [data.firstPlayerName]: data.firstPlayerSymbol,
        [data.secondPlayerName]: secondPlayerSymbol,
      },
    })
  })

  const handlePlayerSymbolSelect = (playerSymbol: PlayerSymbol) => {
    setValue("firstPlayerSymbol", playerSymbol, { shouldValidate: true })
  }

  return (
    <UITile className="w-full sm:max-w-md">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <UIInput
          label="First player name"
          id="first-player-name"
          error={errors.firstPlayerName?.message}
          {...register("firstPlayerName", defaultPlayerNameFieldRules)}
        />

        <UIInput
          label="Secondary player name"
          id="secondary-player-name"
          disabled={!isFirstPlayerValid}
          error={errors.secondPlayerName?.message}
          {...register("secondPlayerName", {
            ...defaultPlayerNameFieldRules,
            validate: (value) =>
              value !== getValues("firstPlayerName") ||
              errorMessagesMap.different,
          })}
        />

        <RegistrationFormSelectSymbol
          playerName={watch("firstPlayerName")}
          disabled={!isFirstPlayerValid || !isSecondPlayerValid}
          selected={getValues("firstPlayerSymbol")}
          handleSelect={handlePlayerSymbolSelect}
          {...register("firstPlayerSymbol", {
            required: errorMessagesMap.required,
          })}
        />

        <UIButton className="mt-8" type="submit" disabled={!isValid}>
          Play
        </UIButton>
      </form>
    </UITile>
  )
}
